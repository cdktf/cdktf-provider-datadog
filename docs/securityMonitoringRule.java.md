# `datadog_security_monitoring_rule`

Refer to the Terraform Registory for docs: [`datadog_security_monitoring_rule`](https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule).

# `securityMonitoringRule` Submodule <a name="`securityMonitoringRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringRule <a name="SecurityMonitoringRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRule;

SecurityMonitoringRule.Builder.create(Construct scope, java.lang.String id)
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
    .case(IResolvable)
    .case(java.util.List<SecurityMonitoringRuleCase>)
    .message(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<SecurityMonitoringRuleFilter>)
//  .hasExtendedTitle(java.lang.Boolean)
//  .hasExtendedTitle(IResolvable)
//  .id(java.lang.String)
//  .options(SecurityMonitoringRuleOptions)
//  .query(IResolvable)
//  .query(java.util.List<SecurityMonitoringRuleQuery>)
//  .signalQuery(IResolvable)
//  .signalQuery(java.util.List<SecurityMonitoringRuleSignalQuery>)
//  .tags(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.case">case</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>></code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | Message for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.hasExtendedTitle">hasExtendedTitle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.query">query</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.signalQuery">signalQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>></code> | signal_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The rule type. Valid values are `log_detection`, `workload_security`, `signal_correlation`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.case"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>>

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.message"></a>

- *Type:* java.lang.String

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `hasExtendedTitle`<sup>Optional</sup> <a name="hasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.hasExtendedTitle"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the notifications include the triggering group-by values in their title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.query"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `signalQuery`<sup>Optional</sup> <a name="signalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.signalQuery"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>>

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The rule type. Valid values are `log_detection`, `workload_security`, `signal_correlation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase">putCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery">putSignalQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle">resetHasExtendedTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery">resetSignalQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCase` <a name="putCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase"></a>

