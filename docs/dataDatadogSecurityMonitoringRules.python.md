# `data_datadog_security_monitoring_rules`

Refer to the Terraform Registory for docs: [`data_datadog_security_monitoring_rules`](https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules).

# `dataDatadogSecurityMonitoringRules` Submodule <a name="`dataDatadogSecurityMonitoringRules` Submodule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringRules <a name="DataDatadogSecurityMonitoringRules" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules datadog_security_monitoring_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_only_filter: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name_filter: str = None,
  tags_filter: typing.List[str] = None,
  user_only_filter: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.defaultOnlyFilter">default_only_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit the search to default rules. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#id DataDatadogSecurityMonitoringRules#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.nameFilter">name_filter</a></code> | <code>str</code> | A rule name to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.tagsFilter">tags_filter</a></code> | <code>typing.List[str]</code> | A list of tags to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.userOnlyFilter">user_only_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit the search to user rules. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_only_filter`<sup>Optional</sup> <a name="default_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.defaultOnlyFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit the search to default rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#default_only_filter DataDatadogSecurityMonitoringRules#default_only_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#id DataDatadogSecurityMonitoringRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_filter`<sup>Optional</sup> <a name="name_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.nameFilter"></a>

- *Type:* str

A rule name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#name_filter DataDatadogSecurityMonitoringRules#name_filter}

---

##### `tags_filter`<sup>Optional</sup> <a name="tags_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.tagsFilter"></a>

- *Type:* typing.List[str]

A list of tags to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#tags_filter DataDatadogSecurityMonitoringRules#tags_filter}

---

##### `user_only_filter`<sup>Optional</sup> <a name="user_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.Initializer.parameter.userOnlyFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit the search to user rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#user_only_filter DataDatadogSecurityMonitoringRules#user_only_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetDefaultOnlyFilter">reset_default_only_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetNameFilter">reset_name_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetTagsFilter">reset_tags_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetUserOnlyFilter">reset_user_only_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_default_only_filter` <a name="reset_default_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetDefaultOnlyFilter"></a>

```python
def reset_default_only_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name_filter` <a name="reset_name_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetNameFilter"></a>

```python
def reset_name_filter() -> None
```

##### `reset_tags_filter` <a name="reset_tags_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetTagsFilter"></a>

```python
def reset_tags_filter() -> None
```

##### `reset_user_only_filter` <a name="reset_user_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.resetUserOnlyFilter"></a>

```python
def reset_user_only_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList">DataDatadogSecurityMonitoringRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.defaultOnlyFilterInput">default_only_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.nameFilterInput">name_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.tagsFilterInput">tags_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.userOnlyFilterInput">user_only_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.defaultOnlyFilter">default_only_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.nameFilter">name_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.tagsFilter">tags_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.userOnlyFilter">user_only_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `rule_ids`<sup>Required</sup> <a name="rule_ids" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.rules"></a>

```python
rules: DataDatadogSecurityMonitoringRulesRulesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList">DataDatadogSecurityMonitoringRulesRulesList</a>

---

##### `default_only_filter_input`<sup>Optional</sup> <a name="default_only_filter_input" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.defaultOnlyFilterInput"></a>

```python
default_only_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_filter_input`<sup>Optional</sup> <a name="name_filter_input" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.nameFilterInput"></a>

```python
name_filter_input: str
```

- *Type:* str

---

##### `tags_filter_input`<sup>Optional</sup> <a name="tags_filter_input" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.tagsFilterInput"></a>

```python
tags_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_only_filter_input`<sup>Optional</sup> <a name="user_only_filter_input" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.userOnlyFilterInput"></a>

```python
user_only_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_only_filter`<sup>Required</sup> <a name="default_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.defaultOnlyFilter"></a>

```python
default_only_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_filter`<sup>Required</sup> <a name="name_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.nameFilter"></a>

```python
name_filter: str
```

- *Type:* str

---

##### `tags_filter`<sup>Required</sup> <a name="tags_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.tagsFilter"></a>

```python
tags_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_only_filter`<sup>Required</sup> <a name="user_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.userOnlyFilter"></a>

```python
user_only_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringRulesConfig <a name="DataDatadogSecurityMonitoringRulesConfig" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_only_filter: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name_filter: str = None,
  tags_filter: typing.List[str] = None,
  user_only_filter: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.defaultOnlyFilter">default_only_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit the search to default rules. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#id DataDatadogSecurityMonitoringRules#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.nameFilter">name_filter</a></code> | <code>str</code> | A rule name to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.tagsFilter">tags_filter</a></code> | <code>typing.List[str]</code> | A list of tags to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.userOnlyFilter">user_only_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit the search to user rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_only_filter`<sup>Optional</sup> <a name="default_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.defaultOnlyFilter"></a>

