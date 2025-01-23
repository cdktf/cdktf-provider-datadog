# `dataDatadogServiceLevelObjectives` Submodule <a name="`dataDatadogServiceLevelObjectives` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjectives <a name="DataDatadogServiceLevelObjectives" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives datadog_service_level_objectives}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  error_on_empty_result: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ids: typing.List[str] = None,
  metrics_query: str = None,
  name_query: str = None,
  query: str = None,
  tags_query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.errorOnEmptyResult">error_on_empty_result</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Throw an error if no results are found. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.ids">ids</a></code> | <code>typing.List[str]</code> | An array of SLO IDs to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.metricsQuery">metrics_query</a></code> | <code>str</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.nameQuery">name_query</a></code> | <code>str</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.query">query</a></code> | <code>str</code> | The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.tagsQuery">tags_query</a></code> | <code>str</code> | Filter results based on a single SLO tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_on_empty_result`<sup>Optional</sup> <a name="error_on_empty_result" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.errorOnEmptyResult"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Throw an error if no results are found. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#error_on_empty_result DataDatadogServiceLevelObjectives#error_on_empty_result}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.ids"></a>

- *Type:* typing.List[str]

An array of SLO IDs to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#ids DataDatadogServiceLevelObjectives#ids}

---

##### `metrics_query`<sup>Optional</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.metricsQuery"></a>

- *Type:* str

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#metrics_query DataDatadogServiceLevelObjectives#metrics_query}

---

##### `name_query`<sup>Optional</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.nameQuery"></a>

- *Type:* str

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#name_query DataDatadogServiceLevelObjectives#name_query}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.query"></a>

- *Type:* str

The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#query DataDatadogServiceLevelObjectives#query}

---

##### `tags_query`<sup>Optional</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.tagsQuery"></a>

- *Type:* str

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#tags_query DataDatadogServiceLevelObjectives#tags_query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult">reset_error_on_empty_result</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds">reset_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery">reset_metrics_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery">reset_name_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery">reset_tags_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_error_on_empty_result` <a name="reset_error_on_empty_result" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult"></a>

```python
def reset_error_on_empty_result() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ids` <a name="reset_ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds"></a>

```python
def reset_ids() -> None
```

##### `reset_metrics_query` <a name="reset_metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery"></a>

```python
def reset_metrics_query() -> None
```

##### `reset_name_query` <a name="reset_name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery"></a>

```python
def reset_name_query() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_tags_query` <a name="reset_tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery"></a>

```python
def reset_tags_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogServiceLevelObjectives to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogServiceLevelObjectives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjectives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos">slos</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput">error_on_empty_result_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput">metrics_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput">name_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput">tags_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult">error_on_empty_result</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery">metrics_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery">name_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery">tags_query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `slos`<sup>Required</sup> <a name="slos" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos"></a>

```python
slos: DataDatadogServiceLevelObjectivesSlosList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a>

---

##### `error_on_empty_result_input`<sup>Optional</sup> <a name="error_on_empty_result_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput"></a>

```python
error_on_empty_result_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_query_input`<sup>Optional</sup> <a name="metrics_query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput"></a>

```python
metrics_query_input: str
```

- *Type:* str

---

##### `name_query_input`<sup>Optional</sup> <a name="name_query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput"></a>

```python
name_query_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `tags_query_input`<sup>Optional</sup> <a name="tags_query_input" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput"></a>

```python
tags_query_input: str
```

- *Type:* str

---

##### `error_on_empty_result`<sup>Required</sup> <a name="error_on_empty_result" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult"></a>

```python
error_on_empty_result: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_query`<sup>Required</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery"></a>

```python
metrics_query: str
```

- *Type:* str

---

##### `name_query`<sup>Required</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery"></a>

```python
name_query: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `tags_query`<sup>Required</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery"></a>

```python
tags_query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectivesConfig <a name="DataDatadogServiceLevelObjectivesConfig" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  error_on_empty_result: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ids: typing.List[str] = None,
  metrics_query: str = None,
  name_query: str = None,
  query: str = None,
  tags_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult">error_on_empty_result</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Throw an error if no results are found. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids">ids</a></code> | <code>typing.List[str]</code> | An array of SLO IDs to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery">metrics_query</a></code> | <code>str</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery">name_query</a></code> | <code>str</code> | Filter results based on SLO names. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query">query</a></code> | <code>str</code> | The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery">tags_query</a></code> | <code>str</code> | Filter results based on a single SLO tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_on_empty_result`<sup>Optional</sup> <a name="error_on_empty_result" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult"></a>

```python
error_on_empty_result: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Throw an error if no results are found. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#error_on_empty_result DataDatadogServiceLevelObjectives#error_on_empty_result}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

An array of SLO IDs to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#ids DataDatadogServiceLevelObjectives#ids}

---

##### `metrics_query`<sup>Optional</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery"></a>

```python
metrics_query: str
```

- *Type:* str

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#metrics_query DataDatadogServiceLevelObjectives#metrics_query}

---

##### `name_query`<sup>Optional</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery"></a>

```python
name_query: str
```

- *Type:* str

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#name_query DataDatadogServiceLevelObjectives#name_query}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#query DataDatadogServiceLevelObjectives#query}

---

##### `tags_query`<sup>Optional</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery"></a>

```python
tags_query: str
```

- *Type:* str

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/data-sources/service_level_objectives#tags_query DataDatadogServiceLevelObjectives#tags_query}

---

### DataDatadogServiceLevelObjectivesSlos <a name="DataDatadogServiceLevelObjectivesSlos" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectivesSlosList <a name="DataDatadogServiceLevelObjectivesSlosList" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogServiceLevelObjectivesSlosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogServiceLevelObjectivesSlosOutputReference <a name="DataDatadogServiceLevelObjectivesSlosOutputReference" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objectives

dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogServiceLevelObjectivesSlos
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a>

---



