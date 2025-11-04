# `incidentNotificationRule` Submodule <a name="`incidentNotificationRule` Submodule" id="@cdktf/provider-datadog.incidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentNotificationRule <a name="IncidentNotificationRule" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  handles: typing.List[str],
  incident_type: str,
  trigger: str,
  conditions: IResolvable | typing.List[IncidentNotificationRuleConditions] = None,
  enabled: bool | IResolvable = None,
  notification_template: str = None,
  renotify_on: typing.List[str] = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.handles">handles</a></code> | <code>typing.List[str]</code> | The notification handles (targets) for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this notification rule is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.trigger">trigger</a></code> | <code>str</code> | The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.conditions">conditions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the notification rule is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.notificationTemplate">notification_template</a></code> | <code>str</code> | The ID of the notification template to use for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.renotifyOn">renotify_on</a></code> | <code>typing.List[str]</code> | List of incident fields that trigger re-notification when changed. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.handles"></a>

- *Type:* typing.List[str]

The notification handles (targets) for this rule.

Examples:

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.incidentType"></a>

- *Type:* str

The ID of the incident type this notification rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.trigger"></a>

- *Type:* str

The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.conditions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the notification rule is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}

---

##### `notification_template`<sup>Optional</sup> <a name="notification_template" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.notificationTemplate"></a>

- *Type:* str

The ID of the notification template to use for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}

---

##### `renotify_on`<sup>Optional</sup> <a name="renotify_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.renotifyOn"></a>

- *Type:* typing.List[str]

List of incident fields that trigger re-notification when changed.

Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate">reset_notification_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn">reset_renotify_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[IncidentNotificationRuleConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_notification_template` <a name="reset_notification_template" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetNotificationTemplate"></a>

```python
def reset_notification_template() -> None
```

##### `reset_renotify_on` <a name="reset_renotify_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetRenotifyOn"></a>

```python
def reset_renotify_on() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput">conditions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput">handles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput">notification_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput">renotify_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput">trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles">handles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate">notification_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn">renotify_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditions"></a>

```python
conditions: IncidentNotificationRuleConditionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList">IncidentNotificationRuleConditionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[IncidentNotificationRuleConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `handles_input`<sup>Optional</sup> <a name="handles_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handlesInput"></a>

```python
handles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `notification_template_input`<sup>Optional</sup> <a name="notification_template_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplateInput"></a>

```python
notification_template_input: str
```

- *Type:* str

---

##### `renotify_on_input`<sup>Optional</sup> <a name="renotify_on_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOnInput"></a>

```python
renotify_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.triggerInput"></a>

```python
trigger_input: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.handles"></a>

```python
handles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `notification_template`<sup>Required</sup> <a name="notification_template" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.notificationTemplate"></a>

```python
notification_template: str
```

- *Type:* str

---

##### `renotify_on`<sup>Required</sup> <a name="renotify_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.renotifyOn"></a>

```python
renotify_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentNotificationRuleConditions <a name="IncidentNotificationRuleConditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRuleConditions(
  field: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field">field</a></code> | <code>str</code> | The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values">values</a></code> | <code>typing.List[str]</code> | The value(s) to compare against. Multiple values are ORed together. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.field"></a>

```python
field: str
```

- *Type:* str

The incident field to evaluate. Common values include: state, severity, services, teams. Custom fields are also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#field IncidentNotificationRule#field}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The value(s) to compare against. Multiple values are ORed together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#values IncidentNotificationRule#values}

---

### IncidentNotificationRuleConfig <a name="IncidentNotificationRuleConfig" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  handles: typing.List[str],
  incident_type: str,
  trigger: str,
  conditions: IResolvable | typing.List[IncidentNotificationRuleConditions] = None,
  enabled: bool | IResolvable = None,
  notification_template: str = None,
  renotify_on: typing.List[str] = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles">handles</a></code> | <code>typing.List[str]</code> | The notification handles (targets) for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this notification rule is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger">trigger</a></code> | <code>str</code> | The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the notification rule is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate">notification_template</a></code> | <code>str</code> | The ID of the notification template to use for this rule. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn">renotify_on</a></code> | <code>typing.List[str]</code> | List of incident fields that trigger re-notification when changed. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.handles"></a>

```python
handles: typing.List[str]
```

- *Type:* typing.List[str]

The notification handles (targets) for this rule.

Examples:

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

The ID of the incident type this notification rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#incident_type IncidentNotificationRule#incident_type}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

The trigger event for this notification rule. Valid values are: incident_created_trigger, incident_saved_trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#trigger IncidentNotificationRule#trigger}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[IncidentNotificationRuleConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#conditions IncidentNotificationRule#conditions}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the notification rule is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#enabled IncidentNotificationRule#enabled}

---

##### `notification_template`<sup>Optional</sup> <a name="notification_template" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.notificationTemplate"></a>

```python
notification_template: str
```

- *Type:* str

The ID of the notification template to use for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#notification_template IncidentNotificationRule#notification_template}

---

##### `renotify_on`<sup>Optional</sup> <a name="renotify_on" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.renotifyOn"></a>

```python
renotify_on: typing.List[str]
```

- *Type:* typing.List[str]

List of incident fields that trigger re-notification when changed.

Valid values are: status, severity, customer_impact, title, description, detected, root_cause, services, state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#renotify_on IncidentNotificationRule#renotify_on}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the notification rule. Valid values are: all, organization, private. Defaults to organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/incident_notification_rule#visibility IncidentNotificationRule#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentNotificationRuleConditionsList <a name="IncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentNotificationRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IncidentNotificationRuleConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>]

---


### IncidentNotificationRuleConditionsOutputReference <a name="IncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_rule

incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IncidentNotificationRuleConditions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.incidentNotificationRule.IncidentNotificationRuleConditions">IncidentNotificationRuleConditions</a>

---