```java
public void putCase(IResolvable OR java.util.List<SecurityMonitoringRuleCase> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<SecurityMonitoringRuleFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>>

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions"></a>

```java
public void putOptions(SecurityMonitoringRuleOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery"></a>

```java
public void putQuery(IResolvable OR java.util.List<SecurityMonitoringRuleQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>>

---

##### `putSignalQuery` <a name="putSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery"></a>

```java
public void putSignalQuery(IResolvable OR java.util.List<SecurityMonitoringRuleSignalQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetHasExtendedTitle` <a name="resetHasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle"></a>

```java
public void resetHasExtendedTitle()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId"></a>

```java
public void resetId()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetSignalQuery` <a name="resetSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery"></a>

```java
public void resetSignalQuery()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRule;

SecurityMonitoringRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRule;

SecurityMonitoringRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRule;

SecurityMonitoringRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case">case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery">signalQuery</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput">caseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput">hasExtendedTitleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput">queryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput">signalQueryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle">hasExtendedTitle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case"></a>

```java
public SecurityMonitoringRuleCaseList getCase();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter"></a>

```java
public SecurityMonitoringRuleFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options"></a>

```java
public SecurityMonitoringRuleOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query"></a>

```java
public SecurityMonitoringRuleQueryList getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a>

---

##### `signalQuery`<sup>Required</sup> <a name="signalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery"></a>

```java
public SecurityMonitoringRuleSignalQueryList getSignalQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a>

---

##### `caseInput`<sup>Optional</sup> <a name="caseInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput"></a>

```java
public java.lang.Object getCaseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>>

---

##### `hasExtendedTitleInput`<sup>Optional</sup> <a name="hasExtendedTitleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput"></a>

```java
public java.lang.Object getHasExtendedTitleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput"></a>

```java
public SecurityMonitoringRuleOptions getOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput"></a>

```java
public java.lang.Object getQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>>

---

##### `signalQueryInput`<sup>Optional</sup> <a name="signalQueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput"></a>

```java
public java.lang.Object getSignalQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hasExtendedTitle`<sup>Required</sup> <a name="hasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle"></a>

```java
public java.lang.Object getHasExtendedTitle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringRuleCase <a name="SecurityMonitoringRuleCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleCase;

SecurityMonitoringRuleCase.builder()
    .status(java.lang.String)
//  .condition(java.lang.String)
//  .name(java.lang.String)
//  .notifications(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status">status</a></code> | <code>java.lang.String</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition">condition</a></code> | <code>java.lang.String</code> | A rule case contains logical operations (`>`,`>=`, `&&`, `\|\|`) to determine if a signal should be generated based on the event counts in the previously defined queries. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name">name</a></code> | <code>java.lang.String</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | Notification targets for each rule case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

### SecurityMonitoringRuleConfig <a name="SecurityMonitoringRuleConfig" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleConfig;

SecurityMonitoringRuleConfig.builder()
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
    .case(IResolvable)
    .case(java.util.List<SecurityMonitoringRuleCase>)
    .message(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<SecurityMonitoringRuleFilter>)
//  .hasExtendedTitle(java.lang.Boolean)
//  .hasExtendedTitle(IResolvable)
//  .id(java.lang.String)
//  .options(SecurityMonitoringRuleOptions)
//  .query(IResolvable)
//  .query(java.util.List<SecurityMonitoringRuleQuery>)
//  .signalQuery(IResolvable)
//  .signalQuery(java.util.List<SecurityMonitoringRuleSignalQuery>)
//  .tags(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case">case</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>></code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message">message</a></code> | <code>java.lang.String</code> | Message for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle">hasExtendedTitle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query">query</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery">signalQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>></code> | signal_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | The rule type. Valid values are `log_detection`, `workload_security`, `signal_correlation`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case"></a>

```java
public java.lang.Object getCase();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>>

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `hasExtendedTitle`<sup>Optional</sup> <a name="hasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle"></a>

```java
public java.lang.Object getHasExtendedTitle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the notifications include the triggering group-by values in their title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options"></a>

```java
public SecurityMonitoringRuleOptions getOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query"></a>

```java
public java.lang.Object getQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `signalQuery`<sup>Optional</sup> <a name="signalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery"></a>

```java
public java.lang.Object getSignalQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>>

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The rule type. Valid values are `log_detection`, `workload_security`, `signal_correlation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

### SecurityMonitoringRuleFilter <a name="SecurityMonitoringRuleFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleFilter;

SecurityMonitoringRuleFilter.builder()
    .action(java.lang.String)
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action">action</a></code> | <code>java.lang.String</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query">query</a></code> | <code>java.lang.String</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

### SecurityMonitoringRuleOptions <a name="SecurityMonitoringRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleOptions;

SecurityMonitoringRuleOptions.builder()
    .keepAlive(java.lang.Number)
    .maxSignalDuration(java.lang.Number)
//  .decreaseCriticalityBasedOnEnv(java.lang.Boolean)
//  .decreaseCriticalityBasedOnEnv(IResolvable)
//  .detectionMethod(java.lang.String)
//  .evaluationWindow(java.lang.Number)
//  .impossibleTravelOptions(SecurityMonitoringRuleOptionsImpossibleTravelOptions)
//  .newValueOptions(SecurityMonitoringRuleOptionsNewValueOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive">keepAlive</a></code> | <code>java.lang.Number</code> | Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration">maxSignalDuration</a></code> | <code>java.lang.Number</code> | A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod">detectionMethod</a></code> | <code>java.lang.String</code> | The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow">evaluationWindow</a></code> | <code>java.lang.Number</code> | A time window is specified to match when at least one of the cases matches true. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions">impossibleTravelOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | impossible_travel_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions">newValueOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | new_value_options block. |

---

##### `keepAlive`<sup>Required</sup> <a name="keepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive"></a>

```java
public java.lang.Number getKeepAlive();
```

- *Type:* java.lang.Number

Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds).

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}

---

##### `maxSignalDuration`<sup>Required</sup> <a name="maxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration"></a>

```java
public java.lang.Number getMaxSignalDuration();
```

- *Type:* java.lang.Number

A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds).

This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}

---

##### `decreaseCriticalityBasedOnEnv`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```java
public java.lang.Object getDecreaseCriticalityBasedOnEnv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}

---

##### `detectionMethod`<sup>Optional</sup> <a name="detectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod"></a>

```java
public java.lang.String getDetectionMethod();
```

- *Type:* java.lang.String

The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow"></a>

```java
public java.lang.Number getEvaluationWindow();
```

- *Type:* java.lang.Number

A time window is specified to match when at least one of the cases matches true.

This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

##### `impossibleTravelOptions`<sup>Optional</sup> <a name="impossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions"></a>

```java
public SecurityMonitoringRuleOptionsImpossibleTravelOptions getImpossibleTravelOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

impossible_travel_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}

---

##### `newValueOptions`<sup>Optional</sup> <a name="newValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions"></a>

```java
public SecurityMonitoringRuleOptionsNewValueOptions getNewValueOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

new_value_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}