```python
default_only_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit the search to default rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#default_only_filter DataDatadogSecurityMonitoringRules#default_only_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#id DataDatadogSecurityMonitoringRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_filter`<sup>Optional</sup> <a name="name_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.nameFilter"></a>

```python
name_filter: str
```

- *Type:* str

A rule name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#name_filter DataDatadogSecurityMonitoringRules#name_filter}

---

##### `tags_filter`<sup>Optional</sup> <a name="tags_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.tagsFilter"></a>

```python
tags_filter: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#tags_filter DataDatadogSecurityMonitoringRules#tags_filter}

---

##### `user_only_filter`<sup>Optional</sup> <a name="user_only_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesConfig.property.userOnlyFilter"></a>

```python
user_only_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit the search to user rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.23.0/docs/data-sources/security_monitoring_rules#user_only_filter DataDatadogSecurityMonitoringRules#user_only_filter}

---

### DataDatadogSecurityMonitoringRulesRules <a name="DataDatadogSecurityMonitoringRulesRules" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRules.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRules()
```


### DataDatadogSecurityMonitoringRulesRulesCase <a name="DataDatadogSecurityMonitoringRulesRulesCase" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCase.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCase()
```


### DataDatadogSecurityMonitoringRulesRulesFilter <a name="DataDatadogSecurityMonitoringRulesRulesFilter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilter()
```


### DataDatadogSecurityMonitoringRulesRulesOptions <a name="DataDatadogSecurityMonitoringRulesRulesOptions" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptions()
```


### DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions <a name="DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions()
```


### DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions <a name="DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions()
```


### DataDatadogSecurityMonitoringRulesRulesQuery <a name="DataDatadogSecurityMonitoringRulesRulesQuery" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQuery()
```


### DataDatadogSecurityMonitoringRulesRulesQueryAgentRule <a name="DataDatadogSecurityMonitoringRulesRulesQueryAgentRule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRule()
```


### DataDatadogSecurityMonitoringRulesRulesSignalQuery <a name="DataDatadogSecurityMonitoringRulesRulesSignalQuery" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQuery()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringRulesRulesCaseList <a name="DataDatadogSecurityMonitoringRulesRulesCaseList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesCaseOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesCaseOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCase">DataDatadogSecurityMonitoringRulesRulesCase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesCase
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCase">DataDatadogSecurityMonitoringRulesRulesCase</a>

---


### DataDatadogSecurityMonitoringRulesRulesFilterList <a name="DataDatadogSecurityMonitoringRulesRulesFilterList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesFilterOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilter">DataDatadogSecurityMonitoringRulesRulesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilter">DataDatadogSecurityMonitoringRulesRulesFilter</a>

---


### DataDatadogSecurityMonitoringRulesRulesList <a name="DataDatadogSecurityMonitoringRulesRulesList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList <a name="DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations">baseline_user_locations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions">DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_user_locations`<sup>Required</sup> <a name="baseline_user_locations" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations"></a>

```python
baseline_user_locations: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions">DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptions</a>

---


### DataDatadogSecurityMonitoringRulesRulesOptionsList <a name="DataDatadogSecurityMonitoringRulesRulesOptionsList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList <a name="DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.forgetAfter">forget_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.learningMethod">learning_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.learningThreshold">learning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions">DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forget_after`<sup>Required</sup> <a name="forget_after" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.forgetAfter"></a>

```python
forget_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_duration`<sup>Required</sup> <a name="learning_duration" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_method`<sup>Required</sup> <a name="learning_method" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.learningMethod"></a>

```python
learning_method: str
```

- *Type:* str

---

##### `learning_threshold`<sup>Required</sup> <a name="learning_threshold" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.learningThreshold"></a>

```python
learning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions">DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptions</a>

---


### DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decrease_criticality_based_on_env</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.detectionMethod">detection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.impossibleTravelOptions">impossible_travel_options</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList">DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.keepAlive">keep_alive</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.maxSignalDuration">max_signal_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.newValueOptions">new_value_options</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList">DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptions">DataDatadogSecurityMonitoringRulesRulesOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decrease_criticality_based_on_env`<sup>Required</sup> <a name="decrease_criticality_based_on_env" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```python
decrease_criticality_based_on_env: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `detection_method`<sup>Required</sup> <a name="detection_method" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.detectionMethod"></a>

```python
detection_method: str
```

- *Type:* str

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `impossible_travel_options`<sup>Required</sup> <a name="impossible_travel_options" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.impossibleTravelOptions"></a>

