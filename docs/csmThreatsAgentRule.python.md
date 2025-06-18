# `csmThreatsAgentRule` Submodule <a name="`csmThreatsAgentRule` Submodule" id="@cdktf/provider-datadog.csmThreatsAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsmThreatsAgentRule <a name="CsmThreatsAgentRule" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expression: str,
  name: str,
  actions: typing.Union[IResolvable, typing.List[CsmThreatsAgentRuleActions]] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  policy_id: str = None,
  product_tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.expression">expression</a></code> | <code>str</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the Agent rule is enabled. Must not be used without policy_id. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The ID of the agent policy in which the rule is saved. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.productTags">product_tags</a></code> | <code>typing.List[str]</code> | The list of product tags associated with the rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.expression"></a>

- *Type:* str

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.actions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.description"></a>

- *Type:* str

A description for the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the Agent rule is enabled. Must not be used without policy_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.policyId"></a>

- *Type:* str

The ID of the agent policy in which the rule is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}

---

##### `product_tags`<sup>Optional</sup> <a name="product_tags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.productTags"></a>

- *Type:* typing.List[str]

The list of product tags associated with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags">reset_product_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[CsmThreatsAgentRuleActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]

---

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_product_tags` <a name="reset_product_tags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags"></a>

```python
def reset_product_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CsmThreatsAgentRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CsmThreatsAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsmThreatsAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput">product_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags">product_tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions"></a>

```python
actions: CsmThreatsAgentRuleActionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[CsmThreatsAgentRuleActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `product_tags_input`<sup>Optional</sup> <a name="product_tags_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput"></a>

```python
product_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `product_tags`<sup>Required</sup> <a name="product_tags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags"></a>

```python
product_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CsmThreatsAgentRuleActions <a name="CsmThreatsAgentRuleActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRuleActions(
  set: CsmThreatsAgentRuleActionsSet = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set">set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a></code> | set block. |

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set"></a>

```python
set: CsmThreatsAgentRuleActionsSet
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#set CsmThreatsAgentRule#set}

---

### CsmThreatsAgentRuleActionsSet <a name="CsmThreatsAgentRuleActionsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet(
  name: str,
  append: typing.Union[bool, IResolvable] = None,
  field: str = None,
  scope: str = None,
  size: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name">name</a></code> | <code>str</code> | The name of the set action. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append">append</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to append to the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field">field</a></code> | <code>str</code> | The field to get the value from. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope">scope</a></code> | <code>str</code> | The scope of the set action (process, container, cgroup, or empty). |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The maximum size of the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The time to live for the set in nanoseconds. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value">value</a></code> | <code>str</code> | The value to set. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the set action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append"></a>

```python
append: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to append to the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field"></a>

```python
field: str
```

- *Type:* str

The field to get the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope of the set action (process, container, cgroup, or empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum size of the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to live for the set in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value"></a>

```python
value: str
```

- *Type:* str

The value to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}

---

### CsmThreatsAgentRuleConfig <a name="CsmThreatsAgentRuleConfig" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expression: str,
  name: str,
  actions: typing.Union[IResolvable, typing.List[CsmThreatsAgentRuleActions]] = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  policy_id: str = None,
  product_tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression">expression</a></code> | <code>str</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description">description</a></code> | <code>str</code> | A description for the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the Agent rule is enabled. Must not be used without policy_id. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId">policy_id</a></code> | <code>str</code> | The ID of the agent policy in which the rule is saved. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags">product_tags</a></code> | <code>typing.List[str]</code> | The list of product tags associated with the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression"></a>

```python
expression: str
```

- *Type:* str

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[CsmThreatsAgentRuleActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the Agent rule is enabled. Must not be used without policy_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The ID of the agent policy in which the rule is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}

---

##### `product_tags`<sup>Optional</sup> <a name="product_tags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags"></a>

```python
product_tags: typing.List[str]
```

- *Type:* typing.List[str]

The list of product tags associated with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### CsmThreatsAgentRuleActionsList <a name="CsmThreatsAgentRuleActionsList" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsmThreatsAgentRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CsmThreatsAgentRuleActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]]

---


### CsmThreatsAgentRuleActionsOutputReference <a name="CsmThreatsAgentRuleActionsOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet">put_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_set` <a name="put_set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet"></a>

```python
def put_set(
  name: str,
  append: typing.Union[bool, IResolvable] = None,
  field: str = None,
  scope: str = None,
  size: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None,
  value: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.name"></a>

- *Type:* str

The name of the set action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

###### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.append"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to append to the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.field"></a>

- *Type:* str

The field to get the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.scope"></a>

- *Type:* str

The scope of the set action (process, container, cgroup, or empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.size"></a>

- *Type:* typing.Union[int, float]

The maximum size of the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The time to live for the set in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.value"></a>

- *Type:* str

The value to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}

---

##### `reset_set` <a name="reset_set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set">set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput">set_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set"></a>

```python
set: CsmThreatsAgentRuleActionsSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a>

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput"></a>

```python
set_input: typing.Union[IResolvable, CsmThreatsAgentRuleActionsSet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsmThreatsAgentRuleActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions">CsmThreatsAgentRuleActions</a>]

---


### CsmThreatsAgentRuleActionsSetOutputReference <a name="CsmThreatsAgentRuleActionsSetOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import csm_threats_agent_rule

csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend">reset_append</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_append` <a name="reset_append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend"></a>

```python
def reset_append() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput">append_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append">append</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `append_input`<sup>Optional</sup> <a name="append_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput"></a>

```python
append_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `append`<sup>Required</sup> <a name="append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append"></a>

```python
append: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsmThreatsAgentRuleActionsSet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>]

---