---

### SecurityMonitoringRuleOptionsImpossibleTravelOptions <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleOptionsImpossibleTravelOptions;

SecurityMonitoringRuleOptionsImpossibleTravelOptions.builder()
//  .baselineUserLocations(java.lang.Boolean)
//  .baselineUserLocations(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations">baselineUserLocations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, signals are suppressed for the first 24 hours. |

---

##### `baselineUserLocations`<sup>Optional</sup> <a name="baselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations"></a>

```java
public java.lang.Object getBaselineUserLocations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, signals are suppressed for the first 24 hours.

During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}

---

### SecurityMonitoringRuleOptionsNewValueOptions <a name="SecurityMonitoringRuleOptionsNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleOptionsNewValueOptions;

SecurityMonitoringRuleOptionsNewValueOptions.builder()
    .forgetAfter(java.lang.Number)
//  .learningDuration(java.lang.Number)
//  .learningMethod(java.lang.String)
//  .learningThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter">forgetAfter</a></code> | <code>java.lang.Number</code> | The duration in days after which a learned value is forgotten. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration">learningDuration</a></code> | <code>java.lang.Number</code> | The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod">learningMethod</a></code> | <code>java.lang.String</code> | The learning method used to determine when signals should be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold">learningThreshold</a></code> | <code>java.lang.Number</code> | A number of occurrences after which signals are generated for values that weren't learned. Valid values are `0`, `1`. |

---

##### `forgetAfter`<sup>Required</sup> <a name="forgetAfter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter"></a>

```java
public java.lang.Number getForgetAfter();
```

- *Type:* java.lang.Number

The duration in days after which a learned value is forgotten.

Valid values are `1`, `2`, `7`, `14`, `21`, `28`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}

---

##### `learningDuration`<sup>Optional</sup> <a name="learningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration"></a>

```java
public java.lang.Number getLearningDuration();
```

- *Type:* java.lang.Number

The duration in days during which values are learned, and after which signals will be generated for values that weren't learned.

If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

##### `learningMethod`<sup>Optional</sup> <a name="learningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod"></a>

```java
public java.lang.String getLearningMethod();
```

- *Type:* java.lang.String

The learning method used to determine when signals should be generated for values that weren't learned.

Valid values are `duration`, `threshold`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}

---

##### `learningThreshold`<sup>Optional</sup> <a name="learningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold"></a>

```java
public java.lang.Number getLearningThreshold();
```

- *Type:* java.lang.Number

A number of occurrences after which signals are generated for values that weren't learned. Valid values are `0`, `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}

---

### SecurityMonitoringRuleQuery <a name="SecurityMonitoringRuleQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleQuery;

SecurityMonitoringRuleQuery.builder()
    .query(java.lang.String)
