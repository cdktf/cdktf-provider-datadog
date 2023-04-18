# `data_datadog_service_level_objective`

Refer to the Terraform Registory for docs: [`data_datadog_service_level_objective`](https://www.terraform.io/docs/providers/datadog/d/service_level_objective).

# `dataDatadogServiceLevelObjective` Submodule <a name="`dataDatadogServiceLevelObjective` Submodule" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjective <a name="DataDatadogServiceLevelObjective" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_service_level_objective

dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
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

- *Type:* typing.Union[int, float]

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics_query`<sup>Optional</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.metricsQuery"></a>

- *Type:* str

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `name_query`<sup>Optional</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.nameQuery"></a>

- *Type:* str

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tags_query`<sup>Optional</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.tagsQuery"></a>

- *Type:* str

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type">type</a></code> | <code>str</code> | *No description.* |
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
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type"></a>

```python
type: str
```

- *Type:* str

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
  count: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
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
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics_query`<sup>Optional</sup> <a name="metrics_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery"></a>

```python
metrics_query: str
```

- *Type:* str

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `name_query`<sup>Optional</sup> <a name="name_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery"></a>

```python
name_query: str
```

- *Type:* str

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `tags_query`<sup>Optional</sup> <a name="tags_query" id="@cdktf/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery"></a>

```python
tags_query: str
```

- *Type:* str

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---



