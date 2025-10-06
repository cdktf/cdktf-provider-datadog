# `awsCurConfig` Submodule <a name="`awsCurConfig` Submodule" id="@cdktf/provider-datadog.awsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCurConfig <a name="AwsCurConfig" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfig(
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
  bucket_name: str,
  report_name: str,
  report_prefix: str,
  account_filters: AwsCurConfigAccountFilters = None,
  bucket_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The S3 bucket name where your AWS Cost and Usage Report files are stored. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.reportName">report_name</a></code> | <code>str</code> | The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.reportPrefix">report_prefix</a></code> | <code>str</code> | The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/'). |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.accountFilters">account_filters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | account_filters block. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.bucketRegion">bucket_region</a></code> | <code>str</code> | The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.accountId"></a>

- *Type:* str

The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#account_id AwsCurConfig#account_id}

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.bucketName"></a>

- *Type:* str

The S3 bucket name where your AWS Cost and Usage Report files are stored.

This bucket must have appropriate IAM permissions for Datadog access and should be in the same AWS account as the CUR report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#bucket_name AwsCurConfig#bucket_name}

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.reportName"></a>

- *Type:* str

The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences.

This must match the report name exactly as it appears in your AWS billing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#report_name AwsCurConfig#report_name}

---

##### `report_prefix`<sup>Required</sup> <a name="report_prefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.reportPrefix"></a>

- *Type:* str

The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#report_prefix AwsCurConfig#report_prefix}

---

##### `account_filters`<sup>Optional</sup> <a name="account_filters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.accountFilters"></a>

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

account_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#account_filters AwsCurConfig#account_filters}

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.bucketRegion"></a>

- *Type:* str

The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#bucket_region AwsCurConfig#bucket_region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters">put_account_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters">reset_account_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion">reset_bucket_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_account_filters` <a name="put_account_filters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters"></a>

```python
def put_account_filters(
  excluded_accounts: typing.List[str] = None,
  included_accounts: typing.List[str] = None,
  include_new_accounts: bool | IResolvable = None
) -> None
```

###### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters.parameter.excludedAccounts"></a>

- *Type:* typing.List[str]

List of AWS account IDs to exclude from cost analysis.

Only used when `include_new_accounts` is `true`. Cannot be used together with `included_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#excluded_accounts AwsCurConfig#excluded_accounts}

---

###### `included_accounts`<sup>Optional</sup> <a name="included_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters.parameter.includedAccounts"></a>

- *Type:* typing.List[str]

List of AWS account IDs to include in cost analysis.

Only used when `include_new_accounts` is `false`. Cannot be used together with `excluded_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#included_accounts AwsCurConfig#included_accounts}

---

###### `include_new_accounts`<sup>Optional</sup> <a name="include_new_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters.parameter.includeNewAccounts"></a>

- *Type:* bool | cdktf.IResolvable

Whether to automatically include new member accounts in your cost analysis.

When `true`, use `excluded_accounts` to specify accounts to exclude. When `false`, use `included_accounts` to specify only the accounts to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#include_new_accounts AwsCurConfig#include_new_accounts}

---

##### `reset_account_filters` <a name="reset_account_filters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters"></a>

```python
def reset_account_filters() -> None
```

##### `reset_bucket_region` <a name="reset_bucket_region" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion"></a>

```python
def reset_bucket_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsCurConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters">account_filters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput">account_filters_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput">bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput">report_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput">report_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName">report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix">report_prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_filters`<sup>Required</sup> <a name="account_filters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters"></a>

```python
account_filters: AwsCurConfigAccountFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_filters_input`<sup>Optional</sup> <a name="account_filters_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput"></a>

```python
account_filters_input: IResolvable | AwsCurConfigAccountFilters
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_region_input`<sup>Optional</sup> <a name="bucket_region_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput"></a>

```python
bucket_region_input: str
```

- *Type:* str

---

##### `report_name_input`<sup>Optional</sup> <a name="report_name_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput"></a>

```python
report_name_input: str
```

- *Type:* str

---

##### `report_prefix_input`<sup>Optional</sup> <a name="report_prefix_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput"></a>

