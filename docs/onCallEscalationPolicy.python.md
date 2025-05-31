# `onCallEscalationPolicy` Submodule <a name="`onCallEscalationPolicy` Submodule" id="@cdktf/provider-datadog.onCallEscalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallEscalationPolicy <a name="OnCallEscalationPolicy" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy datadog_on_call_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicy(
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
  resolve_page_on_policy_end: typing.Union[bool, IResolvable] = None,
  retries: typing.Union[int, float] = None,
  step: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStep]] = None,
  teams: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-readable name for the escalation policy. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.resolvePageOnPolicyEnd">resolve_page_on_policy_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, pages will be automatically resolved if unacknowledged after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | If set, policy will be retried this many times after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]</code> | step block. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.teams">teams</a></code> | <code>typing.List[str]</code> | A list of team ids associated with the escalation policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.name"></a>

- *Type:* str

A human-readable name for the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}

---

##### `resolve_page_on_policy_end`<sup>Optional</sup> <a name="resolve_page_on_policy_end" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.resolvePageOnPolicyEnd"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, pages will be automatically resolved if unacknowledged after the final step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

If set, policy will be retried this many times after the final step.

Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.step"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.teams"></a>

- *Type:* typing.List[str]

A list of team ids associated with the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep">put_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd">reset_resolve_page_on_policy_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep">reset_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_step` <a name="put_step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep"></a>

```python
def put_step(
  value: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStep]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]

---

##### `reset_resolve_page_on_policy_end` <a name="reset_resolve_page_on_policy_end" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd"></a>

```python
def reset_resolve_page_on_policy_end() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_step` <a name="reset_step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep"></a>

```python
def reset_step() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams"></a>

```python
def reset_teams() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OnCallEscalationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OnCallEscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnCallEscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step">step</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput">resolve_page_on_policy_end_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput">step_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd">resolve_page_on_policy_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step"></a>

```python
step: OnCallEscalationPolicyStepList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resolve_page_on_policy_end_input`<sup>Optional</sup> <a name="resolve_page_on_policy_end_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput"></a>

```python
resolve_page_on_policy_end_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_input`<sup>Optional</sup> <a name="step_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput"></a>

```python
step_input: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resolve_page_on_policy_end`<sup>Required</sup> <a name="resolve_page_on_policy_end" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd"></a>

```python
resolve_page_on_policy_end: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallEscalationPolicyConfig <a name="OnCallEscalationPolicyConfig" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resolve_page_on_policy_end: typing.Union[bool, IResolvable] = None,
  retries: typing.Union[int, float] = None,
  step: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStep]] = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name">name</a></code> | <code>str</code> | A human-readable name for the escalation policy. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd">resolve_page_on_policy_end</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, pages will be automatically resolved if unacknowledged after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | If set, policy will be retried this many times after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]</code> | step block. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams">teams</a></code> | <code>typing.List[str]</code> | A list of team ids associated with the escalation policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}

---

##### `resolve_page_on_policy_end`<sup>Optional</sup> <a name="resolve_page_on_policy_end" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd"></a>

```python
resolve_page_on_policy_end: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, pages will be automatically resolved if unacknowledged after the final step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, policy will be retried this many times after the final step.

Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step"></a>

```python
step: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

A list of team ids associated with the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}

---

### OnCallEscalationPolicyStep <a name="OnCallEscalationPolicyStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyStep(
  escalate_after_seconds: typing.Union[int, float],
  assignment: str = None,
  target: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStepTarget]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds">escalate_after_seconds</a></code> | <code>typing.Union[int, float]</code> | Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment">assignment</a></code> | <code>str</code> | Specifies how this escalation step will assign targets. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target">target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]</code> | target block. |

---

##### `escalate_after_seconds`<sup>Required</sup> <a name="escalate_after_seconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds"></a>

```python
escalate_after_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#escalate_after_seconds OnCallEscalationPolicy#escalate_after_seconds}

---

##### `assignment`<sup>Optional</sup> <a name="assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment"></a>

```python
assignment: str
```

- *Type:* str

Specifies how this escalation step will assign targets.

Can be `default` (page all targets at once) or `round-robin`. Valid values are `assignment`, `round-robin`. Defaults to `"default"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#assignment OnCallEscalationPolicy#assignment}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target"></a>

```python
target: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStepTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#target OnCallEscalationPolicy#target}

---

### OnCallEscalationPolicyStepTarget <a name="OnCallEscalationPolicyStepTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyStepTarget(
  schedule: str = None,
  team: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule">schedule</a></code> | <code>str</code> | Targeted schedule ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team">team</a></code> | <code>str</code> | Targeted team ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user">user</a></code> | <code>str</code> | Targeted user ID. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Targeted schedule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#schedule OnCallEscalationPolicy#schedule}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team"></a>

```python
team: str
```

- *Type:* str

Targeted team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#team OnCallEscalationPolicy#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user"></a>

```python
user: str
```

- *Type:* str

Targeted user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#user OnCallEscalationPolicy#user}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallEscalationPolicyStepList <a name="OnCallEscalationPolicyStepList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallEscalationPolicyStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]]

---


### OnCallEscalationPolicyStepOutputReference <a name="OnCallEscalationPolicyStepOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment">reset_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget"></a>

```python
def put_target(
  value: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStepTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]

---

##### `reset_assignment` <a name="reset_assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment"></a>

```python
def reset_assignment() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput">assignment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput">escalate_after_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment">assignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds">escalate_after_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target"></a>

```python
target: OnCallEscalationPolicyStepTargetList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a>

---

##### `assignment_input`<sup>Optional</sup> <a name="assignment_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput"></a>

```python
assignment_input: str
```

- *Type:* str

---

##### `escalate_after_seconds_input`<sup>Optional</sup> <a name="escalate_after_seconds_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput"></a>

```python
escalate_after_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStepTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]

---

##### `assignment`<sup>Required</sup> <a name="assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment"></a>

```python
assignment: str
```

- *Type:* str

---

##### `escalate_after_seconds`<sup>Required</sup> <a name="escalate_after_seconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds"></a>

```python
escalate_after_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnCallEscalationPolicyStep]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep">OnCallEscalationPolicyStep</a>]

---


### OnCallEscalationPolicyStepTargetList <a name="OnCallEscalationPolicyStepTargetList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallEscalationPolicyStepTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OnCallEscalationPolicyStepTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]]

---


### OnCallEscalationPolicyStepTargetOutputReference <a name="OnCallEscalationPolicyStepTargetOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_escalation_policy

onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam">reset_team</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_team` <a name="reset_team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam"></a>

```python
def reset_team() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput">team_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team">team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `team_input`<sup>Optional</sup> <a name="team_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput"></a>

```python
team_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team"></a>

```python
team: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnCallEscalationPolicyStepTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget">OnCallEscalationPolicyStepTarget</a>]

---



