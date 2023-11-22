# `datadog_service_level_objective`

Refer to the Terraform Registory for docs: [`datadog_service_level_objective`](https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective).

# `serviceLevelObjective` Submodule <a name="`serviceLevelObjective` Submodule" id="@cdktf/provider-datadog.serviceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjective;

ServiceLevelObjective.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .thresholds(IResolvable)
    .thresholds(java.util.List<ServiceLevelObjectiveThresholds>)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .groups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .monitorIds(java.util.List<java.lang.Number>)
//  .query(ServiceLevelObjectiveQuery)
//  .tags(java.util.List<java.lang.String>)
//  .targetThreshold(java.lang.Number)
//  .timeframe(java.lang.String)
//  .validate(java.lang.Boolean)
//  .validate(IResolvable)
//  .warningThreshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.thresholds">thresholds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>></code> | thresholds block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.monitorIds">monitorIds</a></code> | <code>java.util.List<java.lang.Number></code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.targetThreshold">targetThreshold</a></code> | <code>java.lang.Number</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.timeframe">timeframe</a></code> | <code>java.lang.String</code> | The primary time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.validate">validate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to validate the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.warningThreshold">warningThreshold</a></code> | <code>java.lang.Number</code> | The objective's warning value in `(0,100)`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.thresholds"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>>

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorIds`<sup>Optional</sup> <a name="monitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.monitorIds"></a>

- *Type:* java.util.List<java.lang.Number>

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `targetThreshold`<sup>Optional</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.targetThreshold"></a>

- *Type:* java.lang.Number

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.timeframe"></a>

- *Type:* java.lang.String

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.validate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to validate the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.warningThreshold"></a>

- *Type:* java.lang.Number

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds">putThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds">resetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold">resetTargetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe">resetTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold">resetWarningThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery"></a>

```java
public void putQuery(ServiceLevelObjectiveQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `putThresholds` <a name="putThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds"></a>

```java
public void putThresholds(IResolvable OR java.util.List<ServiceLevelObjectiveThresholds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId"></a>

```java
public void resetId()
```

##### `resetMonitorIds` <a name="resetMonitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds"></a>

```java
public void resetMonitorIds()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetThreshold` <a name="resetTargetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold"></a>

```java
public void resetTargetThreshold()
```

##### `resetTimeframe` <a name="resetTimeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe"></a>

```java
public void resetTimeframe()
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate"></a>

```java
public void resetValidate()
```

##### `resetWarningThreshold` <a name="resetWarningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold"></a>

```java
public void resetWarningThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjective;

ServiceLevelObjective.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjective;

ServiceLevelObjective.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjective;

ServiceLevelObjective.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjective;

ServiceLevelObjective.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceLevelObjective.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceLevelObjective to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevelObjective to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds">thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput">monitorIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput">targetThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput">thresholdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput">timeframeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput">validateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput">warningThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds">monitorIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold">targetThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate">validate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold">warningThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query"></a>

```java
public ServiceLevelObjectiveQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a>

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds"></a>

```java
public ServiceLevelObjectiveThresholdsList getThresholds();
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitorIdsInput`<sup>Optional</sup> <a name="monitorIdsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput"></a>

```java
public java.util.List<java.lang.Number> getMonitorIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput"></a>

```java
public ServiceLevelObjectiveQuery getQueryInput();
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetThresholdInput`<sup>Optional</sup> <a name="targetThresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput"></a>

```java
public java.lang.Number getTargetThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdsInput`<sup>Optional</sup> <a name="thresholdsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput"></a>

```java
public java.lang.Object getThresholdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>>

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput"></a>

```java
public java.lang.String getTimeframeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput"></a>

```java
public java.lang.Object getValidateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `warningThresholdInput`<sup>Optional</sup> <a name="warningThresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput"></a>

```java
public java.lang.Number getWarningThresholdInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorIds`<sup>Required</sup> <a name="monitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds"></a>

```java
public java.util.List<java.lang.Number> getMonitorIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetThreshold`<sup>Required</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold"></a>

```java
public java.lang.Number getTargetThreshold();
```

- *Type:* java.lang.Number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate"></a>

```java
public java.lang.Object getValidate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold"></a>

```java
public java.lang.Number getWarningThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelObjectiveConfig <a name="ServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjectiveConfig;

ServiceLevelObjectiveConfig.builder()
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
    .name(java.lang.String)
    .thresholds(IResolvable)
    .thresholds(java.util.List<ServiceLevelObjectiveThresholds>)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .groups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .monitorIds(java.util.List<java.lang.Number>)
//  .query(ServiceLevelObjectiveQuery)
//  .tags(java.util.List<java.lang.String>)
//  .targetThreshold(java.lang.Number)
//  .timeframe(java.lang.String)
//  .validate(java.lang.Boolean)
//  .validate(IResolvable)
//  .warningThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds">thresholds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>></code> | thresholds block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds">monitorIds</a></code> | <code>java.util.List<java.lang.Number></code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold">targetThreshold</a></code> | <code>java.lang.Number</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | The primary time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate">validate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to validate the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold">warningThreshold</a></code> | <code>java.lang.Number</code> | The objective's warning value in `(0,100)`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds"></a>

```java
public java.lang.Object getThresholds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>>

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorIds`<sup>Optional</sup> <a name="monitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds"></a>

```java
public java.util.List<java.lang.Number> getMonitorIds();
```

- *Type:* java.util.List<java.lang.Number>

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query"></a>

```java
public ServiceLevelObjectiveQuery getQuery();
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `targetThreshold`<sup>Optional</sup> <a name="targetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold"></a>

```java
public java.lang.Number getTargetThreshold();
```

- *Type:* java.lang.Number

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate"></a>

```java
public java.lang.Object getValidate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to validate the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold"></a>

```java
public java.lang.Number getWarningThreshold();
```

- *Type:* java.lang.Number

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

### ServiceLevelObjectiveQuery <a name="ServiceLevelObjectiveQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjectiveQuery;

ServiceLevelObjectiveQuery.builder()
    .denominator(java.lang.String)
    .numerator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator">denominator</a></code> | <code>java.lang.String</code> | The sum of the `total` events. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator">numerator</a></code> | <code>java.lang.String</code> | The sum of all the `good` events. |

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator"></a>

```java
public java.lang.String getDenominator();
```

- *Type:* java.lang.String

The sum of the `total` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator"></a>

```java
public java.lang.String getNumerator();
```

- *Type:* java.lang.String

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

### ServiceLevelObjectiveThresholds <a name="ServiceLevelObjectiveThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjectiveThresholds;

ServiceLevelObjectiveThresholds.builder()
    .target(java.lang.Number)
    .timeframe(java.lang.String)
//  .warning(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target">target</a></code> | <code>java.lang.Number</code> | The objective's target in `(0,100)`. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | The time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning">warning</a></code> | <code>java.lang.Number</code> | The objective's warning value in `(0,100)`. This must be greater than the target value. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

The objective's target in `(0,100)`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#target ServiceLevelObjective#target}

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

The time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning"></a>

```java
public java.lang.Number getWarning();
```

- *Type:* java.lang.Number

The objective's warning value in `(0,100)`. This must be greater than the target value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelObjectiveQueryOutputReference <a name="ServiceLevelObjectiveQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjectiveQueryOutputReference;

new ServiceLevelObjectiveQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput">denominatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput">numeratorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator">denominator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator">numerator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denominatorInput`<sup>Optional</sup> <a name="denominatorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput"></a>

```java
public java.lang.String getDenominatorInput();
```

- *Type:* java.lang.String

---

##### `numeratorInput`<sup>Optional</sup> <a name="numeratorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput"></a>

```java
public java.lang.String getNumeratorInput();
```

- *Type:* java.lang.String

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```java
public java.lang.String getDenominator();
```

- *Type:* java.lang.String

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```java
public java.lang.String getNumerator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```java
public ServiceLevelObjectiveQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---


### ServiceLevelObjectiveThresholdsList <a name="ServiceLevelObjectiveThresholdsList" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjectiveThresholdsList;

new ServiceLevelObjectiveThresholdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get"></a>

```java
public ServiceLevelObjectiveThresholdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>>

---


### ServiceLevelObjectiveThresholdsOutputReference <a name="ServiceLevelObjectiveThresholdsOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.service_level_objective.ServiceLevelObjectiveThresholdsOutputReference;

new ServiceLevelObjectiveThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning"></a>

```java
public void resetWarning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay">targetDisplay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay">warningDisplay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput">timeframeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput">warningInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning">warning</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetDisplay`<sup>Required</sup> <a name="targetDisplay" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay"></a>

```java
public java.lang.String getTargetDisplay();
```

- *Type:* java.lang.String

---

##### `warningDisplay`<sup>Required</sup> <a name="warningDisplay" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay"></a>

```java
public java.lang.String getWarningDisplay();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput"></a>

```java
public java.lang.String getTimeframeInput();
```

- *Type:* java.lang.String

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput"></a>

```java
public java.lang.Number getWarningInput();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning"></a>

```java
public java.lang.Number getWarning();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>

---



