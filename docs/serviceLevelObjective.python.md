# `serviceLevelObjective` Submodule <a name="`serviceLevelObjective` Submodule" id="@cdktf/provider-datadog.serviceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjective(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  thresholds: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveThresholds]],
  type: str,
  description: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  groups: typing.List[str] = None,
  id: str = None,
  monitor_ids: typing.List[typing.Union[int, float]] = None,
  query: ServiceLevelObjectiveQuery = None,
  sli_specification: ServiceLevelObjectiveSliSpecification = None,
  tags: typing.List[str] = None,
  target_threshold: typing.Union[int, float] = None,
  timeframe: str = None,
  validate: typing.Union[bool, IResolvable] = None,
  warning_threshold: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.thresholds">thresholds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]</code> | thresholds block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.monitorIds">monitor_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.sliSpecification">sli_specification</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | sli_specification block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.targetThreshold">target_threshold</a></code> | <code>typing.Union[int, float]</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.timeframe">timeframe</a></code> | <code>str</code> | The primary time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | The objective's warning value in `(0,100)`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.name"></a>

- *Type:* str

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.thresholds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.type"></a>

- *Type:* str

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`, `time_slice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.description"></a>

- *Type:* str

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor_ids`<sup>Optional</sup> <a name="monitor_ids" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.monitorIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `sli_specification`<sup>Optional</sup> <a name="sli_specification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.sliSpecification"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

sli_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#sli_specification ServiceLevelObjective#sli_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `target_threshold`<sup>Optional</sup> <a name="target_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.targetThreshold"></a>

- *Type:* typing.Union[int, float]

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.timeframe"></a>

- *Type:* str

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.validate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warning_threshold`<sup>Optional</sup> <a name="warning_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.warningThreshold"></a>

