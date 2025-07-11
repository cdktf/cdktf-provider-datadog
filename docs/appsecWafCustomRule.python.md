# `appsecWafCustomRule` Submodule <a name="`appsecWafCustomRule` Submodule" id="@cdktf/provider-datadog.appsecWafCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafCustomRule <a name="AppsecWafCustomRule" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule datadog_appsec_waf_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blocking: typing.Union[bool, IResolvable],
  enabled: typing.Union[bool, IResolvable],
  name: str,
  tags: typing.Mapping[str],
  action: AppsecWafCustomRuleAction = None,
  condition: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleCondition]] = None,
  path_glob: str = None,
  scope: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleScope]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.blocking">blocking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the WAF custom rule will block the request. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the WAF custom rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The Name of the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags associated with the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.pathGlob">path_glob</a></code> | <code>str</code> | The path glob for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]</code> | scope block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blocking`<sup>Required</sup> <a name="blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.blocking"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the WAF custom rule will block the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#blocking AppsecWafCustomRule#blocking}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the WAF custom rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#enabled AppsecWafCustomRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.name"></a>

- *Type:* str

The Name of the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#name AppsecWafCustomRule#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Tags associated with the WAF custom rule.

`category` and `type` tags are required. Supported categories include `business_logic`, `attack_attempt` and `security_response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#tags AppsecWafCustomRule#tags}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.condition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#condition AppsecWafCustomRule#condition}

---

##### `path_glob`<sup>Optional</sup> <a name="path_glob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.pathGlob"></a>

- *Type:* str

The path glob for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#path_glob AppsecWafCustomRule#path_glob}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#scope AppsecWafCustomRule#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob">reset_path_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction"></a>

```python
def put_action(
  action: str = None,
  parameters: AppsecWafCustomRuleActionParameters = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction.parameter.action"></a>

- *Type:* str

Override the default action to take when the WAF custom rule would block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction.parameter.parameters"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope"></a>

```python
def put_scope(
  value: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_path_glob` <a name="reset_path_glob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob"></a>

```python
def reset_path_glob() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsecWafCustomRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsecWafCustomRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsecWafCustomRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput">blocking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput">path_glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking">blocking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob">path_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action"></a>

```python
action: AppsecWafCustomRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition"></a>

```python
condition: AppsecWafCustomRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope"></a>

```python
scope: AppsecWafCustomRuleScopeList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, AppsecWafCustomRuleAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>]

---

##### `blocking_input`<sup>Optional</sup> <a name="blocking_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput"></a>

```python
blocking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_glob_input`<sup>Optional</sup> <a name="path_glob_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput"></a>

```python
path_glob_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `blocking`<sup>Required</sup> <a name="blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking"></a>

```python
blocking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_glob`<sup>Required</sup> <a name="path_glob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob"></a>

```python
path_glob: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafCustomRuleAction <a name="AppsecWafCustomRuleAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleAction(
  action: str = None,
  parameters: AppsecWafCustomRuleActionParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action">action</a></code> | <code>str</code> | Override the default action to take when the WAF custom rule would block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | parameters block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action"></a>

```python
action: str
```

- *Type:* str

Override the default action to take when the WAF custom rule would block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters"></a>

```python
parameters: AppsecWafCustomRuleActionParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleActionParameters <a name="AppsecWafCustomRuleActionParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleActionParameters(
  location: str = None,
  status_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location">location</a></code> | <code>str</code> | The location to redirect to when the WAF custom rule triggers. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | The status code to return when the WAF custom rule triggers. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location"></a>

```python
location: str
```

- *Type:* str

The location to redirect to when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#location AppsecWafCustomRule#location}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The status code to return when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#status_code AppsecWafCustomRule#status_code}

---

### AppsecWafCustomRuleCondition <a name="AppsecWafCustomRuleCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleCondition(
  operator: str = None,
  parameters: AppsecWafCustomRuleConditionParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator">operator</a></code> | <code>str</code> | Operator to use for the WAF Condition. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | parameters block. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Operator to use for the WAF Condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#operator AppsecWafCustomRule#operator}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters"></a>

```python
parameters: AppsecWafCustomRuleConditionParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleConditionParameters <a name="AppsecWafCustomRuleConditionParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParameters(
  data: str = None,
  input: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleConditionParametersInput]] = None,
  list: typing.List[str] = None,
  options: AppsecWafCustomRuleConditionParametersOptions = None,
  regex: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data">data</a></code> | <code>str</code> | Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]</code> | input block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list">list</a></code> | <code>typing.List[str]</code> | List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex">regex</a></code> | <code>str</code> | Regex to use with the condition. Only used with match_regex and !match_regex operator. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value">value</a></code> | <code>str</code> | Store the captured value in the specified tag name. Only used with the capture_data operator. |

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data"></a>

```python
data: str
```

- *Type:* str

Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#data AppsecWafCustomRule#data}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input"></a>

```python
input: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleConditionParametersInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#input AppsecWafCustomRule#input}

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list"></a>

```python
list: typing.List[str]
```

- *Type:* typing.List[str]

List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#list AppsecWafCustomRule#list}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options"></a>

```python
options: AppsecWafCustomRuleConditionParametersOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#options AppsecWafCustomRule#options}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex"></a>

```python
regex: str
```

- *Type:* str

Regex to use with the condition. Only used with match_regex and !match_regex operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#regex AppsecWafCustomRule#regex}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Store the captured value in the specified tag name. Only used with the capture_data operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#value AppsecWafCustomRule#value}

---

### AppsecWafCustomRuleConditionParametersInput <a name="AppsecWafCustomRuleConditionParametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput(
  address: str = None,
  key_path: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address">address</a></code> | <code>str</code> | Input from the request on which the condition should apply. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath">key_path</a></code> | <code>typing.List[str]</code> | Specific path for the input. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address"></a>

```python
address: str
```

- *Type:* str

Input from the request on which the condition should apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#address AppsecWafCustomRule#address}

---

##### `key_path`<sup>Optional</sup> <a name="key_path" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath"></a>

```python
key_path: typing.List[str]
```

- *Type:* typing.List[str]

Specific path for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#key_path AppsecWafCustomRule#key_path}

---

### AppsecWafCustomRuleConditionParametersOptions <a name="AppsecWafCustomRuleConditionParametersOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions(
  case_sensitive: typing.Union[bool, IResolvable] = None,
  min_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive">case_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Evaluate the value as case sensitive. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Only evaluate this condition if the value has a minimum amount of characters. |

---

##### `case_sensitive`<sup>Optional</sup> <a name="case_sensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive"></a>

```python
case_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Evaluate the value as case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#case_sensitive AppsecWafCustomRule#case_sensitive}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Only evaluate this condition if the value has a minimum amount of characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#min_length AppsecWafCustomRule#min_length}

---

### AppsecWafCustomRuleConfig <a name="AppsecWafCustomRuleConfig" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blocking: typing.Union[bool, IResolvable],
  enabled: typing.Union[bool, IResolvable],
  name: str,
  tags: typing.Mapping[str],
  action: AppsecWafCustomRuleAction = None,
  condition: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleCondition]] = None,
  path_glob: str = None,
  scope: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleScope]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking">blocking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the WAF custom rule will block the request. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the WAF custom rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name">name</a></code> | <code>str</code> | The Name of the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags associated with the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob">path_glob</a></code> | <code>str</code> | The path glob for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]</code> | scope block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blocking`<sup>Required</sup> <a name="blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking"></a>

