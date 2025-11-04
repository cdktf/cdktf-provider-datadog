# `dataDatadogIncidentNotificationRule` Submodule <a name="`dataDatadogIncidentNotificationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIncidentNotificationRule <a name="DataDatadogIncidentNotificationRule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  conditions: IResolvable | typing.List[DataDatadogIncidentNotificationRuleConditions] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.conditions">conditions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]</code> | conditions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.conditions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions">reset_conditions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[DataDatadogIncidentNotificationRuleConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions"></a>

```python
def reset_conditions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogIncidentNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogIncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles">handles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate">notification_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn">renotify_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput">conditions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions"></a>

```python
conditions: DataDatadogIncidentNotificationRuleConditionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles"></a>

```python
handles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `notification_template`<sup>Required</sup> <a name="notification_template" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate"></a>

```python
notification_template: str
```

- *Type:* str

---

##### `renotify_on`<sup>Required</sup> <a name="renotify_on" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn"></a>

```python
renotify_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[DataDatadogIncidentNotificationRuleConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIncidentNotificationRuleConditions <a name="DataDatadogIncidentNotificationRuleConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions()
```


### DataDatadogIncidentNotificationRuleConfig <a name="DataDatadogIncidentNotificationRuleConfig" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  conditions: IResolvable | typing.List[DataDatadogIncidentNotificationRuleConditions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id">id</a></code> | <code>str</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]</code> | conditions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[DataDatadogIncidentNotificationRuleConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIncidentNotificationRuleConditionsList <a name="DataDatadogIncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogIncidentNotificationRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogIncidentNotificationRuleConditions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>]

---


### DataDatadogIncidentNotificationRuleConditionsOutputReference <a name="DataDatadogIncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_incident_notification_rule

dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogIncidentNotificationRuleConditions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions">DataDatadogIncidentNotificationRuleConditions</a>

---



