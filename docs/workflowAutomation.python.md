# `workflowAutomation` Submodule <a name="`workflowAutomation` Submodule" id="@cdktf/provider-datadog.workflowAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowAutomation <a name="WorkflowAutomation" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation datadog_workflow_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import workflow_automation

workflowAutomation.WorkflowAutomation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  published: typing.Union[bool, IResolvable],
  spec_json: str,
  tags: typing.List[str],
  webhook_secret: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the workflow. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the workflow. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set the workflow to published or unpublished. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.specJson">spec_json</a></code> | <code>str</code> | The spec defines what the workflow does. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags of the workflow. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.webhookSecret">webhook_secret</a></code> | <code>str</code> | If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.description"></a>

- *Type:* str

Description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#description WorkflowAutomation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.name"></a>

- *Type:* str

Name of the workflow. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#name WorkflowAutomation#name}

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.published"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set the workflow to published or unpublished.

Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#published WorkflowAutomation#published}

---

##### `spec_json`<sup>Required</sup> <a name="spec_json" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.specJson"></a>

- *Type:* str

The spec defines what the workflow does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}

---

##### `webhook_secret`<sup>Optional</sup> <a name="webhook_secret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.webhookSecret"></a>

- *Type:* str

If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here.

String length must be at least 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetWebhookSecret">reset_webhook_secret</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_webhook_secret` <a name="reset_webhook_secret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.resetWebhookSecret"></a>

```python
def reset_webhook_secret() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkflowAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import workflow_automation

workflowAutomation.WorkflowAutomation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import workflow_automation

workflowAutomation.WorkflowAutomation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import workflow_automation

workflowAutomation.WorkflowAutomation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import workflow_automation

workflowAutomation.WorkflowAutomation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkflowAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkflowAutomation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkflowAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.publishedInput">published_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJsonInput">spec_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecretInput">webhook_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJson">spec_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecret">webhook_secret</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `published_input`<sup>Optional</sup> <a name="published_input" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.publishedInput"></a>

```python
published_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spec_json_input`<sup>Optional</sup> <a name="spec_json_input" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJsonInput"></a>

```python
spec_json_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `webhook_secret_input`<sup>Optional</sup> <a name="webhook_secret_input" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecretInput"></a>

```python
webhook_secret_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.published"></a>

```python
published: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `spec_json`<sup>Required</sup> <a name="spec_json" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJson"></a>

```python
spec_json: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `webhook_secret`<sup>Required</sup> <a name="webhook_secret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecret"></a>

```python
webhook_secret: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowAutomationConfig <a name="WorkflowAutomationConfig" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import workflow_automation

workflowAutomation.WorkflowAutomationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  published: typing.Union[bool, IResolvable],
  spec_json: str,
  tags: typing.List[str],
  webhook_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.description">description</a></code> | <code>str</code> | Description of the workflow. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.name">name</a></code> | <code>str</code> | Name of the workflow. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set the workflow to published or unpublished. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.specJson">spec_json</a></code> | <code>str</code> | The spec defines what the workflow does. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags of the workflow. |
| <code><a href="#@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.webhookSecret">webhook_secret</a></code> | <code>str</code> | If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#description WorkflowAutomation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the workflow. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#name WorkflowAutomation#name}

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.published"></a>

```python
published: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set the workflow to published or unpublished.

Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#published WorkflowAutomation#published}

---

##### `spec_json`<sup>Required</sup> <a name="spec_json" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.specJson"></a>

```python
spec_json: str
```

- *Type:* str

The spec defines what the workflow does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}

---

##### `webhook_secret`<sup>Optional</sup> <a name="webhook_secret" id="@cdktf/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.webhookSecret"></a>

```python
webhook_secret: str
```

- *Type:* str

If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here.

String length must be at least 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}

---



