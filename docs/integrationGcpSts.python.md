# `datadog_integration_gcp_sts`

Refer to the Terraform Registory for docs: [`datadog_integration_gcp_sts`](https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts).

# `integrationGcpSts` Submodule <a name="`integrationGcpSts` Submodule" id="@cdktf/provider-datadog.integrationGcpSts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpSts <a name="IntegrationGcpSts" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp_sts

integrationGcpSts.IntegrationGcpSts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_email: str,
  automute: typing.Union[bool, IResolvable] = None,
  host_filters: typing.List[str] = None,
  is_cspm_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.clientEmail">client_email</a></code> | <code>str</code> | Your service account email address. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.automute">automute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.hostFilters">host_filters</a></code> | <code>typing.List[str]</code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.isCspmEnabled">is_cspm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.clientEmail"></a>

- *Type:* str

Your service account email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.automute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `host_filters`<sup>Optional</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.hostFilters"></a>

- *Type:* typing.List[str]

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `is_cspm_enabled`<sup>Optional</sup> <a name="is_cspm_enabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.isCspmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute">reset_automute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters">reset_host_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled">reset_is_cspm_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_automute` <a name="reset_automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute"></a>

```python
def reset_automute() -> None
```

##### `reset_host_filters` <a name="reset_host_filters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters"></a>

```python
def reset_host_filters() -> None
```

##### `reset_is_cspm_enabled` <a name="reset_is_cspm_enabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled"></a>

```python
def reset_is_cspm_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp_sts

integrationGcpSts.IntegrationGcpSts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp_sts

integrationGcpSts.IntegrationGcpSts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp_sts

integrationGcpSts.IntegrationGcpSts.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail">delegate_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput">automute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput">host_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput">is_cspm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute">automute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters">host_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled">is_cspm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegate_account_email`<sup>Required</sup> <a name="delegate_account_email" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail"></a>

```python
delegate_account_email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `automute_input`<sup>Optional</sup> <a name="automute_input" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput"></a>

```python
automute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `host_filters_input`<sup>Optional</sup> <a name="host_filters_input" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput"></a>

```python
host_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_cspm_enabled_input`<sup>Optional</sup> <a name="is_cspm_enabled_input" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput"></a>

```python
is_cspm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute"></a>

```python
automute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `host_filters`<sup>Required</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters"></a>

```python
host_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_cspm_enabled`<sup>Required</sup> <a name="is_cspm_enabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled"></a>

```python
is_cspm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpStsConfig <a name="IntegrationGcpStsConfig" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp_sts

integrationGcpSts.IntegrationGcpStsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_email: str,
  automute: typing.Union[bool, IResolvable] = None,
  host_filters: typing.List[str] = None,
  is_cspm_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail">client_email</a></code> | <code>str</code> | Your service account email address. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute">automute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters">host_filters</a></code> | <code>typing.List[str]</code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled">is_cspm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Your service account email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute"></a>

```python
automute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `host_filters`<sup>Optional</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters"></a>

```python
host_filters: typing.List[str]
```

- *Type:* typing.List[str]

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `is_cspm_enabled`<sup>Optional</sup> <a name="is_cspm_enabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled"></a>

```python
is_cspm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, Datadog performs configuration checks across your Google Cloud environment by continuously scanning every resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---


