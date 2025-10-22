# `integrationAwsEventBridge` Submodule <a name="`integrationAwsEventBridge` Submodule" id="@cdktf/provider-datadog.integrationAwsEventBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsEventBridge <a name="IntegrationAwsEventBridge" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge datadog_integration_aws_event_bridge}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_event_bridge

integrationAwsEventBridge.IntegrationAwsEventBridge(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  event_generator_name: str,
  region: str,
  create_event_bus: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.eventGeneratorName">event_generator_name</a></code> | <code>str</code> | The given part of the event source name, which is then combined with an assigned suffix to form the full name. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.region">region</a></code> | <code>str</code> | The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.createEventBus">create_event_bus</a></code> | <code>bool \| cdktf.IResolvable</code> | True if Datadog should create the event bus in addition to the event source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.accountId"></a>

- *Type:* str

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#account_id IntegrationAwsEventBridge#account_id}

---

##### `event_generator_name`<sup>Required</sup> <a name="event_generator_name" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.eventGeneratorName"></a>

- *Type:* str

The given part of the event source name, which is then combined with an assigned suffix to form the full name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#event_generator_name IntegrationAwsEventBridge#event_generator_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.region"></a>

- *Type:* str

The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#region IntegrationAwsEventBridge#region}

---

##### `create_event_bus`<sup>Optional</sup> <a name="create_event_bus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.createEventBus"></a>

- *Type:* bool | cdktf.IResolvable

True if Datadog should create the event bus in addition to the event source.

Requires the `events:CreateEventBus` permission. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#create_event_bus IntegrationAwsEventBridge#create_event_bus}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetCreateEventBus">reset_create_event_bus</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_create_event_bus` <a name="reset_create_event_bus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetCreateEventBus"></a>

```python
def reset_create_event_bus() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationAwsEventBridge resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_event_bridge

integrationAwsEventBridge.IntegrationAwsEventBridge.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_event_bridge

integrationAwsEventBridge.IntegrationAwsEventBridge.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_event_bridge

integrationAwsEventBridge.IntegrationAwsEventBridge.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_event_bridge

integrationAwsEventBridge.IntegrationAwsEventBridge.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationAwsEventBridge resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationAwsEventBridge to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationAwsEventBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsEventBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBusInput">create_event_bus_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorNameInput">event_generator_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBus">create_event_bus</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorName">event_generator_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `create_event_bus_input`<sup>Optional</sup> <a name="create_event_bus_input" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBusInput"></a>

```python
create_event_bus_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_generator_name_input`<sup>Optional</sup> <a name="event_generator_name_input" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorNameInput"></a>

```python
event_generator_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `create_event_bus`<sup>Required</sup> <a name="create_event_bus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBus"></a>

```python
create_event_bus: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_generator_name`<sup>Required</sup> <a name="event_generator_name" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorName"></a>

```python
event_generator_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsEventBridgeConfig <a name="IntegrationAwsEventBridgeConfig" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_event_bridge

integrationAwsEventBridge.IntegrationAwsEventBridgeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  event_generator_name: str,
  region: str,
  create_event_bus: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.accountId">account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.eventGeneratorName">event_generator_name</a></code> | <code>str</code> | The given part of the event source name, which is then combined with an assigned suffix to form the full name. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.region">region</a></code> | <code>str</code> | The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). |
| <code><a href="#@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.createEventBus">create_event_bus</a></code> | <code>bool \| cdktf.IResolvable</code> | True if Datadog should create the event bus in addition to the event source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#account_id IntegrationAwsEventBridge#account_id}

---

##### `event_generator_name`<sup>Required</sup> <a name="event_generator_name" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.eventGeneratorName"></a>

```python
event_generator_name: str
```

- *Type:* str

The given part of the event source name, which is then combined with an assigned suffix to form the full name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#event_generator_name IntegrationAwsEventBridge#event_generator_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#region IntegrationAwsEventBridge#region}

---

##### `create_event_bus`<sup>Optional</sup> <a name="create_event_bus" id="@cdktf/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.createEventBus"></a>

```python
create_event_bus: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

True if Datadog should create the event bus in addition to the event source.

Requires the `events:CreateEventBus` permission. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.77.0/docs/resources/integration_aws_event_bridge#create_event_bus IntegrationAwsEventBridge#create_event_bus}

---



