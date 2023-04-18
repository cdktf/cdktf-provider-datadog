# `datadog_integration_aws_lambda_arn`

Refer to the Terraform Registory for docs: [`datadog_integration_aws_lambda_arn`](https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn).

# `integrationAwsLambdaArn` Submodule <a name="`integrationAwsLambdaArn` Submodule" id="@cdktf/provider-datadog.integrationAwsLambdaArn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsLambdaArn <a name="IntegrationAwsLambdaArn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn datadog_integration_aws_lambda_arn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_lambda_arn

integrationAwsLambdaArn.IntegrationAwsLambdaArn(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  lambda_arn: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. If your account is a GovCloud or China account, specify the `access_key_id` here. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lambdaArn">lambda_arn</a></code> | <code>str</code> | The ARN of the Datadog forwarder Lambda. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.accountId"></a>

- *Type:* str

Your AWS Account ID without dashes. If your account is a GovCloud or China account, specify the `access_key_id` here.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#account_id IntegrationAwsLambdaArn#account_id}

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lambdaArn"></a>

- *Type:* str

The ARN of the Datadog forwarder Lambda.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#lambda_arn IntegrationAwsLambdaArn#lambda_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_lambda_arn

integrationAwsLambdaArn.IntegrationAwsLambdaArn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_lambda_arn

integrationAwsLambdaArn.IntegrationAwsLambdaArn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_lambda_arn

integrationAwsLambdaArn.IntegrationAwsLambdaArn.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsLambdaArnConfig <a name="IntegrationAwsLambdaArnConfig" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_lambda_arn

integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  lambda_arn: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.accountId">account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. If your account is a GovCloud or China account, specify the `access_key_id` here. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | The ARN of the Datadog forwarder Lambda. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Your AWS Account ID without dashes. If your account is a GovCloud or China account, specify the `access_key_id` here.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#account_id IntegrationAwsLambdaArn#account_id}

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

The ARN of the Datadog forwarder Lambda.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#lambda_arn IntegrationAwsLambdaArn#lambda_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



