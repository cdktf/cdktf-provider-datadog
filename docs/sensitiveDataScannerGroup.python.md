# `sensitiveDataScannerGroup` Submodule <a name="`sensitiveDataScannerGroup` Submodule" id="@cdktf/provider-datadog.sensitiveDataScannerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerGroup <a name="SensitiveDataScannerGroup" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group datadog_sensitive_data_scanner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: SensitiveDataScannerGroupFilter,
  is_enabled: bool | IResolvable,
  name: str,
  product_list: typing.List[str],
  description: str = None,
  id: str = None,
  samplings: IResolvable | typing.List[SensitiveDataScannerGroupSamplings] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not the scanning group is enabled. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.productList">product_list</a></code> | <code>typing.List[str]</code> | List of products the scanning group applies. Valid values are `logs`, `rum`, `events`, `apm`. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.samplings">samplings</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]</code> | samplings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#filter SensitiveDataScannerGroup#filter}

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.isEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not the scanning group is enabled.

If the group doesn't contain any rule or if all the rules in it are disabled, the group is force-disabled by our backend

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#is_enabled SensitiveDataScannerGroup#is_enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#name SensitiveDataScannerGroup#name}

---

##### `product_list`<sup>Required</sup> <a name="product_list" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.productList"></a>

- *Type:* typing.List[str]

List of products the scanning group applies. Valid values are `logs`, `rum`, `events`, `apm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#product_list SensitiveDataScannerGroup#product_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.description"></a>

- *Type:* str

Description of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#description SensitiveDataScannerGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samplings`<sup>Optional</sup> <a name="samplings" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.Initializer.parameter.samplings"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]

samplings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#samplings SensitiveDataScannerGroup#samplings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putSamplings">put_samplings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetSamplings">reset_samplings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putFilter"></a>

```python
def put_filter(
  query: str
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putFilter.parameter.query"></a>

- *Type:* str

Query to filter the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#query SensitiveDataScannerGroup#query}

---

##### `put_samplings` <a name="put_samplings" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putSamplings"></a>

```python
def put_samplings(
  value: IResolvable | typing.List[SensitiveDataScannerGroupSamplings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.putSamplings.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_samplings` <a name="reset_samplings" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.resetSamplings"></a>

```python
def reset_samplings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SensitiveDataScannerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SensitiveDataScannerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SensitiveDataScannerGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SensitiveDataScannerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SensitiveDataScannerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference">SensitiveDataScannerGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.samplings">samplings</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList">SensitiveDataScannerGroupSamplingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productListInput">product_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.samplingsInput">samplings_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productList">product_list</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filter"></a>

```python
filter: SensitiveDataScannerGroupFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference">SensitiveDataScannerGroupFilterOutputReference</a>

---

##### `samplings`<sup>Required</sup> <a name="samplings" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.samplings"></a>

```python
samplings: SensitiveDataScannerGroupSamplingsList
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList">SensitiveDataScannerGroupSamplingsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.filterInput"></a>

```python
filter_input: SensitiveDataScannerGroupFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_list_input`<sup>Optional</sup> <a name="product_list_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productListInput"></a>

```python
product_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `samplings_input`<sup>Optional</sup> <a name="samplings_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.samplingsInput"></a>

```python
samplings_input: IResolvable | typing.List[SensitiveDataScannerGroupSamplings]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product_list`<sup>Required</sup> <a name="product_list" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.productList"></a>

```python
product_list: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerGroupConfig <a name="SensitiveDataScannerGroupConfig" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: SensitiveDataScannerGroupFilter,
  is_enabled: bool | IResolvable,
  name: str,
  product_list: typing.List[str],
  description: str = None,
  id: str = None,
  samplings: IResolvable | typing.List[SensitiveDataScannerGroupSamplings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not the scanning group is enabled. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.productList">product_list</a></code> | <code>typing.List[str]</code> | List of products the scanning group applies. Valid values are `logs`, `rum`, `events`, `apm`. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.description">description</a></code> | <code>str</code> | Description of the Datadog scanning group. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.samplings">samplings</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]</code> | samplings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.filter"></a>

```python
filter: SensitiveDataScannerGroupFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#filter SensitiveDataScannerGroup#filter}

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not the scanning group is enabled.

If the group doesn't contain any rule or if all the rules in it are disabled, the group is force-disabled by our backend

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#is_enabled SensitiveDataScannerGroup#is_enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#name SensitiveDataScannerGroup#name}

---

##### `product_list`<sup>Required</sup> <a name="product_list" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.productList"></a>

```python
product_list: typing.List[str]
```

- *Type:* typing.List[str]

List of products the scanning group applies. Valid values are `logs`, `rum`, `events`, `apm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#product_list SensitiveDataScannerGroup#product_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Datadog scanning group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#description SensitiveDataScannerGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#id SensitiveDataScannerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samplings`<sup>Optional</sup> <a name="samplings" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupConfig.property.samplings"></a>

```python
samplings: IResolvable | typing.List[SensitiveDataScannerGroupSamplings]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]

samplings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#samplings SensitiveDataScannerGroup#samplings}

---

### SensitiveDataScannerGroupFilter <a name="SensitiveDataScannerGroupFilter" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter.property.query">query</a></code> | <code>str</code> | Query to filter the events. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter.property.query"></a>

```python
query: str
```

- *Type:* str

Query to filter the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#query SensitiveDataScannerGroup#query}

---

### SensitiveDataScannerGroupSamplings <a name="SensitiveDataScannerGroupSamplings" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings(
  product: str,
  rate: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings.property.product">product</a></code> | <code>str</code> | Product that the sampling rate applies to. Valid values are `logs`, `rum`, `events`, `apm`. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | Percentage rate at which data for the product type is scanned. |

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings.property.product"></a>

```python
product: str
```

- *Type:* str

Product that the sampling rate applies to. Valid values are `logs`, `rum`, `events`, `apm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#product SensitiveDataScannerGroup#product}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage rate at which data for the product type is scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/sensitive_data_scanner_group#rate SensitiveDataScannerGroup#rate}

---

## Classes <a name="Classes" id="Classes"></a>

### SensitiveDataScannerGroupFilterOutputReference <a name="SensitiveDataScannerGroupFilterOutputReference" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: SensitiveDataScannerGroupFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupFilter">SensitiveDataScannerGroupFilter</a>

---


### SensitiveDataScannerGroupSamplingsList <a name="SensitiveDataScannerGroupSamplingsList" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SensitiveDataScannerGroupSamplingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SensitiveDataScannerGroupSamplings]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>]

---


### SensitiveDataScannerGroupSamplingsOutputReference <a name="SensitiveDataScannerGroupSamplingsOutputReference" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import sensitive_data_scanner_group

sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.rateInput">rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.rateInput"></a>

```python
rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SensitiveDataScannerGroupSamplings
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroup.SensitiveDataScannerGroupSamplings">SensitiveDataScannerGroupSamplings</a>

---