- *Type:* typing.Union[int, float]

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification">put_sli_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds">put_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds">reset_monitor_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetSliSpecification">reset_sli_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold">reset_target_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe">reset_timeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate">reset_validate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold">reset_warning_threshold</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_query` <a name="put_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery"></a>

```python
def put_query(
  denominator: str,
  numerator: str
) -> None
```

###### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.denominator"></a>

- *Type:* str

The sum of the `total` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

###### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.numerator"></a>

- *Type:* str

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

##### `put_sli_specification` <a name="put_sli_specification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification"></a>

```python
def put_sli_specification(
  time_slice: ServiceLevelObjectiveSliSpecificationTimeSlice
) -> None
```

###### `time_slice`<sup>Required</sup> <a name="time_slice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putSliSpecification.parameter.timeSlice"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

time_slice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#time_slice ServiceLevelObjective#time_slice}

---

##### `put_thresholds` <a name="put_thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds"></a>

```python
def put_thresholds(
  value: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveThresholds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monitor_ids` <a name="reset_monitor_ids" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds"></a>

```python
def reset_monitor_ids() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_sli_specification` <a name="reset_sli_specification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetSliSpecification"></a>

```python
def reset_sli_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_threshold` <a name="reset_target_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold"></a>

```python
def reset_target_threshold() -> None
```

##### `reset_timeframe` <a name="reset_timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe"></a>

```python
def reset_timeframe() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate"></a>

```python
def reset_validate() -> None
```

##### `reset_warning_threshold` <a name="reset_warning_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold"></a>

```python
def reset_warning_threshold() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjective.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjective.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjective.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjective.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceLevelObjective resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceLevelObjective to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevelObjective to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecification">sli_specification</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference">ServiceLevelObjectiveSliSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds">thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput">monitor_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput">query_input</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecificationInput">sli_specification_input</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput">target_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput">thresholds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput">timeframe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput">validate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput">warning_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds">monitor_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold">target_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe">timeframe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query"></a>

```python
query: ServiceLevelObjectiveQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a>

---

##### `sli_specification`<sup>Required</sup> <a name="sli_specification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecification"></a>

```python
sli_specification: ServiceLevelObjectiveSliSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference">ServiceLevelObjectiveSliSpecificationOutputReference</a>

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds"></a>

```python
thresholds: ServiceLevelObjectiveThresholdsList
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitor_ids_input`<sup>Optional</sup> <a name="monitor_ids_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput"></a>

```python
monitor_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput"></a>

```python
query_input: ServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `sli_specification_input`<sup>Optional</sup> <a name="sli_specification_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.sliSpecificationInput"></a>

```python
sli_specification_input: ServiceLevelObjectiveSliSpecification
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_threshold_input`<sup>Optional</sup> <a name="target_threshold_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput"></a>

```python
target_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `thresholds_input`<sup>Optional</sup> <a name="thresholds_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput"></a>

```python
thresholds_input: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveThresholds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]

---

##### `timeframe_input`<sup>Optional</sup> <a name="timeframe_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput"></a>

```python
timeframe_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput"></a>

```python
validate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `warning_threshold_input`<sup>Optional</sup> <a name="warning_threshold_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput"></a>

```python
warning_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_ids`<sup>Required</sup> <a name="monitor_ids" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds"></a>

```python
monitor_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_threshold`<sup>Required</sup> <a name="target_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold"></a>

```python
target_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate"></a>

```python
validate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `warning_threshold`<sup>Required</sup> <a name="warning_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelObjectiveConfig <a name="ServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  thresholds: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveThresholds]],
  type: str,
  description: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  groups: typing.List[str] = None,
  id: str = None,
  monitor_ids: typing.List[typing.Union[int, float]] = None,
  query: ServiceLevelObjectiveQuery = None,
  sli_specification: ServiceLevelObjectiveSliSpecification = None,
  tags: typing.List[str] = None,
  target_threshold: typing.Union[int, float] = None,
  timeframe: str = None,
  validate: typing.Union[bool, IResolvable] = None,
  warning_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name">name</a></code> | <code>str</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds">thresholds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]</code> | thresholds block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type">type</a></code> | <code>str</code> | The type of the service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description">description</a></code> | <code>str</code> | A description of this service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds">monitor_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.sliSpecification">sli_specification</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | sli_specification block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold">target_threshold</a></code> | <code>typing.Union[int, float]</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe">timeframe</a></code> | <code>str</code> | The primary time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | The objective's warning value in `(0,100)`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `thresholds`<sup>Required</sup> <a name="thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds"></a>

```python
thresholds: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveThresholds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`, `time_slice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor_ids`<sup>Optional</sup> <a name="monitor_ids" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds"></a>

```python
monitor_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query"></a>

```python
query: ServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `sli_specification`<sup>Optional</sup> <a name="sli_specification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.sliSpecification"></a>

```python
sli_specification: ServiceLevelObjectiveSliSpecification
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

sli_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#sli_specification ServiceLevelObjective#sli_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `target_threshold`<sup>Optional</sup> <a name="target_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold"></a>

```python
target_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `timeframe`<sup>Optional</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate"></a>

```python
validate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to validate the SLO. It checks if monitors added to a monitor SLO already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `warning_threshold`<sup>Optional</sup> <a name="warning_threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

### ServiceLevelObjectiveQuery <a name="ServiceLevelObjectiveQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveQuery(
  denominator: str,
  numerator: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator">denominator</a></code> | <code>str</code> | The sum of the `total` events. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator">numerator</a></code> | <code>str</code> | The sum of all the `good` events. |

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator"></a>

```python
denominator: str
```

- *Type:* str

The sum of the `total` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator"></a>

```python
numerator: str
```

- *Type:* str

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

### ServiceLevelObjectiveSliSpecification <a name="ServiceLevelObjectiveSliSpecification" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecification(
  time_slice: ServiceLevelObjectiveSliSpecificationTimeSlice
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.timeSlice">time_slice</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | time_slice block. |

---

##### `time_slice`<sup>Required</sup> <a name="time_slice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification.property.timeSlice"></a>

```python
time_slice: ServiceLevelObjectiveSliSpecificationTimeSlice
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

time_slice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#time_slice ServiceLevelObjective#time_slice}

---

### ServiceLevelObjectiveSliSpecificationTimeSlice <a name="ServiceLevelObjectiveSliSpecificationTimeSlice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice(
  comparator: str,
  query: ServiceLevelObjectiveSliSpecificationTimeSliceQuery,
  threshold: typing.Union[int, float],
  query_interval_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.comparator">comparator</a></code> | <code>str</code> | The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold value to which each SLI value will be compared. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.queryIntervalSeconds">query_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The interval used when querying data, which defines the size of a time slice. |

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.comparator"></a>

```python
comparator: str
```

- *Type:* str

The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#comparator ServiceLevelObjective#comparator}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.query"></a>

```python
query: ServiceLevelObjectiveSliSpecificationTimeSliceQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold value to which each SLI value will be compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#threshold ServiceLevelObjective#threshold}

---

##### `query_interval_seconds`<sup>Optional</sup> <a name="query_interval_seconds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice.property.queryIntervalSeconds"></a>

```python
query_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval used when querying data, which defines the size of a time slice.

Valid values are `60`, `300`. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query_interval_seconds ServiceLevelObjective#query_interval_seconds}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery(
  formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula,
  query: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.formula">formula</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | formula block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.query">query</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]</code> | query block. |

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.formula"></a>

```python
formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

formula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#formula ServiceLevelObjective#formula}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery.property.query"></a>

```python
query: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula(
  formula_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.property.formulaExpression">formula_expression</a></code> | <code>str</code> | The formula string, which is an expression involving named queries. |

---

##### `formula_expression`<sup>Required</sup> <a name="formula_expression" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula.property.formulaExpression"></a>

```python
formula_expression: str
```

- *Type:* str

The formula string, which is an expression involving named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#formula_expression ServiceLevelObjective#formula_expression}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery(
  metric_query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.property.metricQuery">metric_query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | metric_query block. |

---

##### `metric_query`<sup>Optional</sup> <a name="metric_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery.property.metricQuery"></a>

```python
metric_query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

metric_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#metric_query ServiceLevelObjective#metric_query}

---

### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery(
  name: str,
  query: str,
  data_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.name">name</a></code> | <code>str</code> | The name of the query for use in formulas. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.query">query</a></code> | <code>str</code> | The metrics query definition. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.dataSource">data_source</a></code> | <code>str</code> | The data source for metrics queries. Defaults to `"metrics"`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.query"></a>

```python
query: str
```

- *Type:* str

The metrics query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

The data source for metrics queries. Defaults to `"metrics"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#data_source ServiceLevelObjective#data_source}

---

### ServiceLevelObjectiveThresholds <a name="ServiceLevelObjectiveThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveThresholds(
  target: typing.Union[int, float],
  timeframe: str,
  warning: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target">target</a></code> | <code>typing.Union[int, float]</code> | The objective's target in `(0,100)`. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe">timeframe</a></code> | <code>str</code> | The time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning">warning</a></code> | <code>typing.Union[int, float]</code> | The objective's warning value in `(0,100)`. This must be greater than the target value. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The objective's target in `(0,100)`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#target ServiceLevelObjective#target}

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

The time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning"></a>

```python
warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The objective's warning value in `(0,100)`. This must be greater than the target value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelObjectiveQueryOutputReference <a name="ServiceLevelObjectiveQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput">denominator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput">numerator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator">denominator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator">numerator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `denominator_input`<sup>Optional</sup> <a name="denominator_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput"></a>

```python
denominator_input: str
```

- *Type:* str

---

##### `numerator_input`<sup>Optional</sup> <a name="numerator_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput"></a>

```python
numerator_input: str
```

- *Type:* str

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```python
denominator: str
```

- *Type:* str

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```python
numerator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---


### ServiceLevelObjectiveSliSpecificationOutputReference <a name="ServiceLevelObjectiveSliSpecificationOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice">put_time_slice</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time_slice` <a name="put_time_slice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice"></a>

```python
def put_time_slice(
  comparator: str,
  query: ServiceLevelObjectiveSliSpecificationTimeSliceQuery,
  threshold: typing.Union[int, float],
  query_interval_seconds: typing.Union[int, float] = None
) -> None
```

###### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice.parameter.comparator"></a>

- *Type:* str

The comparator used to compare the SLI value to the threshold. Valid values are `>`, `>=`, `<`, `<=`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#comparator ServiceLevelObjective#comparator}

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The threshold value to which each SLI value will be compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#threshold ServiceLevelObjective#threshold}

---

###### `query_interval_seconds`<sup>Optional</sup> <a name="query_interval_seconds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.putTimeSlice.parameter.queryIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The interval used when querying data, which defines the size of a time slice.

Valid values are `60`, `300`. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query_interval_seconds ServiceLevelObjective#query_interval_seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSlice">time_slice</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSliceInput">time_slice_input</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_slice`<sup>Required</sup> <a name="time_slice" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSlice"></a>

```python
time_slice: ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference</a>

---

##### `time_slice_input`<sup>Optional</sup> <a name="time_slice_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.timeSliceInput"></a>

```python
time_slice_input: ServiceLevelObjectiveSliSpecificationTimeSlice
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveSliSpecification
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecification">ServiceLevelObjectiveSliSpecification</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resetQueryIntervalSeconds">reset_query_interval_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_query` <a name="put_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery"></a>

```python
def put_query(
  formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula,
  query: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]]
) -> None
```

###### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery.parameter.formula"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

formula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#formula ServiceLevelObjective#formula}

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.putQuery.parameter.query"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `reset_query_interval_seconds` <a name="reset_query_interval_seconds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.resetQueryIntervalSeconds"></a>

```python
def reset_query_interval_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparatorInput">comparator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryInput">query_input</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSecondsInput">query_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparator">comparator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSeconds">query_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.query"></a>