//  .agentRule(IResolvable)
//  .agentRule(java.util.List<SecurityMonitoringRuleQueryAgentRule>)
//  .aggregation(java.lang.String)
//  .distinctFields(java.util.List<java.lang.String>)
//  .groupByFields(java.util.List<java.lang.String>)
//  .metric(java.lang.String)
//  .metrics(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query">query</a></code> | <code>java.lang.String</code> | Query to run on logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule">agentRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>></code> | agent_rule block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields">distinctFields</a></code> | <code>java.util.List<java.lang.String></code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields to group by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric">metric</a></code> | <code>java.lang.String</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics">metrics</a></code> | <code>java.util.List<java.lang.String></code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name">name</a></code> | <code>java.lang.String</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `agentRule`<sup>Optional</sup> <a name="agentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule"></a>

```java
public java.lang.Object getAgentRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>>

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `distinctFields`<sup>Optional</sup> <a name="distinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields"></a>

```java
public java.util.List<java.lang.String> getDistinctFields();
```

- *Type:* java.util.List<java.lang.String>

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

**Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics"></a>

```java
public java.util.List<java.lang.String> getMetrics();
```

- *Type:* java.util.List<java.lang.String>

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleQueryAgentRule <a name="SecurityMonitoringRuleQueryAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleQueryAgentRule;

SecurityMonitoringRuleQueryAgentRule.builder()
    .agentRuleId(java.lang.String)
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId">agentRuleId</a></code> | <code>java.lang.String</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression">expression</a></code> | <code>java.lang.String</code> | **Deprecated**. It won't be applied anymore. |

---

##### `agentRuleId`<sup>Required</sup> <a name="agentRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId"></a>

```java
public java.lang.String getAgentRuleId();
```

- *Type:* java.lang.String

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

### SecurityMonitoringRuleSignalQuery <a name="SecurityMonitoringRuleSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleSignalQuery;

SecurityMonitoringRuleSignalQuery.builder()
    .ruleId(java.lang.String)
//  .aggregation(java.lang.String)
//  .correlatedByFields(java.util.List<java.lang.String>)
//  .correlatedQueryIndex(java.lang.String)
//  .defaultRuleId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Rule ID of the signal to correlate. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields">correlatedByFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields to correlate by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex">correlatedQueryIndex</a></code> | <code>java.lang.String</code> | Index of the rule query used to retrieve the correlated field. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId">defaultRuleId</a></code> | <code>java.lang.String</code> | Default Rule ID of the signal to correlate. This value is READ-ONLY. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name">name</a></code> | <code>java.lang.String</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Rule ID of the signal to correlate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `correlatedByFields`<sup>Optional</sup> <a name="correlatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields"></a>

```java
public java.util.List<java.lang.String> getCorrelatedByFields();
```

- *Type:* java.util.List<java.lang.String>

Fields to correlate by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}

---

##### `correlatedQueryIndex`<sup>Optional</sup> <a name="correlatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex"></a>

```java
public java.lang.String getCorrelatedQueryIndex();
```

- *Type:* java.lang.String

Index of the rule query used to retrieve the correlated field.

An empty string applies correlation on the non-projected per query attributes of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}

---

##### `defaultRuleId`<sup>Optional</sup> <a name="defaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId"></a>

```java
public java.lang.String getDefaultRuleId();
```

- *Type:* java.lang.String

Default Rule ID of the signal to correlate. This value is READ-ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#default_rule_id SecurityMonitoringRule#default_rule_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringRuleCaseList <a name="SecurityMonitoringRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleCaseList;

new SecurityMonitoringRuleCaseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get"></a>

```java
public SecurityMonitoringRuleCaseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>>

---


### SecurityMonitoringRuleCaseOutputReference <a name="SecurityMonitoringRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleCaseOutputReference;

new SecurityMonitoringRuleCaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications">resetNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications"></a>

```java
public void resetNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput">notificationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a> OR com.hashicorp.cdktf.IResolvable

---


### SecurityMonitoringRuleFilterList <a name="SecurityMonitoringRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleFilterList;

new SecurityMonitoringRuleFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get"></a>

```java
public SecurityMonitoringRuleFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>>

---


### SecurityMonitoringRuleFilterOutputReference <a name="SecurityMonitoringRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleFilterOutputReference;

new SecurityMonitoringRuleFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference;

new SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations">resetBaselineUserLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaselineUserLocations` <a name="resetBaselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations"></a>

```java
public void resetBaselineUserLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput">baselineUserLocationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations">baselineUserLocations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baselineUserLocationsInput`<sup>Optional</sup> <a name="baselineUserLocationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput"></a>

```java
public java.lang.Object getBaselineUserLocationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baselineUserLocations`<sup>Required</sup> <a name="baselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations"></a>

```java
public java.lang.Object getBaselineUserLocations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue"></a>

```java
public SecurityMonitoringRuleOptionsImpossibleTravelOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---


### SecurityMonitoringRuleOptionsNewValueOptionsOutputReference <a name="SecurityMonitoringRuleOptionsNewValueOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference;

new SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration">resetLearningDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod">resetLearningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold">resetLearningThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLearningDuration` <a name="resetLearningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration"></a>

```java
public void resetLearningDuration()
```

##### `resetLearningMethod` <a name="resetLearningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod"></a>

```java
public void resetLearningMethod()
```

##### `resetLearningThreshold` <a name="resetLearningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold"></a>

```java
public void resetLearningThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput">forgetAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput">learningDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput">learningMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput">learningThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter">forgetAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration">learningDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod">learningMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold">learningThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forgetAfterInput`<sup>Optional</sup> <a name="forgetAfterInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput"></a>

```java
public java.lang.Number getForgetAfterInput();
```

- *Type:* java.lang.Number

---

##### `learningDurationInput`<sup>Optional</sup> <a name="learningDurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput"></a>

```java
public java.lang.Number getLearningDurationInput();
```

- *Type:* java.lang.Number

---

##### `learningMethodInput`<sup>Optional</sup> <a name="learningMethodInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput"></a>

```java
public java.lang.String getLearningMethodInput();
```

- *Type:* java.lang.String

---

##### `learningThresholdInput`<sup>Optional</sup> <a name="learningThresholdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput"></a>

```java
public java.lang.Number getLearningThresholdInput();
```

- *Type:* java.lang.Number

---

##### `forgetAfter`<sup>Required</sup> <a name="forgetAfter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter"></a>

```java
public java.lang.Number getForgetAfter();
```

- *Type:* java.lang.Number

---

##### `learningDuration`<sup>Required</sup> <a name="learningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration"></a>

```java
public java.lang.Number getLearningDuration();
```

- *Type:* java.lang.Number

---

##### `learningMethod`<sup>Required</sup> <a name="learningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod"></a>

```java
public java.lang.String getLearningMethod();
```

- *Type:* java.lang.String

---

##### `learningThreshold`<sup>Required</sup> <a name="learningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold"></a>

```java
public java.lang.Number getLearningThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue"></a>

```java
public SecurityMonitoringRuleOptionsNewValueOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---


### SecurityMonitoringRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleOptionsOutputReference;

new SecurityMonitoringRuleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions">putImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions">putNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">resetDecreaseCriticalityBasedOnEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod">resetDetectionMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow">resetEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions">resetImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions">resetNewValueOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImpossibleTravelOptions` <a name="putImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions"></a>

