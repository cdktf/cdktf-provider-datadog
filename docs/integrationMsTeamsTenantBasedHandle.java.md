# `integrationMsTeamsTenantBasedHandle` Submodule <a name="`integrationMsTeamsTenantBasedHandle` Submodule" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMsTeamsTenantBasedHandle <a name="IntegrationMsTeamsTenantBasedHandle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle datadog_integration_ms_teams_tenant_based_handle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_ms_teams_tenant_based_handle.IntegrationMsTeamsTenantBasedHandle;

IntegrationMsTeamsTenantBasedHandle.Builder.create(Construct scope, java.lang.String id)
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
    .channelName(java.lang.String)
    .name(java.lang.String)
    .teamName(java.lang.String)
    .tenantName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Your channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Your tenant-based handle name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.teamName">teamName</a></code> | <code>java.lang.String</code> | Your team name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.tenantName">tenantName</a></code> | <code>java.lang.String</code> | Your tenant name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Your channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#channel_name IntegrationMsTeamsTenantBasedHandle#channel_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Your tenant-based handle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#name IntegrationMsTeamsTenantBasedHandle#name}

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.teamName"></a>

- *Type:* java.lang.String

Your team name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#team_name IntegrationMsTeamsTenantBasedHandle#team_name}

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.tenantName"></a>

- *Type:* java.lang.String

Your tenant name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#tenant_name IntegrationMsTeamsTenantBasedHandle#tenant_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_ms_teams_tenant_based_handle.IntegrationMsTeamsTenantBasedHandle;

IntegrationMsTeamsTenantBasedHandle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_ms_teams_tenant_based_handle.IntegrationMsTeamsTenantBasedHandle;

IntegrationMsTeamsTenantBasedHandle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_ms_teams_tenant_based_handle.IntegrationMsTeamsTenantBasedHandle;

IntegrationMsTeamsTenantBasedHandle.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_ms_teams_tenant_based_handle.IntegrationMsTeamsTenantBasedHandle;

IntegrationMsTeamsTenantBasedHandle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationMsTeamsTenantBasedHandle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationMsTeamsTenantBasedHandle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationMsTeamsTenantBasedHandle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMsTeamsTenantBasedHandle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput">teamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput">tenantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName">teamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput"></a>

```java
public java.lang.String getTeamNameInput();
```

- *Type:* java.lang.String

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput"></a>

```java
public java.lang.String getTenantNameInput();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMsTeamsTenantBasedHandleConfig <a name="IntegrationMsTeamsTenantBasedHandleConfig" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_ms_teams_tenant_based_handle.IntegrationMsTeamsTenantBasedHandleConfig;

IntegrationMsTeamsTenantBasedHandleConfig.builder()
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
    .channelName(java.lang.String)
    .name(java.lang.String)
    .teamName(java.lang.String)
    .tenantName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Your channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Your tenant-based handle name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName">teamName</a></code> | <code>java.lang.String</code> | Your team name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | Your tenant name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Your channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#channel_name IntegrationMsTeamsTenantBasedHandle#channel_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Your tenant-based handle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#name IntegrationMsTeamsTenantBasedHandle#name}

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

Your team name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#team_name IntegrationMsTeamsTenantBasedHandle#team_name}

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

Your tenant name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/integration_ms_teams_tenant_based_handle#tenant_name IntegrationMsTeamsTenantBasedHandle#tenant_name}

---



