# `incidentNotificationTemplate` Submodule <a name="`incidentNotificationTemplate` Submodule" id="@cdktf/provider-datadog.incidentNotificationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentNotificationTemplate <a name="IncidentNotificationTemplate" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template datadog_incident_notification_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_template

incidentNotificationTemplate.IncidentNotificationTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  content: str,
  incident_type: str,
  name: str,
  subject: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.category">category</a></code> | <code>str</code> | The category of the notification template. Valid values are `alert`, `incident`, `recovery`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.content">content</a></code> | <code>str</code> | The content body of the notification template. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this notification template is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the notification template. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.subject">subject</a></code> | <code>str</code> | The subject line of the notification template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.category"></a>

- *Type:* str

The category of the notification template. Valid values are `alert`, `incident`, `recovery`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#category IncidentNotificationTemplate#category}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.content"></a>

- *Type:* str

The content body of the notification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#content IncidentNotificationTemplate#content}

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.incidentType"></a>

- *Type:* str

The ID of the incident type this notification template is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#incident_type IncidentNotificationTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the notification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#name IncidentNotificationTemplate#name}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.Initializer.parameter.subject"></a>

- *Type:* str

The subject line of the notification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#subject IncidentNotificationTemplate#subject}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IncidentNotificationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_template

incidentNotificationTemplate.IncidentNotificationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_template

incidentNotificationTemplate.IncidentNotificationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_template

incidentNotificationTemplate.IncidentNotificationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_template

incidentNotificationTemplate.IncidentNotificationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IncidentNotificationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentNotificationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentNotificationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentNotificationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.subject">subject</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentNotificationTemplateConfig <a name="IncidentNotificationTemplateConfig" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import incident_notification_template

incidentNotificationTemplate.IncidentNotificationTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  content: str,
  incident_type: str,
  name: str,
  subject: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.category">category</a></code> | <code>str</code> | The category of the notification template. Valid values are `alert`, `incident`, `recovery`. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.content">content</a></code> | <code>str</code> | The content body of the notification template. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this notification template is associated with. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the notification template. |
| <code><a href="#@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.subject">subject</a></code> | <code>str</code> | The subject line of the notification template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.category"></a>

```python
category: str
```

- *Type:* str

The category of the notification template. Valid values are `alert`, `incident`, `recovery`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#category IncidentNotificationTemplate#category}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The content body of the notification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#content IncidentNotificationTemplate#content}

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

The ID of the incident type this notification template is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#incident_type IncidentNotificationTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the notification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#name IncidentNotificationTemplate#name}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-datadog.incidentNotificationTemplate.IncidentNotificationTemplateConfig.property.subject"></a>

```python
subject: str
```

- *Type:* str

The subject line of the notification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/incident_notification_template#subject IncidentNotificationTemplate#subject}

---