```java
public void putImpossibleTravelOptions(SecurityMonitoringRuleOptionsImpossibleTravelOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `putNewValueOptions` <a name="putNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions"></a>

```java
public void putNewValueOptions(SecurityMonitoringRuleOptionsNewValueOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `resetDecreaseCriticalityBasedOnEnv` <a name="resetDecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```java
public void resetDecreaseCriticalityBasedOnEnv()
```

##### `resetDetectionMethod` <a name="resetDetectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod"></a>

```java
public void resetDetectionMethod()
```

##### `resetEvaluationWindow` <a name="resetEvaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow"></a>

```java
public void resetEvaluationWindow()
```

##### `resetImpossibleTravelOptions` <a name="resetImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions"></a>

```java
public void resetImpossibleTravelOptions()
```

##### `resetNewValueOptions` <a name="resetNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions"></a>

```java
public void resetNewValueOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions">impossibleTravelOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions">newValueOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">decreaseCriticalityBasedOnEnvInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput">detectionMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput">evaluationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput">impossibleTravelOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput">keepAliveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput">maxSignalDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput">newValueOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decreaseCriticalityBasedOnEnv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod">detectionMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow">evaluationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive">keepAlive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration">maxSignalDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `impossibleTravelOptions`<sup>Required</sup> <a name="impossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions"></a>

```java
public SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference getImpossibleTravelOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a>

---

##### `newValueOptions`<sup>Required</sup> <a name="newValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions"></a>

```java
public SecurityMonitoringRuleOptionsNewValueOptionsOutputReference getNewValueOptions();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a>

---

##### `decreaseCriticalityBasedOnEnvInput`<sup>Optional</sup> <a name="decreaseCriticalityBasedOnEnvInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```java
public java.lang.Object getDecreaseCriticalityBasedOnEnvInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `detectionMethodInput`<sup>Optional</sup> <a name="detectionMethodInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput"></a>

```java
public java.lang.String getDetectionMethodInput();
```

- *Type:* java.lang.String

---

##### `evaluationWindowInput`<sup>Optional</sup> <a name="evaluationWindowInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput"></a>

```java
public java.lang.Number getEvaluationWindowInput();
```

- *Type:* java.lang.Number

---

##### `impossibleTravelOptionsInput`<sup>Optional</sup> <a name="impossibleTravelOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput"></a>

```java
public SecurityMonitoringRuleOptionsImpossibleTravelOptions getImpossibleTravelOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `keepAliveInput`<sup>Optional</sup> <a name="keepAliveInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput"></a>

```java
public java.lang.Number getKeepAliveInput();
```

- *Type:* java.lang.Number

---

##### `maxSignalDurationInput`<sup>Optional</sup> <a name="maxSignalDurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput"></a>

```java
public java.lang.Number getMaxSignalDurationInput();
```

- *Type:* java.lang.Number

---

##### `newValueOptionsInput`<sup>Optional</sup> <a name="newValueOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput"></a>

```java
public SecurityMonitoringRuleOptionsNewValueOptions getNewValueOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `decreaseCriticalityBasedOnEnv`<sup>Required</sup> <a name="decreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```java
public java.lang.Object getDecreaseCriticalityBasedOnEnv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `detectionMethod`<sup>Required</sup> <a name="detectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod"></a>

```java
public java.lang.String getDetectionMethod();
```

- *Type:* java.lang.String

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow"></a>

```java
public java.lang.Number getEvaluationWindow();
```

- *Type:* java.lang.Number

---

##### `keepAlive`<sup>Required</sup> <a name="keepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive"></a>

```java
public java.lang.Number getKeepAlive();
```

- *Type:* java.lang.Number

---

##### `maxSignalDuration`<sup>Required</sup> <a name="maxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration"></a>

```java
public java.lang.Number getMaxSignalDuration();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue"></a>

```java
public SecurityMonitoringRuleOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---


### SecurityMonitoringRuleQueryAgentRuleList <a name="SecurityMonitoringRuleQueryAgentRuleList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleQueryAgentRuleList;

new SecurityMonitoringRuleQueryAgentRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get"></a>

```java
public SecurityMonitoringRuleQueryAgentRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>>

---


### SecurityMonitoringRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringRuleQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleQueryAgentRuleOutputReference;

new SecurityMonitoringRuleQueryAgentRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">agentRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId">agentRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentRuleIdInput`<sup>Optional</sup> <a name="agentRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```java
public java.lang.String getAgentRuleIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `agentRuleId`<sup>Required</sup> <a name="agentRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```java
public java.lang.String getAgentRuleId();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a> OR com.hashicorp.cdktf.IResolvable

---


### SecurityMonitoringRuleQueryList <a name="SecurityMonitoringRuleQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleQueryList;

new SecurityMonitoringRuleQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get"></a>

```java
public SecurityMonitoringRuleQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>>

---


### SecurityMonitoringRuleQueryOutputReference <a name="SecurityMonitoringRuleQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleQueryOutputReference;

new SecurityMonitoringRuleQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule">putAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule">resetAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields">resetDistinctFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentRule` <a name="putAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule"></a>

```java
public void putAgentRule(IResolvable OR java.util.List<SecurityMonitoringRuleQueryAgentRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>>

---

##### `resetAgentRule` <a name="resetAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule"></a>

```java
public void resetAgentRule()
```

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetDistinctFields` <a name="resetDistinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields"></a>

```java
public void resetDistinctFields()
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields"></a>

```java
public void resetGroupByFields()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule">agentRule</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput">agentRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput">distinctFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput">metricsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields">distinctFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics">metrics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentRule`<sup>Required</sup> <a name="agentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule"></a>

```java
public SecurityMonitoringRuleQueryAgentRuleList getAgentRule();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a>

---

##### `agentRuleInput`<sup>Optional</sup> <a name="agentRuleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput"></a>

```java
public java.lang.Object getAgentRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `distinctFieldsInput`<sup>Optional</sup> <a name="distinctFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput"></a>

```java
public java.util.List<java.lang.String> getDistinctFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput"></a>

```java
public java.util.List<java.lang.String> getGroupByFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput"></a>

```java
public java.util.List<java.lang.String> getMetricsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `distinctFields`<sup>Required</sup> <a name="distinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields"></a>

```java
public java.util.List<java.lang.String> getDistinctFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics"></a>

```java
public java.util.List<java.lang.String> getMetrics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a> OR com.hashicorp.cdktf.IResolvable

---


### SecurityMonitoringRuleSignalQueryList <a name="SecurityMonitoringRuleSignalQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleSignalQueryList;

new SecurityMonitoringRuleSignalQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get"></a>

```java
public SecurityMonitoringRuleSignalQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>>

---


### SecurityMonitoringRuleSignalQueryOutputReference <a name="SecurityMonitoringRuleSignalQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.security_monitoring_rule.SecurityMonitoringRuleSignalQueryOutputReference;

new SecurityMonitoringRuleSignalQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields">resetCorrelatedByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex">resetCorrelatedQueryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId">resetDefaultRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetCorrelatedByFields` <a name="resetCorrelatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields"></a>

```java
public void resetCorrelatedByFields()
```

##### `resetCorrelatedQueryIndex` <a name="resetCorrelatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex"></a>

```java
public void resetCorrelatedQueryIndex()
```

##### `resetDefaultRuleId` <a name="resetDefaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId"></a>

```java
public void resetDefaultRuleId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput">correlatedByFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput">correlatedQueryIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput">defaultRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields">correlatedByFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex">correlatedQueryIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId">defaultRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `correlatedByFieldsInput`<sup>Optional</sup> <a name="correlatedByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput"></a>

```java
public java.util.List<java.lang.String> getCorrelatedByFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `correlatedQueryIndexInput`<sup>Optional</sup> <a name="correlatedQueryIndexInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput"></a>

```java
public java.lang.String getCorrelatedQueryIndexInput();
```

- *Type:* java.lang.String

---

##### `defaultRuleIdInput`<sup>Optional</sup> <a name="defaultRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput"></a>

```java
public java.lang.String getDefaultRuleIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `correlatedByFields`<sup>Required</sup> <a name="correlatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields"></a>

```java
public java.util.List<java.lang.String> getCorrelatedByFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `correlatedQueryIndex`<sup>Required</sup> <a name="correlatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex"></a>

```java
public java.lang.String getCorrelatedQueryIndex();
```

- *Type:* java.lang.String

---

##### `defaultRuleId`<sup>Required</sup> <a name="defaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId"></a>

```java
public java.lang.String getDefaultRuleId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a> OR com.hashicorp.cdktf.IResolvable

---