```python
blocking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the WAF custom rule will block the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#blocking AppsecWafCustomRule#blocking}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the WAF custom rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#enabled AppsecWafCustomRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Name of the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#name AppsecWafCustomRule#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Tags associated with the WAF custom rule.

`category` and `type` tags are required. Supported categories include `business_logic`, `attack_attempt` and `security_response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#tags AppsecWafCustomRule#tags}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action"></a>

```python
action: AppsecWafCustomRuleAction
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#condition AppsecWafCustomRule#condition}

---

##### `path_glob`<sup>Optional</sup> <a name="path_glob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob"></a>

```python
path_glob: str
```

- *Type:* str

The path glob for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#path_glob AppsecWafCustomRule#path_glob}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope"></a>

```python
scope: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#scope AppsecWafCustomRule#scope}

---

### AppsecWafCustomRuleScope <a name="AppsecWafCustomRuleScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleScope(
  env: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env">env</a></code> | <code>str</code> | The environment scope for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service">service</a></code> | <code>str</code> | The service scope for the WAF custom rule. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env"></a>

```python
env: str
```

- *Type:* str

The environment scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#env AppsecWafCustomRule#env}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service"></a>

```python
service: str
```

- *Type:* str

The service scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#service AppsecWafCustomRule#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafCustomRuleActionOutputReference <a name="AppsecWafCustomRuleActionOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters"></a>

```python
def put_parameters(
  location: str = None,
  status_code: typing.Union[int, float] = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters.parameter.location"></a>

- *Type:* str

The location to redirect to when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#location AppsecWafCustomRule#location}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters.parameter.statusCode"></a>

- *Type:* typing.Union[int, float]

The status code to return when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#status_code AppsecWafCustomRule#status_code}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters"></a>

```python
parameters: AppsecWafCustomRuleActionParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, AppsecWafCustomRuleActionParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>]

