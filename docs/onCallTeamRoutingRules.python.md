# `onCallTeamRoutingRules` Submodule <a name="`onCallTeamRoutingRules` Submodule" id="@cdktf/provider-datadog.onCallTeamRoutingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallTeamRoutingRules <a name="OnCallTeamRoutingRules" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules datadog_on_call_team_routing_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRules(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  rule: IResolvable | typing.List[OnCallTeamRoutingRulesRule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id">id</a></code> | <code>str</code> | ID of the team to associate the routing rules with. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id"></a>

- *Type:* str

ID of the team to associate the routing rules with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.rule"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[OnCallTeamRoutingRulesRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]

---

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OnCallTeamRoutingRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OnCallTeamRoutingRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OnCallTeamRoutingRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OnCallTeamRoutingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnCallTeamRoutingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput">rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule"></a>

```python
rule: OnCallTeamRoutingRulesRuleList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[OnCallTeamRoutingRulesRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallTeamRoutingRulesConfig <a name="OnCallTeamRoutingRulesConfig" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  rule: IResolvable | typing.List[OnCallTeamRoutingRulesRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id">id</a></code> | <code>str</code> | ID of the team to associate the routing rules with. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the team to associate the routing rules with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[OnCallTeamRoutingRulesRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}

---

### OnCallTeamRoutingRulesRule <a name="OnCallTeamRoutingRulesRule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRule(
  action: IResolvable | typing.List[OnCallTeamRoutingRulesRuleAction] = None,
  escalation_policy: str = None,
  query: str = None,
  time_restrictions: OnCallTeamRoutingRulesRuleTimeRestrictions = None,
  urgency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action">action</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]</code> | action block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy">escalation_policy</a></code> | <code>str</code> | ID of the policy to be applied when this routing rule matches. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query">query</a></code> | <code>str</code> | Defines the query or condition that triggers this routing rule. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions">time_restrictions</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | time_restrictions block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency">urgency</a></code> | <code>str</code> | Defines the urgency for pages created via this rule. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action"></a>

```python
action: IResolvable | typing.List[OnCallTeamRoutingRulesRuleAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#action OnCallTeamRoutingRules#action}

---

##### `escalation_policy`<sup>Optional</sup> <a name="escalation_policy" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy"></a>

```python
escalation_policy: str
```

- *Type:* str

ID of the policy to be applied when this routing rule matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#escalation_policy OnCallTeamRoutingRules#escalation_policy}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query"></a>

```python
query: str
```

- *Type:* str

Defines the query or condition that triggers this routing rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#query OnCallTeamRoutingRules#query}

---

##### `time_restrictions`<sup>Optional</sup> <a name="time_restrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions"></a>

```python
time_restrictions: OnCallTeamRoutingRulesRuleTimeRestrictions
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

time_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#time_restrictions OnCallTeamRoutingRules#time_restrictions}

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

Defines the urgency for pages created via this rule.

Only valid if `escalation_policy` is set. Valid values are `high`, `low`, `dynamic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#urgency OnCallTeamRoutingRules#urgency}

---

### OnCallTeamRoutingRulesRuleAction <a name="OnCallTeamRoutingRulesRuleAction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction(
  send_slack_message: OnCallTeamRoutingRulesRuleActionSendSlackMessage = None,
  send_teams_message: OnCallTeamRoutingRulesRuleActionSendTeamsMessage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage">send_slack_message</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | send_slack_message block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage">send_teams_message</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | send_teams_message block. |

---

##### `send_slack_message`<sup>Optional</sup> <a name="send_slack_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage"></a>

```python
send_slack_message: OnCallTeamRoutingRulesRuleActionSendSlackMessage
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

send_slack_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#send_slack_message OnCallTeamRoutingRules#send_slack_message}

---

##### `send_teams_message`<sup>Optional</sup> <a name="send_teams_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage"></a>

```python
send_teams_message: OnCallTeamRoutingRulesRuleActionSendTeamsMessage
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

send_teams_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#send_teams_message OnCallTeamRoutingRules#send_teams_message}

---

### OnCallTeamRoutingRulesRuleActionSendSlackMessage <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage(
  channel: str = None,
  workspace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel">channel</a></code> | <code>str</code> | Slack channel ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace">workspace</a></code> | <code>str</code> | Slack workspace ID. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel"></a>

```python
channel: str
```

- *Type:* str

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#workspace OnCallTeamRoutingRules#workspace}

---

### OnCallTeamRoutingRulesRuleActionSendTeamsMessage <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage(
  channel: str = None,
  team: str = None,
  tenant: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel">channel</a></code> | <code>str</code> | Teams channel ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team">team</a></code> | <code>str</code> | Teams team ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant">tenant</a></code> | <code>str</code> | Teams tenant ID. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel"></a>

```python
channel: str
```

- *Type:* str

Teams channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team"></a>

```python
team: str
```

- *Type:* str

Teams team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#team OnCallTeamRoutingRules#team}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Teams tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#tenant OnCallTeamRoutingRules#tenant}

---

### OnCallTeamRoutingRulesRuleTimeRestrictions <a name="OnCallTeamRoutingRulesRuleTimeRestrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions(
  restriction: IResolvable | typing.List[OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction] = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction">restriction</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]</code> | restriction block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone">time_zone</a></code> | <code>str</code> | Specifies the time zone applicable to the restrictions, e.g. `America/New_York`. |

---

##### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction"></a>

```python
restriction: IResolvable | typing.List[OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}

---

### OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction(
  end_day: str = None,
  end_time: str = None,
  start_day: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay">end_day</a></code> | <code>str</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime">end_time</a></code> | <code>str</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay">start_day</a></code> | <code>str</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime">start_time</a></code> | <code>str</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `end_day`<sup>Optional</sup> <a name="end_day" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay"></a>

```python
end_day: str
```

- *Type:* str

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#end_day OnCallTeamRoutingRules#end_day}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#end_time OnCallTeamRoutingRules#end_time}

---

##### `start_day`<sup>Optional</sup> <a name="start_day" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay"></a>

```python
start_day: str
```

- *Type:* str

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#start_day OnCallTeamRoutingRules#start_day}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#start_time OnCallTeamRoutingRules#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallTeamRoutingRulesRuleActionList <a name="OnCallTeamRoutingRulesRuleActionList" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallTeamRoutingRulesRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OnCallTeamRoutingRulesRuleAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]

---


### OnCallTeamRoutingRulesRuleActionOutputReference <a name="OnCallTeamRoutingRulesRuleActionOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage">put_send_slack_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage">put_send_teams_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage">reset_send_slack_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage">reset_send_teams_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_send_slack_message` <a name="put_send_slack_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage"></a>

```python
def put_send_slack_message(
  channel: str = None,
  workspace: str = None
) -> None
```

###### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage.parameter.channel"></a>

- *Type:* str

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

###### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage.parameter.workspace"></a>

- *Type:* str

Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#workspace OnCallTeamRoutingRules#workspace}

---

##### `put_send_teams_message` <a name="put_send_teams_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage"></a>

```python
def put_send_teams_message(
  channel: str = None,
  team: str = None,
  tenant: str = None
) -> None
```

###### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage.parameter.channel"></a>

- *Type:* str

Teams channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

###### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage.parameter.team"></a>

- *Type:* str

Teams team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#team OnCallTeamRoutingRules#team}

---

###### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage.parameter.tenant"></a>

- *Type:* str

Teams tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#tenant OnCallTeamRoutingRules#tenant}

---

##### `reset_send_slack_message` <a name="reset_send_slack_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage"></a>

```python
def reset_send_slack_message() -> None
```

##### `reset_send_teams_message` <a name="reset_send_teams_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage"></a>

```python
def reset_send_teams_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage">send_slack_message</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage">send_teams_message</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput">send_slack_message_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput">send_teams_message_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `send_slack_message`<sup>Required</sup> <a name="send_slack_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage"></a>

```python
send_slack_message: OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a>

---

##### `send_teams_message`<sup>Required</sup> <a name="send_teams_message" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage"></a>

```python
send_teams_message: OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a>

---

##### `send_slack_message_input`<sup>Optional</sup> <a name="send_slack_message_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput"></a>

```python
send_slack_message_input: IResolvable | OnCallTeamRoutingRulesRuleActionSendSlackMessage
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---

##### `send_teams_message_input`<sup>Optional</sup> <a name="send_teams_message_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput"></a>

```python
send_teams_message_input: IResolvable | OnCallTeamRoutingRulesRuleActionSendTeamsMessage
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallTeamRoutingRulesRuleAction
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>

---


### OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace">reset_workspace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_workspace` <a name="reset_workspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace"></a>

```python
def reset_workspace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallTeamRoutingRulesRuleActionSendSlackMessage
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---


### OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam">reset_team</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant">reset_tenant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_team` <a name="reset_team" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam"></a>

```python
def reset_team() -> None
```

##### `reset_tenant` <a name="reset_tenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant"></a>

```python
def reset_tenant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput">team_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team">team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `team_input`<sup>Optional</sup> <a name="team_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput"></a>

```python
team_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team"></a>

```python
team: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallTeamRoutingRulesRuleActionSendTeamsMessage
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---


### OnCallTeamRoutingRulesRuleList <a name="OnCallTeamRoutingRulesRuleList" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallTeamRoutingRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OnCallTeamRoutingRulesRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>]

---


### OnCallTeamRoutingRulesRuleOutputReference <a name="OnCallTeamRoutingRulesRuleOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions">put_time_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy">reset_escalation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions">reset_time_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency">reset_urgency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction"></a>

```python
def put_action(
  value: IResolvable | typing.List[OnCallTeamRoutingRulesRuleAction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]

---

##### `put_time_restrictions` <a name="put_time_restrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions"></a>

```python
def put_time_restrictions(
  restriction: IResolvable | typing.List[OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction] = None,
  time_zone: str = None
) -> None
```

###### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions.parameter.restriction"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions.parameter.timeZone"></a>

- *Type:* str

Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_escalation_policy` <a name="reset_escalation_policy" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy"></a>

```python
def reset_escalation_policy() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_time_restrictions` <a name="reset_time_restrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions"></a>

```python
def reset_time_restrictions() -> None
```

##### `reset_urgency` <a name="reset_urgency" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency"></a>

```python
def reset_urgency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions">time_restrictions</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput">action_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput">escalation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput">time_restrictions_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput">urgency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy">escalation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency">urgency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action"></a>

```python
action: OnCallTeamRoutingRulesRuleActionList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_restrictions`<sup>Required</sup> <a name="time_restrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions"></a>

```python
time_restrictions: OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | typing.List[OnCallTeamRoutingRulesRuleAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>]

---

##### `escalation_policy_input`<sup>Optional</sup> <a name="escalation_policy_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput"></a>

```python
escalation_policy_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `time_restrictions_input`<sup>Optional</sup> <a name="time_restrictions_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput"></a>

```python
time_restrictions_input: IResolvable | OnCallTeamRoutingRulesRuleTimeRestrictions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---

##### `urgency_input`<sup>Optional</sup> <a name="urgency_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput"></a>

```python
urgency_input: str
```

- *Type:* str

---

##### `escalation_policy`<sup>Required</sup> <a name="escalation_policy" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy"></a>

```python
escalation_policy: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallTeamRoutingRulesRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction">put_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction">reset_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_restriction` <a name="put_restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction"></a>

```python
def put_restriction(
  value: IResolvable | typing.List[OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]

---

##### `reset_restriction` <a name="reset_restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction"></a>

```python
def reset_restriction() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction">restriction</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput">restriction_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restriction`<sup>Required</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction"></a>

```python
restriction: OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a>

---

##### `restriction_input`<sup>Optional</sup> <a name="restriction_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput"></a>

```python
restriction_input: IResolvable | typing.List[OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallTeamRoutingRulesRuleTimeRestrictions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>]

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_team_routing_rules

onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay">reset_end_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay">reset_start_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_day` <a name="reset_end_day" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay"></a>

```python
def reset_end_day() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_day` <a name="reset_start_day" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay"></a>

```python
def reset_start_day() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput">end_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput">start_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay">end_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay">start_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_day_input`<sup>Optional</sup> <a name="end_day_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput"></a>

```python
end_day_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_day_input`<sup>Optional</sup> <a name="start_day_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput"></a>

```python
start_day_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_day`<sup>Required</sup> <a name="end_day" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay"></a>

```python
end_day: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_day`<sup>Required</sup> <a name="start_day" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay"></a>

```python
start_day: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>

---



