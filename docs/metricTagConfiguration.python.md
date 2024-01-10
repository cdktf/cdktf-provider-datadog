# `metricTagConfiguration` Submodule <a name="`metricTagConfiguration` Submodule" id="@cdktf/provider-datadog.metricTagConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricTagConfiguration <a name="MetricTagConfiguration" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration datadog_metric_tag_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_name: str,
  metric_type: str,
  tags: typing.List[str],
  aggregations: typing.Union[IResolvable, typing.List[MetricTagConfigurationAggregations]] = None,
  exclude_tags_mode: typing.Union[bool, IResolvable] = None,
  id: str = None,
  include_percentiles: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | The metric name for this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricType">metric_type</a></code> | <code>str</code> | The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag keys that will be queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.aggregations">aggregations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.excludeTagsMode">exclude_tags_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Toggle to include/exclude tags as queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.includePercentiles">include_percentiles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Toggle to include/exclude percentiles for a distribution metric. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricName"></a>

- *Type:* str

The metric name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.metricType"></a>

- *Type:* str

The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag keys that will be queryable for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.aggregations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}

---

##### `exclude_tags_mode`<sup>Optional</sup> <a name="exclude_tags_mode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.excludeTagsMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle to include/exclude tags as queryable for your metric.

Can only be applied to metrics that have one or more tags configured. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_percentiles`<sup>Optional</sup> <a name="include_percentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.includePercentiles"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations">put_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations">reset_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode">reset_exclude_tags_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles">reset_include_percentiles</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aggregations` <a name="put_aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations"></a>

```python
def put_aggregations(
  value: typing.Union[IResolvable, typing.List[MetricTagConfigurationAggregations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]

---

##### `reset_aggregations` <a name="reset_aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations"></a>

```python
def reset_aggregations() -> None
```

##### `reset_exclude_tags_mode` <a name="reset_exclude_tags_mode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode"></a>

```python
def reset_exclude_tags_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_percentiles` <a name="reset_include_percentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles"></a>

```python
def reset_include_percentiles() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MetricTagConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MetricTagConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MetricTagConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput">aggregations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput">exclude_tags_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput">include_percentiles_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode">exclude_tags_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles">include_percentiles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations"></a>

```python
aggregations: MetricTagConfigurationAggregationsList
```

- *Type:* <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a>

---

##### `aggregations_input`<sup>Optional</sup> <a name="aggregations_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput"></a>

```python
aggregations_input: typing.Union[IResolvable, typing.List[MetricTagConfigurationAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]

---

##### `exclude_tags_mode_input`<sup>Optional</sup> <a name="exclude_tags_mode_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput"></a>

```python
exclude_tags_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_percentiles_input`<sup>Optional</sup> <a name="include_percentiles_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput"></a>

```python
include_percentiles_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_tags_mode`<sup>Required</sup> <a name="exclude_tags_mode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode"></a>

```python
exclude_tags_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_percentiles`<sup>Required</sup> <a name="include_percentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles"></a>

```python
include_percentiles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MetricTagConfigurationAggregations <a name="MetricTagConfigurationAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfigurationAggregations(
  space: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space">space</a></code> | <code>str</code> | A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time">time</a></code> | <code>str</code> | A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`. |

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space"></a>

```python
space: str
```

- *Type:* str

A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#space MetricTagConfiguration#space}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time"></a>

```python
time: str
```

- *Type:* str

A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#time MetricTagConfiguration#time}

---

### MetricTagConfigurationConfig <a name="MetricTagConfigurationConfig" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metric_name: str,
  metric_type: str,
  tags: typing.List[str],
  aggregations: typing.Union[IResolvable, typing.List[MetricTagConfigurationAggregations]] = None,
  exclude_tags_mode: typing.Union[bool, IResolvable] = None,
  id: str = None,
  include_percentiles: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName">metric_name</a></code> | <code>str</code> | The metric name for this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType">metric_type</a></code> | <code>str</code> | The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag keys that will be queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations">aggregations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode">exclude_tags_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Toggle to include/exclude tags as queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles">include_percentiles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Toggle to include/exclude percentiles for a distribution metric. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The metric name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag keys that will be queryable for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations"></a>

```python
aggregations: typing.Union[IResolvable, typing.List[MetricTagConfigurationAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}

---

##### `exclude_tags_mode`<sup>Optional</sup> <a name="exclude_tags_mode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode"></a>

```python
exclude_tags_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle to include/exclude tags as queryable for your metric.

Can only be applied to metrics that have one or more tags configured. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_percentiles`<sup>Optional</sup> <a name="include_percentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles"></a>

```python
include_percentiles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricTagConfigurationAggregationsList <a name="MetricTagConfigurationAggregationsList" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfigurationAggregationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MetricTagConfigurationAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MetricTagConfigurationAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]]

---


### MetricTagConfigurationAggregationsOutputReference <a name="MetricTagConfigurationAggregationsOutputReference" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import metric_tag_configuration

metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space">space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space"></a>

```python
space: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MetricTagConfigurationAggregations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations">MetricTagConfigurationAggregations</a>]

---