```python
query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference</a>

---

##### `comparator_input`<sup>Optional</sup> <a name="comparator_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparatorInput"></a>

```python
comparator_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryInput"></a>

```python
query_input: ServiceLevelObjectiveSliSpecificationTimeSliceQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---

##### `query_interval_seconds_input`<sup>Optional</sup> <a name="query_interval_seconds_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSecondsInput"></a>

```python
query_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.comparator"></a>

```python
comparator: str
```

- *Type:* str

---

##### `query_interval_seconds`<sup>Required</sup> <a name="query_interval_seconds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.queryIntervalSeconds"></a>

```python
query_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveSliSpecificationTimeSlice
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSlice">ServiceLevelObjectiveSliSpecificationTimeSlice</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpressionInput">formula_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpression">formula_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `formula_expression_input`<sup>Optional</sup> <a name="formula_expression_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpressionInput"></a>

```python
formula_expression_input: str
```

- *Type:* str

---

##### `formula_expression`<sup>Required</sup> <a name="formula_expression" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.formulaExpression"></a>

```python
formula_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula">put_formula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery">put_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_formula` <a name="put_formula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula"></a>

```python
def put_formula(
  formula_expression: str
) -> None
```

###### `formula_expression`<sup>Required</sup> <a name="formula_expression" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putFormula.parameter.formulaExpression"></a>

- *Type:* str

The formula string, which is an expression involving named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#formula_expression ServiceLevelObjective#formula_expression}

---

##### `put_query` <a name="put_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery"></a>

```python
def put_query(
  value: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.putQuery.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formula">formula</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formulaInput">formula_input</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.queryInput">query_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `formula`<sup>Required</sup> <a name="formula" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formula"></a>

```python
formula: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormulaOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.query"></a>

```python
query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList</a>

---

##### `formula_input`<sup>Optional</sup> <a name="formula_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.formulaInput"></a>

```python
formula_input: ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula">ServiceLevelObjectiveSliSpecificationTimeSliceQueryFormula</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.queryInput"></a>

```python
query_input: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveSliSpecificationTimeSliceQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQuery</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]]

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_source` <a name="reset_data_source" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---


### ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference <a name="ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery">put_metric_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resetMetricQuery">reset_metric_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_query` <a name="put_metric_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery"></a>

