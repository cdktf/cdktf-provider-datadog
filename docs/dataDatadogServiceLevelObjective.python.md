# `dataDatadogServiceLevelObjective` Submodule <a name="`dataDatadogServiceLevelObjective` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjective <a name="DataDatadogServiceLevelObjective" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  metrics_query: str = None,
  name_query: str = None,
  tags_query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>str</code> | A SLO ID to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.metricsQuery">metrics_query</a></code> | <code>str</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.nameQuery">name_query</a></code> | <code>str</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.tagsQuery">tags_query</a></code> | <code>str</code> | Filter results based on a single SLO tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* str

A SLO ID to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics_query`<sup>Optional</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.metricsQuery"></a>

- *Type:* str

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `name_query`<sup>Optional</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.nameQuery"></a>

- *Type:* str

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tags_query`<sup>Optional</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.tagsQuery"></a>

- *Type:* str

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery">reset_metrics_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery">reset_name_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery">reset_tags_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metrics_query` <a name="reset_metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery"></a>

```python
def reset_metrics_query() -> None
```

##### `reset_name_query` <a name="reset_name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery"></a>

```python
def reset_name_query() -> None
```

##### `reset_tags_query` <a name="reset_tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery"></a>

```python
def reset_tags_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogServiceLevelObjective resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogServiceLevelObjective resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogServiceLevelObjective to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjective to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList">DataDatadogServiceLevelObjectiveQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.targetThreshold">target_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.timeframe">timeframe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput">metrics_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput">name_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput">tags_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery">metrics_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery">name_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery">tags_query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.query"></a>

```python
query: DataDatadogServiceLevelObjectiveQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList">DataDatadogServiceLevelObjectiveQueryList</a>

---

##### `target_threshold`<sup>Required</sup> <a name="target_threshold" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.targetThreshold"></a>

```python
target_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `warning_threshold`<sup>Required</sup> <a name="warning_threshold" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metrics_query_input`<sup>Optional</sup> <a name="metrics_query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput"></a>

```python
metrics_query_input: str
```

- *Type:* str

---

##### `name_query_input`<sup>Optional</sup> <a name="name_query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput"></a>

```python
name_query_input: str
```

- *Type:* str

---

##### `tags_query_input`<sup>Optional</sup> <a name="tags_query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput"></a>

```python
tags_query_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metrics_query`<sup>Required</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery"></a>

```python
metrics_query: str
```

- *Type:* str

---

##### `name_query`<sup>Required</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery"></a>

```python
name_query: str
```

- *Type:* str

---

##### `tags_query`<sup>Required</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery"></a>

```python
tags_query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectiveConfig <a name="DataDatadogServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  metrics_query: str = None,
  name_query: str = None,
  tags_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id">id</a></code> | <code>str</code> | A SLO ID to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery">metrics_query</a></code> | <code>str</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery">name_query</a></code> | <code>str</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery">tags_query</a></code> | <code>str</code> | Filter results based on a single SLO tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

A SLO ID to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics_query`<sup>Optional</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery"></a>

```python
metrics_query: str
```

- *Type:* str

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `name_query`<sup>Optional</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery"></a>

```python
name_query: str
```

- *Type:* str

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tags_query`<sup>Optional</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery"></a>

```python
tags_query: str
```

- *Type:* str

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---

### DataDatadogServiceLevelObjectiveQuery <a name="DataDatadogServiceLevelObjectiveQuery" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectiveQueryList <a name="DataDatadogServiceLevelObjectiveQueryList" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogServiceLevelObjectiveQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogServiceLevelObjectiveQueryOutputReference <a name="DataDatadogServiceLevelObjectiveQueryOutputReference" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.denominator">denominator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.numerator">numerator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery">DataDatadogServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `denominator`<sup>Required</sup> <a name="denominator" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```python
denominator: str
```

- *Type:* str

---

##### `numerator`<sup>Required</sup> <a name="numerator" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```python
numerator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery">DataDatadogServiceLevelObjectiveQuery</a>

---



