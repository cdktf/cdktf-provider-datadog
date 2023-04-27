# `datadog_integration_gcp`

Refer to the Terraform Registory for docs: [`datadog_integration_gcp`](https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp).

# `integrationGcp` Submodule <a name="`integrationGcp` Submodule" id="@cdktf/provider-datadog.integrationGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcp <a name="IntegrationGcp" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp datadog_integration_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp

integrationGcp.IntegrationGcp(
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
  client_id: str,
  private_key: str,
  private_key_id: str,
  project_id: str,
  automute: typing.Union[bool, IResolvable] = None,
  cspm_resource_collection_enabled: typing.Union[bool, IResolvable] = None,
  host_filters: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientEmail">client_email</a></code> | <code>str</code> | Your email found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Your ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Your private key name found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKeyId">private_key_id</a></code> | <code>str</code> | Your private key ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Your Google Cloud project ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.automute">automute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.cspmResourceCollectionEnabled">cspm_resource_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.hostFilters">host_filters</a></code> | <code>str</code> | Limit the GCE instances that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#id IntegrationGcp#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientEmail"></a>

- *Type:* str

Your email found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientId"></a>

- *Type:* str

Your ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKey"></a>

- *Type:* str

Your private key name found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKeyId"></a>

- *Type:* str

Your private key ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.projectId"></a>

- *Type:* str

Your Google Cloud project ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.automute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}

---

##### `cspm_resource_collection_enabled`<sup>Optional</sup> <a name="cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.cspmResourceCollectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Datadog collects cloud security posture management resources from your GCP project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}

---

##### `host_filters`<sup>Optional</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.hostFilters"></a>

- *Type:* str

Limit the GCE instances that are pulled into Datadog by using tags.

Only hosts that match one of the defined tags are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#id IntegrationGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute">reset_automute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled">reset_cspm_resource_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters">reset_host_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_automute` <a name="reset_automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute"></a>

```python
def reset_automute() -> None
```

##### `reset_cspm_resource_collection_enabled` <a name="reset_cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled"></a>

```python
def reset_cspm_resource_collection_enabled() -> None
```

##### `reset_host_filters` <a name="reset_host_filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters"></a>

```python
def reset_host_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp

integrationGcp.IntegrationGcp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp

integrationGcp.IntegrationGcp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp

integrationGcp.IntegrationGcp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput">automute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput">cspm_resource_collection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput">host_filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute">automute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled">cspm_resource_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters">host_filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automute_input`<sup>Optional</sup> <a name="automute_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput"></a>

```python
automute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `cspm_resource_collection_enabled_input`<sup>Optional</sup> <a name="cspm_resource_collection_enabled_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput"></a>

```python
cspm_resource_collection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_filters_input`<sup>Optional</sup> <a name="host_filters_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput"></a>

```python
host_filters_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute"></a>

```python
automute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `cspm_resource_collection_enabled`<sup>Required</sup> <a name="cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled"></a>

```python
cspm_resource_collection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_filters`<sup>Required</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters"></a>

```python
host_filters: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpConfig <a name="IntegrationGcpConfig" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_gcp

integrationGcp.IntegrationGcpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_email: str,
  client_id: str,
  private_key: str,
  private_key_id: str,
  project_id: str,
  automute: typing.Union[bool, IResolvable] = None,
  cspm_resource_collection_enabled: typing.Union[bool, IResolvable] = None,
  host_filters: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail">client_email</a></code> | <code>str</code> | Your email found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId">client_id</a></code> | <code>str</code> | Your ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey">private_key</a></code> | <code>str</code> | Your private key name found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Your private key ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId">project_id</a></code> | <code>str</code> | Your Google Cloud project ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute">automute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled">cspm_resource_collection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters">host_filters</a></code> | <code>str</code> | Limit the GCE instances that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#id IntegrationGcp#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Your email found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Your ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Your private key name found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Your private key ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Your Google Cloud project ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute"></a>

```python
automute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}

---

##### `cspm_resource_collection_enabled`<sup>Optional</sup> <a name="cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled"></a>

```python
cspm_resource_collection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Datadog collects cloud security posture management resources from your GCP project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}

---

##### `host_filters`<sup>Optional</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters"></a>

```python
host_filters: str
```

- *Type:* str

Limit the GCE instances that are pulled into Datadog by using tags.

Only hosts that match one of the defined tags are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_gcp#id IntegrationGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