```python
def put_metric_query(
  name: str,
  query: str,
  data_source: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery.parameter.name"></a>

- *Type:* str

The name of the query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery.parameter.query"></a>

- *Type:* str

The metrics query definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

###### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.putMetricQuery.parameter.dataSource"></a>

- *Type:* str

The data source for metrics queries. Defaults to `"metrics"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/service_level_objective#data_source ServiceLevelObjective#data_source}

---

##### `reset_metric_query` <a name="reset_metric_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.resetMetricQuery"></a>

```python
def reset_metric_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQuery">metric_query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQueryInput">metric_query_input</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_query`<sup>Required</sup> <a name="metric_query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQuery"></a>

```python
metric_query: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQueryOutputReference</a>

---

##### `metric_query_input`<sup>Optional</sup> <a name="metric_query_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.metricQueryInput"></a>

```python
metric_query_input: ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryMetricQuery</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQueryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery">ServiceLevelObjectiveSliSpecificationTimeSliceQueryQuery</a>]

---


### ServiceLevelObjectiveThresholdsList <a name="ServiceLevelObjectiveThresholdsList" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveThresholdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceLevelObjectiveThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceLevelObjectiveThresholds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]]

---


### ServiceLevelObjectiveThresholdsOutputReference <a name="ServiceLevelObjectiveThresholdsOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import service_level_objective

serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning">reset_warning</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning"></a>

```python
def reset_warning() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay">target_display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay">warning_display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput">timeframe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput">warning_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe">timeframe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning">warning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_display`<sup>Required</sup> <a name="target_display" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay"></a>

```python
target_display: str
```

- *Type:* str

---

##### `warning_display`<sup>Required</sup> <a name="warning_display" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay"></a>

```python
warning_display: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeframe_input`<sup>Optional</sup> <a name="timeframe_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput"></a>

```python
timeframe_input: str
```

- *Type:* str

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput"></a>

```python
warning_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning"></a>

```python
warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceLevelObjectiveThresholds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds">ServiceLevelObjectiveThresholds</a>]

---