```python
impossible_travel_options: DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList">DataDatadogSecurityMonitoringRulesRulesOptionsImpossibleTravelOptionsList</a>

---

##### `keep_alive`<sup>Required</sup> <a name="keep_alive" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.keepAlive"></a>

```python
keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_signal_duration`<sup>Required</sup> <a name="max_signal_duration" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.maxSignalDuration"></a>

```python
max_signal_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_value_options`<sup>Required</sup> <a name="new_value_options" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.newValueOptions"></a>

```python
new_value_options: DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList">DataDatadogSecurityMonitoringRulesRulesOptionsNewValueOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptions">DataDatadogSecurityMonitoringRulesRulesOptions</a>

---


### DataDatadogSecurityMonitoringRulesRulesOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.case">case</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList">DataDatadogSecurityMonitoringRulesRulesCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList">DataDatadogSecurityMonitoringRulesRulesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.hasExtendedTitle">has_extended_title</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList">DataDatadogSecurityMonitoringRulesRulesOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList">DataDatadogSecurityMonitoringRulesRulesQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.signalQuery">signal_query</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList">DataDatadogSecurityMonitoringRulesRulesSignalQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRules">DataDatadogSecurityMonitoringRulesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.case"></a>

```python
case: DataDatadogSecurityMonitoringRulesRulesCaseList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesCaseList">DataDatadogSecurityMonitoringRulesRulesCaseList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.filter"></a>

```python
filter: DataDatadogSecurityMonitoringRulesRulesFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesFilterList">DataDatadogSecurityMonitoringRulesRulesFilterList</a>

---

##### `has_extended_title`<sup>Required</sup> <a name="has_extended_title" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.hasExtendedTitle"></a>

```python
has_extended_title: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.options"></a>

```python
options: DataDatadogSecurityMonitoringRulesRulesOptionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOptionsList">DataDatadogSecurityMonitoringRulesRulesOptionsList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.query"></a>

```python
query: DataDatadogSecurityMonitoringRulesRulesQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList">DataDatadogSecurityMonitoringRulesRulesQueryList</a>

---

##### `signal_query`<sup>Required</sup> <a name="signal_query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.signalQuery"></a>

```python
signal_query: DataDatadogSecurityMonitoringRulesRulesSignalQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList">DataDatadogSecurityMonitoringRulesRulesSignalQueryList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRules
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRules">DataDatadogSecurityMonitoringRulesRules</a>

---


### DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList <a name="DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.agentRuleId">agent_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRule">DataDatadogSecurityMonitoringRulesRulesQueryAgentRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_rule_id`<sup>Required</sup> <a name="agent_rule_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.agentRuleId"></a>

```python
agent_rule_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesQueryAgentRule
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRule">DataDatadogSecurityMonitoringRulesRulesQueryAgentRule</a>

---


### DataDatadogSecurityMonitoringRulesRulesQueryList <a name="DataDatadogSecurityMonitoringRulesRulesQueryList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesQueryOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesQueryOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.agentRule">agent_rule</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList">DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.distinctFields">distinct_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQuery">DataDatadogSecurityMonitoringRulesRulesQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_rule`<sup>Required</sup> <a name="agent_rule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.agentRule"></a>

```python
agent_rule: DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList">DataDatadogSecurityMonitoringRulesRulesQueryAgentRuleList</a>

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `distinct_fields`<sup>Required</sup> <a name="distinct_fields" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.distinctFields"></a>

```python
distinct_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQueryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesQuery">DataDatadogSecurityMonitoringRulesRulesQuery</a>

---


### DataDatadogSecurityMonitoringRulesRulesSignalQueryList <a name="DataDatadogSecurityMonitoringRulesRulesSignalQueryList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference <a name="DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_rules

dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.correlatedByFields">correlated_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.correlatedQueryIndex">correlated_query_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.defaultRuleId">default_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQuery">DataDatadogSecurityMonitoringRulesRulesSignalQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `correlated_by_fields`<sup>Required</sup> <a name="correlated_by_fields" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.correlatedByFields"></a>

```python
correlated_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `correlated_query_index`<sup>Required</sup> <a name="correlated_query_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.correlatedQueryIndex"></a>

```python
correlated_query_index: str
```

- *Type:* str

---

##### `default_rule_id`<sup>Required</sup> <a name="default_rule_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.defaultRuleId"></a>

```python
default_rule_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQueryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringRulesRulesSignalQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringRules.DataDatadogSecurityMonitoringRulesRulesSignalQuery">DataDatadogSecurityMonitoringRulesRulesSignalQuery</a>

---



