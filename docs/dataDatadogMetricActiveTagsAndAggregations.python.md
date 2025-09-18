# `dataDatadogMetricActiveTagsAndAggregations` Submodule <a name="`dataDatadogMetricActiveTagsAndAggregations` Submodule" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMetricActiveTagsAndAggregations <a name="DataDatadogMetricActiveTagsAndAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/metric_active_tags_and_aggregations datadog_metric_active_tags_and_aggregations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric: str,
  window: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.metric">metric</a></code> | <code>str</code> | The metric for which to fetch tags. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.window">window</a></code> | <code>typing.Union[int, float]</code> | The number of seconds to look back from now. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.metric"></a>

- *Type:* str

The metric for which to fetch tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/metric_active_tags_and_aggregations#metric DataDatadogMetricActiveTagsAndAggregations#metric}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.window"></a>

- *Type:* typing.Union[int, float]

The number of seconds to look back from now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/metric_active_tags_and_aggregations#window DataDatadogMetricActiveTagsAndAggregations#window}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow">reset_window</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_window` <a name="reset_window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow"></a>

```python
def reset_window() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogMetricActiveTagsAndAggregations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogMetricActiveTagsAndAggregations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/metric_active_tags_and_aggregations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMetricActiveTagsAndAggregations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations">active_aggregations</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags">active_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput">window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window">window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `active_aggregations`<sup>Required</sup> <a name="active_aggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations"></a>

```python
active_aggregations: DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a>

---

##### `active_tags`<sup>Required</sup> <a name="active_tags" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags"></a>

```python
active_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput"></a>

```python
window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregations <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations()
```


### DataDatadogMetricActiveTagsAndAggregationsConfig <a name="DataDatadogMetricActiveTagsAndAggregationsConfig" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric: str,
  window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric">metric</a></code> | <code>str</code> | The metric for which to fetch tags. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window">window</a></code> | <code>typing.Union[int, float]</code> | The number of seconds to look back from now. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric"></a>

```python
metric: str
```

- *Type:* str

The metric for which to fetch tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/metric_active_tags_and_aggregations#metric DataDatadogMetricActiveTagsAndAggregations#metric}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds to look back from now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/metric_active_tags_and_aggregations#window DataDatadogMetricActiveTagsAndAggregations#window}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_metric_active_tags_and_aggregations

dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space">space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space"></a>

```python
space: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogMetricActiveTagsAndAggregationsActiveAggregations
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a>

---