---


### AppsecWafCustomRuleActionParametersOutputReference <a name="AppsecWafCustomRuleActionParametersOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleActionParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>]

---


### AppsecWafCustomRuleConditionList <a name="AppsecWafCustomRuleConditionList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsecWafCustomRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]]

---


### AppsecWafCustomRuleConditionOutputReference <a name="AppsecWafCustomRuleConditionOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters"></a>

```python
def put_parameters(
  data: str = None,
  input: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleConditionParametersInput]] = None,
  list: typing.List[str] = None,
  options: AppsecWafCustomRuleConditionParametersOptions = None,
  regex: str = None,
  value: str = None
) -> None
```

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.data"></a>

- *Type:* str

Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#data AppsecWafCustomRule#data}

---

###### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.input"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#input AppsecWafCustomRule#input}

---

###### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.list"></a>

- *Type:* typing.List[str]

List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#list AppsecWafCustomRule#list}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#options AppsecWafCustomRule#options}

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.regex"></a>

- *Type:* str

Regex to use with the condition. Only used with match_regex and !match_regex operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#regex AppsecWafCustomRule#regex}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.value"></a>

- *Type:* str

Store the captured value in the specified tag name. Only used with the capture_data operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#value AppsecWafCustomRule#value}

---

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters"></a>

```python
parameters: AppsecWafCustomRuleConditionParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a>

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, AppsecWafCustomRuleConditionParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>]

---


### AppsecWafCustomRuleConditionParametersInputList <a name="AppsecWafCustomRuleConditionParametersInputList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsecWafCustomRuleConditionParametersInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleConditionParametersInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]

---


### AppsecWafCustomRuleConditionParametersInputOutputReference <a name="AppsecWafCustomRuleConditionParametersInputOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath">reset_key_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_key_path` <a name="reset_key_path" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath"></a>

```python
def reset_key_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput">key_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath">key_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `key_path_input`<sup>Optional</sup> <a name="key_path_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput"></a>

```python
key_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `key_path`<sup>Required</sup> <a name="key_path" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath"></a>

```python
key_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleConditionParametersInput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]

---


### AppsecWafCustomRuleConditionParametersOptionsOutputReference <a name="AppsecWafCustomRuleConditionParametersOptionsOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive">reset_case_sensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength">reset_min_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_case_sensitive` <a name="reset_case_sensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive"></a>

```python
def reset_case_sensitive() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength"></a>

```python
def reset_min_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput">case_sensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive">case_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_sensitive_input`<sup>Optional</sup> <a name="case_sensitive_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput"></a>

```python
case_sensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive"></a>

```python
case_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleConditionParametersOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>]

---


### AppsecWafCustomRuleConditionParametersOutputReference <a name="AppsecWafCustomRuleConditionParametersOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList">reset_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput"></a>

```python
def put_input(
  value: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleConditionParametersInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]

---

##### `put_options` <a name="put_options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions"></a>

```python
def put_options(
  case_sensitive: typing.Union[bool, IResolvable] = None,
  min_length: typing.Union[int, float] = None
) -> None
```

###### `case_sensitive`<sup>Optional</sup> <a name="case_sensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions.parameter.caseSensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Evaluate the value as case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#case_sensitive AppsecWafCustomRule#case_sensitive}

---

###### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Only evaluate this condition if the value has a minimum amount of characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/appsec_waf_custom_rule#min_length AppsecWafCustomRule#min_length}

---

##### `reset_data` <a name="reset_data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_list` <a name="reset_list" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList"></a>

```python
def reset_list() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput">input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput">list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list">list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input"></a>

```python
input: AppsecWafCustomRuleConditionParametersInputList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options"></a>

```python
options: AppsecWafCustomRuleConditionParametersOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput"></a>

```python
input_input: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleConditionParametersInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>]]

---

##### `list_input`<sup>Optional</sup> <a name="list_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput"></a>

```python
list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput"></a>

```python
options_input: typing.Union[IResolvable, AppsecWafCustomRuleConditionParametersOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>]

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list"></a>

```python
list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleConditionParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>]

---


### AppsecWafCustomRuleScopeList <a name="AppsecWafCustomRuleScopeList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsecWafCustomRuleScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsecWafCustomRuleScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]]

---


### AppsecWafCustomRuleScopeOutputReference <a name="AppsecWafCustomRuleScopeOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_custom_rule

appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_env` <a name="reset_env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput">env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env">env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput"></a>

```python
env_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env"></a>

```python
env: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafCustomRuleScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>]

---