```python
report_prefix_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

---

##### `report_prefix`<sup>Required</sup> <a name="report_prefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix"></a>

```python
report_prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsCurConfigAccountFilters <a name="AwsCurConfigAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfigAccountFilters(
  excluded_accounts: typing.List[str] = None,
  included_accounts: typing.List[str] = None,
  include_new_accounts: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | List of AWS account IDs to exclude from cost analysis. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts">included_accounts</a></code> | <code>typing.List[str]</code> | List of AWS account IDs to include in cost analysis. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts">include_new_accounts</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to automatically include new member accounts in your cost analysis. |

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

List of AWS account IDs to exclude from cost analysis.

Only used when `include_new_accounts` is `true`. Cannot be used together with `included_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#excluded_accounts AwsCurConfig#excluded_accounts}

---

##### `included_accounts`<sup>Optional</sup> <a name="included_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts"></a>

```python
included_accounts: typing.List[str]
```

- *Type:* typing.List[str]

List of AWS account IDs to include in cost analysis.

Only used when `include_new_accounts` is `false`. Cannot be used together with `excluded_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#included_accounts AwsCurConfig#included_accounts}

---

##### `include_new_accounts`<sup>Optional</sup> <a name="include_new_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts"></a>

```python
include_new_accounts: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to automatically include new member accounts in your cost analysis.

When `true`, use `excluded_accounts` to specify accounts to exclude. When `false`, use `included_accounts` to specify only the accounts to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#include_new_accounts AwsCurConfig#include_new_accounts}

---

### AwsCurConfigConfig <a name="AwsCurConfigConfig" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  bucket_name: str,
  report_name: str,
  report_prefix: str,
  account_filters: AwsCurConfigAccountFilters = None,
  bucket_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId">account_id</a></code> | <code>str</code> | The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The S3 bucket name where your AWS Cost and Usage Report files are stored. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName">report_name</a></code> | <code>str</code> | The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix">report_prefix</a></code> | <code>str</code> | The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/'). |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters">account_filters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | account_filters block. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion">bucket_region</a></code> | <code>str</code> | The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#account_id AwsCurConfig#account_id}

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The S3 bucket name where your AWS Cost and Usage Report files are stored.

This bucket must have appropriate IAM permissions for Datadog access and should be in the same AWS account as the CUR report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#bucket_name AwsCurConfig#bucket_name}

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences.

This must match the report name exactly as it appears in your AWS billing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#report_name AwsCurConfig#report_name}

---

##### `report_prefix`<sup>Required</sup> <a name="report_prefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix"></a>

```python
report_prefix: str
```

- *Type:* str

The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#report_prefix AwsCurConfig#report_prefix}

---

##### `account_filters`<sup>Optional</sup> <a name="account_filters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters"></a>

```python
account_filters: AwsCurConfigAccountFilters
```

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

account_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#account_filters AwsCurConfig#account_filters}

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/aws_cur_config#bucket_region AwsCurConfig#bucket_region}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsCurConfigAccountFiltersOutputReference <a name="AwsCurConfigAccountFiltersOutputReference" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import aws_cur_config

awsCurConfig.AwsCurConfigAccountFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts">reset_excluded_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts">reset_included_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts">reset_include_new_accounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_accounts` <a name="reset_excluded_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts"></a>

```python
def reset_excluded_accounts() -> None
```

##### `reset_included_accounts` <a name="reset_included_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts"></a>

```python
def reset_included_accounts() -> None
```

##### `reset_include_new_accounts` <a name="reset_include_new_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts"></a>

```python
def reset_include_new_accounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput">excluded_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput">included_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput">include_new_accounts_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts">included_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">include_new_accounts</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_accounts_input`<sup>Optional</sup> <a name="excluded_accounts_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput"></a>

```python
excluded_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_accounts_input`<sup>Optional</sup> <a name="included_accounts_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput"></a>

```python
included_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_new_accounts_input`<sup>Optional</sup> <a name="include_new_accounts_input" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput"></a>

```python
include_new_accounts_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_accounts`<sup>Required</sup> <a name="included_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```python
included_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_new_accounts`<sup>Required</sup> <a name="include_new_accounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```python
include_new_accounts: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AwsCurConfigAccountFilters
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---



