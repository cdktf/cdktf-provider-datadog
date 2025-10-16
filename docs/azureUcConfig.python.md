# `azureUcConfig` Submodule <a name="`azureUcConfig` Submodule" id="@cdktf/provider-datadog.azureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureUcConfig <a name="AzureUcConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfig(
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
  actual_bill_config: AzureUcConfigActualBillConfig,
  amortized_bill_config: AzureUcConfigAmortizedBillConfig,
  client_id: str,
  scope: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The tenant ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.actualBillConfig">actual_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | actual_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.amortizedBillConfig">amortized_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | amortized_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The client ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope of your observed subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.accountId"></a>

- *Type:* str

The tenant ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}

---

##### `actual_bill_config`<sup>Required</sup> <a name="actual_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.actualBillConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

actual_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}

---

##### `amortized_bill_config`<sup>Required</sup> <a name="amortized_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.amortizedBillConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

amortized_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.clientId"></a>

- *Type:* str

The client ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* str

The scope of your observed subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig">put_actual_bill_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig">put_amortized_bill_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actual_bill_config` <a name="put_actual_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig"></a>

```python
def put_actual_bill_config(
  export_name: str,
  export_path: str,
  storage_account: str,
  storage_container: str
) -> None
```

###### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.exportName"></a>

- *Type:* str

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

###### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.exportPath"></a>

- *Type:* str

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

###### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.storageAccount"></a>

- *Type:* str

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

###### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.storageContainer"></a>

- *Type:* str

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

##### `put_amortized_bill_config` <a name="put_amortized_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig"></a>

```python
def put_amortized_bill_config(
  export_name: str,
  export_path: str,
  storage_account: str,
  storage_container: str
) -> None
```

###### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.exportName"></a>

- *Type:* str

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

###### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.exportPath"></a>

- *Type:* str

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

###### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.storageAccount"></a>

- *Type:* str

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

###### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.storageContainer"></a>

- *Type:* str

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzureUcConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig">actual_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig">amortized_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages">error_messages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt">status_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput">actual_bill_config_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput">amortized_bill_config_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `actual_bill_config`<sup>Required</sup> <a name="actual_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig"></a>

```python
actual_bill_config: AzureUcConfigActualBillConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortized_bill_config`<sup>Required</sup> <a name="amortized_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig"></a>

```python
amortized_bill_config: AzureUcConfigAmortizedBillConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages"></a>

```python
error_messages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_updated_at`<sup>Required</sup> <a name="status_updated_at" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt"></a>

```python
status_updated_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `actual_bill_config_input`<sup>Optional</sup> <a name="actual_bill_config_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput"></a>

```python
actual_bill_config_input: IResolvable | AzureUcConfigActualBillConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---

##### `amortized_bill_config_input`<sup>Optional</sup> <a name="amortized_bill_config_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput"></a>

```python
amortized_bill_config_input: IResolvable | AzureUcConfigAmortizedBillConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureUcConfigActualBillConfig <a name="AzureUcConfigActualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfigActualBillConfig(
  export_name: str,
  export_path: str,
  storage_account: str,
  storage_container: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName">export_name</a></code> | <code>str</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath">export_path</a></code> | <code>str</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount">storage_account</a></code> | <code>str</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer">storage_container</a></code> | <code>str</code> | The name of the storage container where the Azure Export is saved. |

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer"></a>

```python
storage_container: str
```

- *Type:* str

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigAmortizedBillConfig <a name="AzureUcConfigAmortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfigAmortizedBillConfig(
  export_name: str,
  export_path: str,
  storage_account: str,
  storage_container: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName">export_name</a></code> | <code>str</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath">export_path</a></code> | <code>str</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount">storage_account</a></code> | <code>str</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer">storage_container</a></code> | <code>str</code> | The name of the storage container where the Azure Export is saved. |

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer"></a>

```python
storage_container: str
```

- *Type:* str

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigConfig <a name="AzureUcConfigConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  actual_bill_config: AzureUcConfigActualBillConfig,
  amortized_bill_config: AzureUcConfigAmortizedBillConfig,
  client_id: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId">account_id</a></code> | <code>str</code> | The tenant ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig">actual_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | actual_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig">amortized_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | amortized_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope">scope</a></code> | <code>str</code> | The scope of your observed subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The tenant ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}

---

##### `actual_bill_config`<sup>Required</sup> <a name="actual_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig"></a>

```python
actual_bill_config: AzureUcConfigActualBillConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

actual_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}

---

##### `amortized_bill_config`<sup>Required</sup> <a name="amortized_bill_config" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig"></a>

```python
amortized_bill_config: AzureUcConfigAmortizedBillConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

amortized_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope of your observed subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureUcConfigActualBillConfigOutputReference <a name="AzureUcConfigActualBillConfigOutputReference" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfigActualBillConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput">export_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput">export_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput">storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput">storage_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName">export_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath">export_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer">storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_name_input`<sup>Optional</sup> <a name="export_name_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput"></a>

```python
export_name_input: str
```

- *Type:* str

---

##### `export_path_input`<sup>Optional</sup> <a name="export_path_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput"></a>

```python
export_path_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput"></a>

```python
storage_account_input: str
```

- *Type:* str

---

##### `storage_container_input`<sup>Optional</sup> <a name="storage_container_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput"></a>

```python
storage_container_input: str
```

- *Type:* str

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```python
storage_container: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AzureUcConfigActualBillConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---


### AzureUcConfigAmortizedBillConfigOutputReference <a name="AzureUcConfigAmortizedBillConfigOutputReference" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import azure_uc_config

azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput">export_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput">export_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput">storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput">storage_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName">export_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">export_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_name_input`<sup>Optional</sup> <a name="export_name_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput"></a>

```python
export_name_input: str
```

- *Type:* str

---

##### `export_path_input`<sup>Optional</sup> <a name="export_path_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput"></a>

```python
export_path_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput"></a>

```python
storage_account_input: str
```

- *Type:* str

---

##### `storage_container_input`<sup>Optional</sup> <a name="storage_container_input" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput"></a>

```python
storage_container_input: str
```

- *Type:* str

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```python
storage_container: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AzureUcConfigAmortizedBillConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---



