# `datadog_metric_metadata`

Refer to the Terraform Registory for docs: [`datadog_metric_metadata`](https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata).

# `metricMetadata` Submodule <a name="`metricMetadata` Submodule" id="@cdktf/provider-datadog.metricMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricMetadata <a name="MetricMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata datadog_metric_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_metadata

metricMetadata.MetricMetadata(
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
  description: str = None,
  id: str = None,
  per_unit: str = None,
  short_name: str = None,
  statsd_interval: typing.Union[int, float] = None,
  type: str = None,
  unit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.metric">metric</a></code> | <code>str</code> | The name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#id MetricMetadata#id}. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.perUnit">per_unit</a></code> | <code>str</code> | Per unit of the metric such as `second` in `bytes per second`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.shortName">short_name</a></code> | <code>str</code> | A short name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.statsdInterval">statsd_interval</a></code> | <code>typing.Union[int, float]</code> | If applicable, statsd flush interval in seconds for the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.type">type</a></code> | <code>str</code> | Metric type such as `gauge` or `rate`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.unit">unit</a></code> | <code>str</code> | Primary unit of the metric such as `byte` or `operation`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.metric"></a>

- *Type:* str

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#metric MetricMetadata#metric}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.description"></a>

- *Type:* str

A description of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#description MetricMetadata#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#id MetricMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `per_unit`<sup>Optional</sup> <a name="per_unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.perUnit"></a>

- *Type:* str

Per unit of the metric such as `second` in `bytes per second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#per_unit MetricMetadata#per_unit}

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.shortName"></a>

- *Type:* str

A short name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#short_name MetricMetadata#short_name}

---

##### `statsd_interval`<sup>Optional</sup> <a name="statsd_interval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.statsdInterval"></a>

- *Type:* typing.Union[int, float]

If applicable, statsd flush interval in seconds for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#statsd_interval MetricMetadata#statsd_interval}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.type"></a>

- *Type:* str

Metric type such as `gauge` or `rate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#type MetricMetadata#type}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.unit"></a>

- *Type:* str

Primary unit of the metric such as `byte` or `operation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#unit MetricMetadata#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit">reset_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetShortName">reset_short_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval">reset_statsd_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_per_unit` <a name="reset_per_unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit"></a>

```python
def reset_per_unit() -> None
```

##### `reset_short_name` <a name="reset_short_name" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetShortName"></a>

```python
def reset_short_name() -> None
```

##### `reset_statsd_interval` <a name="reset_statsd_interval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval"></a>

```python
def reset_statsd_interval() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetUnit"></a>

```python
def reset_unit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import metric_metadata

metricMetadata.MetricMetadata.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import metric_metadata

metricMetadata.MetricMetadata.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import metric_metadata

metricMetadata.MetricMetadata.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput">per_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput">short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput">statsd_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnit">per_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval">statsd_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unit">unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `per_unit_input`<sup>Optional</sup> <a name="per_unit_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput"></a>

```python
per_unit_input: str
```

- *Type:* str

---

##### `short_name_input`<sup>Optional</sup> <a name="short_name_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput"></a>

```python
short_name_input: str
```

- *Type:* str

---

##### `statsd_interval_input`<sup>Optional</sup> <a name="statsd_interval_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput"></a>

```python
statsd_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `per_unit`<sup>Required</sup> <a name="per_unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnit"></a>

```python
per_unit: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `statsd_interval`<sup>Required</sup> <a name="statsd_interval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval"></a>

```python
statsd_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MetricMetadataConfig <a name="MetricMetadataConfig" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_metadata

metricMetadata.MetricMetadataConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric: str,
  description: str = None,
  id: str = None,
  per_unit: str = None,
  short_name: str = None,
  statsd_interval: typing.Union[int, float] = None,
  type: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric">metric</a></code> | <code>str</code> | The name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.description">description</a></code> | <code>str</code> | A description of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#id MetricMetadata#id}. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit">per_unit</a></code> | <code>str</code> | Per unit of the metric such as `second` in `bytes per second`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName">short_name</a></code> | <code>str</code> | A short name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval">statsd_interval</a></code> | <code>typing.Union[int, float]</code> | If applicable, statsd flush interval in seconds for the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.type">type</a></code> | <code>str</code> | Metric type such as `gauge` or `rate`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit">unit</a></code> | <code>str</code> | Primary unit of the metric such as `byte` or `operation`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric"></a>

```python
metric: str
```

- *Type:* str

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#metric MetricMetadata#metric}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#description MetricMetadata#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#id MetricMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `per_unit`<sup>Optional</sup> <a name="per_unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit"></a>

```python
per_unit: str
```

- *Type:* str

Per unit of the metric such as `second` in `bytes per second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#per_unit MetricMetadata#per_unit}

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

A short name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#short_name MetricMetadata#short_name}

---

##### `statsd_interval`<sup>Optional</sup> <a name="statsd_interval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval"></a>

```python
statsd_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If applicable, statsd flush interval in seconds for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#statsd_interval MetricMetadata#statsd_interval}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Metric type such as `gauge` or `rate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#type MetricMetadata#type}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

Primary unit of the metric such as `byte` or `operation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/metric_metadata#unit MetricMetadata#unit}

---



