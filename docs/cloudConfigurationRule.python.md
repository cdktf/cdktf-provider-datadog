# `datadog_cloud_configuration_rule`

Refer to the Terraform Registory for docs: [`datadog_cloud_configuration_rule`](https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule).

# `cloudConfigurationRule` Submodule <a name="`cloudConfigurationRule` Submodule" id="@cdktf/provider-datadog.cloudConfigurationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigurationRule <a name="CloudConfigurationRule" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule datadog_cloud_configuration_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_configuration_rule

cloudConfigurationRule.CloudConfigurationRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  message: str,
  name: str,
  policy: str,
  resource_type: str,
  severity: str,
  group_by: typing.List[str] = None,
  id: str = None,
  notifications: typing.List[str] = None,
  related_resource_types: typing.List[str] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the cloud configuration rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.message">message</a></code> | <code>str</code> | The message associated to the rule that will be shown in findings and signals. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the cloud configuration rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Policy written in Rego format. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Main resource type to be checked by the rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Fields to group by when generating signals, e.g. @resource. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.notifications">notifications</a></code> | <code>typing.List[str]</code> | Notification targets for signals. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.relatedResourceTypes">related_resource_types</a></code> | <code>typing.List[str]</code> | Related resource types to be checked by the rule. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags of the rule, propagated to findings and signals. Defaults to empty list. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the cloud configuration rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#enabled CloudConfigurationRule#enabled}

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.message"></a>

- *Type:* str

The message associated to the rule that will be shown in findings and signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#message CloudConfigurationRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the cloud configuration rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#name CloudConfigurationRule#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.policy"></a>

- *Type:* str

Policy written in Rego format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#policy CloudConfigurationRule#policy}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.resourceType"></a>

- *Type:* str

Main resource type to be checked by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#resource_type CloudConfigurationRule#resource_type}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.severity"></a>

- *Type:* str

Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#severity CloudConfigurationRule#severity}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.groupBy"></a>

- *Type:* typing.List[str]

Fields to group by when generating signals, e.g. @resource. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#group_by CloudConfigurationRule#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.notifications"></a>

- *Type:* typing.List[str]

Notification targets for signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#notifications CloudConfigurationRule#notifications}

---

##### `related_resource_types`<sup>Optional</sup> <a name="related_resource_types" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.relatedResourceTypes"></a>

- *Type:* typing.List[str]

Related resource types to be checked by the rule. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#related_resource_types CloudConfigurationRule#related_resource_types}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags of the rule, propagated to findings and signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#tags CloudConfigurationRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes">reset_related_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_group_by` <a name="reset_group_by" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_related_resource_types` <a name="reset_related_resource_types" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes"></a>

```python
def reset_related_resource_types() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_configuration_rule

cloudConfigurationRule.CloudConfigurationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_configuration_rule

cloudConfigurationRule.CloudConfigurationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_configuration_rule

cloudConfigurationRule.CloudConfigurationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput">notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput">related_resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes">related_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput"></a>

```python
notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `related_resource_types_input`<sup>Optional</sup> <a name="related_resource_types_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput"></a>

```python
related_resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `related_resource_types`<sup>Required</sup> <a name="related_resource_types" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes"></a>

```python
related_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigurationRuleConfig <a name="CloudConfigurationRuleConfig" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_configuration_rule

cloudConfigurationRule.CloudConfigurationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  message: str,
  name: str,
  policy: str,
  resource_type: str,
  severity: str,
  group_by: typing.List[str] = None,
  id: str = None,
  notifications: typing.List[str] = None,
  related_resource_types: typing.List[str] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the cloud configuration rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message">message</a></code> | <code>str</code> | The message associated to the rule that will be shown in findings and signals. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the cloud configuration rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy">policy</a></code> | <code>str</code> | Policy written in Rego format. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Main resource type to be checked by the rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity">severity</a></code> | <code>str</code> | Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Fields to group by when generating signals, e.g. @resource. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | Notification targets for signals. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes">related_resource_types</a></code> | <code>typing.List[str]</code> | Related resource types to be checked by the rule. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags of the rule, propagated to findings and signals. Defaults to empty list. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the cloud configuration rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#enabled CloudConfigurationRule#enabled}

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message"></a>

```python
message: str
```

- *Type:* str

The message associated to the rule that will be shown in findings and signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#message CloudConfigurationRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the cloud configuration rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#name CloudConfigurationRule#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Policy written in Rego format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#policy CloudConfigurationRule#policy}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Main resource type to be checked by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#resource_type CloudConfigurationRule#resource_type}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#severity CloudConfigurationRule#severity}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Fields to group by when generating signals, e.g. @resource. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#group_by CloudConfigurationRule#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#id CloudConfigurationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#notifications CloudConfigurationRule#notifications}

---

##### `related_resource_types`<sup>Optional</sup> <a name="related_resource_types" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes"></a>

```python
related_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Related resource types to be checked by the rule. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#related_resource_types CloudConfigurationRule#related_resource_types}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags of the rule, propagated to findings and signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/cloud_configuration_rule#tags CloudConfigurationRule#tags}

---



