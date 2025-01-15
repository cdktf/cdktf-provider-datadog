# `securityMonitoringSuppression` Submodule <a name="`securityMonitoringSuppression` Submodule" id="@cdktf/provider-datadog.securityMonitoringSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringSuppression <a name="SecurityMonitoringSuppression" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_suppression

securityMonitoringSuppression.SecurityMonitoringSuppression(
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
  name: str,
  rule_query: str,
  data_exclusion_query: str = None,
  description: str = None,
  expiration_date: str = None,
  suppression_query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the suppression rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.ruleQuery">rule_query</a></code> | <code>str</code> | The rule query of the suppression rule, with the same syntax as the search bar for detection rules. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dataExclusionQuery">data_exclusion_query</a></code> | <code>str</code> | An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.expirationDate">expiration_date</a></code> | <code>str</code> | A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.suppressionQuery">suppression_query</a></code> | <code>str</code> | The suppression query of the suppression rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the suppression rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.name"></a>

- *Type:* str

The name of the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}

---

##### `rule_query`<sup>Required</sup> <a name="rule_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.ruleQuery"></a>

- *Type:* str

The rule query of the suppression rule, with the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}

---

##### `data_exclusion_query`<sup>Optional</sup> <a name="data_exclusion_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.dataExclusionQuery"></a>

- *Type:* str

An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule.

Events matching this query are ignored by any detection rules referenced in the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.description"></a>

- *Type:* str

A description for the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.expirationDate"></a>

- *Type:* str

A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}

---

##### `suppression_query`<sup>Optional</sup> <a name="suppression_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.suppressionQuery"></a>

- *Type:* str

The suppression query of the suppression rule.

If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery">reset_data_exclusion_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate">reset_expiration_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery">reset_suppression_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_data_exclusion_query` <a name="reset_data_exclusion_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery"></a>

```python
def reset_data_exclusion_query() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expiration_date` <a name="reset_expiration_date" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate"></a>

```python
def reset_expiration_date() -> None
```

##### `reset_suppression_query` <a name="reset_suppression_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery"></a>

```python
def reset_suppression_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_suppression

securityMonitoringSuppression.SecurityMonitoringSuppression.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_suppression

securityMonitoringSuppression.SecurityMonitoringSuppression.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_suppression

securityMonitoringSuppression.SecurityMonitoringSuppression.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_suppression

securityMonitoringSuppression.SecurityMonitoringSuppression.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityMonitoringSuppression to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityMonitoringSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput">data_exclusion_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput">rule_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput">suppression_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery">data_exclusion_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery">rule_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery">suppression_query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `data_exclusion_query_input`<sup>Optional</sup> <a name="data_exclusion_query_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput"></a>

```python
data_exclusion_query_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_query_input`<sup>Optional</sup> <a name="rule_query_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput"></a>

```python
rule_query_input: str
```

- *Type:* str

---

##### `suppression_query_input`<sup>Optional</sup> <a name="suppression_query_input" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput"></a>

```python
suppression_query_input: str
```

- *Type:* str

---

##### `data_exclusion_query`<sup>Required</sup> <a name="data_exclusion_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery"></a>

```python
data_exclusion_query: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_query`<sup>Required</sup> <a name="rule_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery"></a>

```python
rule_query: str
```

- *Type:* str

---

##### `suppression_query`<sup>Required</sup> <a name="suppression_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery"></a>

```python
suppression_query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringSuppressionConfig <a name="SecurityMonitoringSuppressionConfig" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_suppression

securityMonitoringSuppression.SecurityMonitoringSuppressionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  rule_query: str,
  data_exclusion_query: str = None,
  description: str = None,
  expiration_date: str = None,
  suppression_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the suppression rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name">name</a></code> | <code>str</code> | The name of the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery">rule_query</a></code> | <code>str</code> | The rule query of the suppression rule, with the same syntax as the search bar for detection rules. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery">data_exclusion_query</a></code> | <code>str</code> | An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description">description</a></code> | <code>str</code> | A description for the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate">expiration_date</a></code> | <code>str</code> | A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery">suppression_query</a></code> | <code>str</code> | The suppression query of the suppression rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the suppression rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}

---

##### `rule_query`<sup>Required</sup> <a name="rule_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery"></a>

```python
rule_query: str
```

- *Type:* str

The rule query of the suppression rule, with the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}

---

##### `data_exclusion_query`<sup>Optional</sup> <a name="data_exclusion_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery"></a>

```python
data_exclusion_query: str
```

- *Type:* str

An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule.

Events matching this query are ignored by any detection rules referenced in the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}

---

##### `suppression_query`<sup>Optional</sup> <a name="suppression_query" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery"></a>

```python
suppression_query: str
```

- *Type:* str

The suppression query of the suppression rule.

If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}

---



