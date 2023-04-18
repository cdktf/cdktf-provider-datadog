# `datadog_integration_pagerduty`

Refer to the Terraform Registory for docs: [`datadog_integration_pagerduty`](https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty).

# `integrationPagerduty` Submodule <a name="`integrationPagerduty` Submodule" id="@cdktf/provider-datadog.integrationPagerduty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPagerduty <a name="IntegrationPagerduty" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty datadog_integration_pagerduty}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_pagerduty

integrationPagerduty.IntegrationPagerduty(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subdomain: str,
  api_token: str = None,
  id: str = None,
  schedules: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.subdomain">subdomain</a></code> | <code>str</code> | Your PagerDuty account’s personalized subdomain name. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | Your PagerDuty API token. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.schedules">schedules</a></code> | <code>typing.List[str]</code> | Array of your schedule URLs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.subdomain"></a>

- *Type:* str

Your PagerDuty account’s personalized subdomain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#subdomain IntegrationPagerduty#subdomain}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.apiToken"></a>

- *Type:* str

Your PagerDuty API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#api_token IntegrationPagerduty#api_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.Initializer.parameter.schedules"></a>

- *Type:* typing.List[str]

Array of your schedule URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#schedules IntegrationPagerduty#schedules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetSchedules">reset_schedules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_api_token` <a name="reset_api_token" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schedules` <a name="reset_schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.resetSchedules"></a>

```python
def reset_schedules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_pagerduty

integrationPagerduty.IntegrationPagerduty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_pagerduty

integrationPagerduty.IntegrationPagerduty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_pagerduty

integrationPagerduty.IntegrationPagerduty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedulesInput">schedules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomainInput">subdomain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedules">schedules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schedules_input`<sup>Optional</sup> <a name="schedules_input" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedulesInput"></a>

```python
schedules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subdomain_input`<sup>Optional</sup> <a name="subdomain_input" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomainInput"></a>

```python
subdomain_input: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.schedules"></a>

```python
schedules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerduty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPagerdutyConfig <a name="IntegrationPagerdutyConfig" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_pagerduty

integrationPagerduty.IntegrationPagerdutyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subdomain: str,
  api_token: str = None,
  id: str = None,
  schedules: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.subdomain">subdomain</a></code> | <code>str</code> | Your PagerDuty account’s personalized subdomain name. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.apiToken">api_token</a></code> | <code>str</code> | Your PagerDuty API token. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.schedules">schedules</a></code> | <code>typing.List[str]</code> | Array of your schedule URLs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

Your PagerDuty account’s personalized subdomain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#subdomain IntegrationPagerduty#subdomain}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

Your PagerDuty API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#api_token IntegrationPagerduty#api_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#id IntegrationPagerduty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-datadog.integrationPagerduty.IntegrationPagerdutyConfig.property.schedules"></a>

```python
schedules: typing.List[str]
```

- *Type:* typing.List[str]

Array of your schedule URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/resources/integration_pagerduty#schedules IntegrationPagerduty#schedules}

---



