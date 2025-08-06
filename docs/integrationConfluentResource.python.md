# `integrationConfluentResource` Submodule <a name="`integrationConfluentResource` Submodule" id="@cdktf/provider-datadog.integrationConfluentResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConfluentResource <a name="IntegrationConfluentResource" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource datadog_integration_confluent_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_confluent_resource

integrationConfluentResource.IntegrationConfluentResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  resource_id: str,
  enable_custom_metrics: typing.Union[bool, IResolvable] = None,
  resource_type: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Confluent Account ID. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The ID associated with a Confluent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.enableCustomMetrics">enable_custom_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the `custom.consumer_lag_offset` metric, which contains extra metric tags. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.accountId"></a>

- *Type:* str

Confluent Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#account_id IntegrationConfluentResource#account_id}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.resourceId"></a>

- *Type:* str

The ID associated with a Confluent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#resource_id IntegrationConfluentResource#resource_id}

---

##### `enable_custom_metrics`<sup>Optional</sup> <a name="enable_custom_metrics" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.enableCustomMetrics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the `custom.consumer_lag_offset` metric, which contains extra metric tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#enable_custom_metrics IntegrationConfluentResource#enable_custom_metrics}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.resourceType"></a>

- *Type:* str

The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#resource_type IntegrationConfluentResource#resource_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#tags IntegrationConfluentResource#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetEnableCustomMetrics">reset_enable_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enable_custom_metrics` <a name="reset_enable_custom_metrics" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetEnableCustomMetrics"></a>

```python
def reset_enable_custom_metrics() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationConfluentResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_confluent_resource

integrationConfluentResource.IntegrationConfluentResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_confluent_resource

integrationConfluentResource.IntegrationConfluentResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_confluent_resource

integrationConfluentResource.IntegrationConfluentResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_confluent_resource

integrationConfluentResource.IntegrationConfluentResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationConfluentResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationConfluentResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationConfluentResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConfluentResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.enableCustomMetricsInput">enable_custom_metrics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.enableCustomMetrics">enable_custom_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `enable_custom_metrics_input`<sup>Optional</sup> <a name="enable_custom_metrics_input" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.enableCustomMetricsInput"></a>

```python
enable_custom_metrics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enable_custom_metrics`<sup>Required</sup> <a name="enable_custom_metrics" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.enableCustomMetrics"></a>

```python
enable_custom_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConfluentResourceConfig <a name="IntegrationConfluentResourceConfig" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_confluent_resource

integrationConfluentResource.IntegrationConfluentResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  resource_id: str,
  enable_custom_metrics: typing.Union[bool, IResolvable] = None,
  resource_type: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.accountId">account_id</a></code> | <code>str</code> | Confluent Account ID. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The ID associated with a Confluent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.enableCustomMetrics">enable_custom_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable the `custom.consumer_lag_offset` metric, which contains extra metric tags. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`. |
| <code><a href="#@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Confluent Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#account_id IntegrationConfluentResource#account_id}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID associated with a Confluent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#resource_id IntegrationConfluentResource#resource_id}

---

##### `enable_custom_metrics`<sup>Optional</sup> <a name="enable_custom_metrics" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.enableCustomMetrics"></a>

```python
enable_custom_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable the `custom.consumer_lag_offset` metric, which contains extra metric tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#enable_custom_metrics IntegrationConfluentResource#enable_custom_metrics}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#resource_type IntegrationConfluentResource#resource_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationConfluentResource.IntegrationConfluentResourceConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/integration_confluent_resource#tags IntegrationConfluentResource#tags}

---



