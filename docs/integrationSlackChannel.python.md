# `integrationSlackChannel` Submodule <a name="`integrationSlackChannel` Submodule" id="@cdktf/provider-datadog.integrationSlackChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSlackChannel <a name="IntegrationSlackChannel" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel datadog_integration_slack_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  channel_name: str,
  display: IntegrationSlackChannelDisplay,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.accountName"></a>

- *Type:* str

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.channelName"></a>

- *Type:* str

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.display"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay">put_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_display` <a name="put_display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay"></a>

```python
def put_display(
  message: typing.Union[bool, IResolvable] = None,
  notified: typing.Union[bool, IResolvable] = None,
  snapshot: typing.Union[bool, IResolvable] = None,
  tags: typing.Union[bool, IResolvable] = None
) -> None
```

###### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.message"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the main body of the alert event. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}

---

###### `notified`<sup>Optional</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.notified"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the list of.

---

###### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.snapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the alert event's snapshot image. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.tags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the scopes on which the monitor alerted. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationSlackChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationSlackChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationSlackChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput">display_input</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display"></a>

```python
display: IntegrationSlackChannelDisplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput"></a>

```python
display_input: IntegrationSlackChannelDisplay
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSlackChannelConfig <a name="IntegrationSlackChannelConfig" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  channel_name: str,
  display: IntegrationSlackChannelDisplay,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName">account_name</a></code> | <code>str</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display">display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display"></a>

```python
display: IntegrationSlackChannelDisplay
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IntegrationSlackChannelDisplay <a name="IntegrationSlackChannelDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannelDisplay(
  message: typing.Union[bool, IResolvable] = None,
  notified: typing.Union[bool, IResolvable] = None,
  snapshot: typing.Union[bool, IResolvable] = None,
  tags: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message">message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show the main body of the alert event. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified">notified</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show the list of. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot">snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show the alert event's snapshot image. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags">tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show the scopes on which the monitor alerted. Defaults to `true`. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message"></a>

```python
message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the main body of the alert event. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}

---

##### `notified`<sup>Optional</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified"></a>

```python
notified: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the list of.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot"></a>

```python
snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the alert event's snapshot image. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags"></a>

```python
tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show the scopes on which the monitor alerted. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.1/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSlackChannelDisplayOutputReference <a name="IntegrationSlackChannelDisplayOutputReference" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_slack_channel

integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified">reset_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_notified` <a name="reset_notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified"></a>

```python
def reset_notified() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput">message_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput">notified_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput">snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message">message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified">notified</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot">snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags">tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput"></a>

```python
message_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notified_input`<sup>Optional</sup> <a name="notified_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput"></a>

```python
notified_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput"></a>

```python
snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message"></a>

```python
message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notified`<sup>Required</sup> <a name="notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified"></a>

```python
notified: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot"></a>

```python
snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags"></a>

```python
tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationSlackChannelDisplay
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---



