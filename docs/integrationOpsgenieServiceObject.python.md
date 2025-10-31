# `integrationOpsgenieServiceObject` Submodule <a name="`integrationOpsgenieServiceObject` Submodule" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOpsgenieServiceObject <a name="IntegrationOpsgenieServiceObject" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object datadog_integration_opsgenie_service_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_opsgenie_service_object

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  opsgenie_api_key: str,
  region: str,
  custom_url: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.opsgenieApiKey">opsgenie_api_key</a></code> | <code>str</code> | The Opsgenie API key for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.region">region</a></code> | <code>str</code> | The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.customUrl">custom_url</a></code> | <code>str</code> | The custom url for a custom region. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.name"></a>

- *Type:* str

The name for the Opsgenie service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#name IntegrationOpsgenieServiceObject#name}

---

##### `opsgenie_api_key`<sup>Required</sup> <a name="opsgenie_api_key" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.opsgenieApiKey"></a>

- *Type:* str

The Opsgenie API key for the Opsgenie service.

Note: Since the Datadog API never returns Opsgenie API keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#opsgenie_api_key IntegrationOpsgenieServiceObject#opsgenie_api_key}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.region"></a>

- *Type:* str

The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#region IntegrationOpsgenieServiceObject#region}

---

##### `custom_url`<sup>Optional</sup> <a name="custom_url" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.customUrl"></a>

- *Type:* str

The custom url for a custom region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#custom_url IntegrationOpsgenieServiceObject#custom_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl">reset_custom_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_custom_url` <a name="reset_custom_url" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl"></a>

```python
def reset_custom_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_opsgenie_service_object

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_opsgenie_service_object

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_opsgenie_service_object

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_opsgenie_service_object

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationOpsgenieServiceObject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationOpsgenieServiceObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationOpsgenieServiceObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput">custom_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput">opsgenie_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl">custom_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey">opsgenie_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `custom_url_input`<sup>Optional</sup> <a name="custom_url_input" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput"></a>

```python
custom_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opsgenie_api_key_input`<sup>Optional</sup> <a name="opsgenie_api_key_input" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput"></a>

```python
opsgenie_api_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `custom_url`<sup>Required</sup> <a name="custom_url" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl"></a>

```python
custom_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opsgenie_api_key`<sup>Required</sup> <a name="opsgenie_api_key" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey"></a>

```python
opsgenie_api_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOpsgenieServiceObjectConfig <a name="IntegrationOpsgenieServiceObjectConfig" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_opsgenie_service_object

integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  opsgenie_api_key: str,
  region: str,
  custom_url: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name">name</a></code> | <code>str</code> | The name for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey">opsgenie_api_key</a></code> | <code>str</code> | The Opsgenie API key for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region">region</a></code> | <code>str</code> | The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl">custom_url</a></code> | <code>str</code> | The custom url for a custom region. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the Opsgenie service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#name IntegrationOpsgenieServiceObject#name}

---

##### `opsgenie_api_key`<sup>Required</sup> <a name="opsgenie_api_key" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey"></a>

```python
opsgenie_api_key: str
```

- *Type:* str

The Opsgenie API key for the Opsgenie service.

Note: Since the Datadog API never returns Opsgenie API keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#opsgenie_api_key IntegrationOpsgenieServiceObject#opsgenie_api_key}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#region IntegrationOpsgenieServiceObject#region}

---

##### `custom_url`<sup>Optional</sup> <a name="custom_url" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl"></a>

```python
custom_url: str
```

- *Type:* str

The custom url for a custom region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#custom_url IntegrationOpsgenieServiceObject#custom_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



