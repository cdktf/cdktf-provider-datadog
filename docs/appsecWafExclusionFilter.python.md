# `appsecWafExclusionFilter` Submodule <a name="`appsecWafExclusionFilter` Submodule" id="@cdktf/provider-datadog.appsecWafExclusionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafExclusionFilter <a name="AppsecWafExclusionFilter" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter datadog_appsec_waf_exclusion_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  enabled: typing.Union[bool, IResolvable],
  event_query: str = None,
  ip_list: typing.List[str] = None,
  on_match: str = None,
  parameters: typing.List[str] = None,
  path_glob: str = None,
  rules_target: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterRulesTarget]] = None,
  scope: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterScope]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the exclusion filter is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.eventQuery">event_query</a></code> | <code>str</code> | The event query matched by the legacy exclusion filter. Cannot be created nor updated. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.ipList">ip_list</a></code> | <code>typing.List[str]</code> | The client IP addresses matched by the exclusion filter (CIDR notation is supported). |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.onMatch">on_match</a></code> | <code>str</code> | The action taken when the exclusion filter matches. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.parameters">parameters</a></code> | <code>typing.List[str]</code> | A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.pathGlob">path_glob</a></code> | <code>str</code> | The HTTP path glob expression matched by the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.rulesTarget">rules_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]</code> | rules_target block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]</code> | scope block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.description"></a>

- *Type:* str

A description for the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the exclusion filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}

---

##### `event_query`<sup>Optional</sup> <a name="event_query" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.eventQuery"></a>

- *Type:* str

The event query matched by the legacy exclusion filter. Cannot be created nor updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.ipList"></a>

- *Type:* typing.List[str]

The client IP addresses matched by the exclusion filter (CIDR notation is supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}

---

##### `on_match`<sup>Optional</sup> <a name="on_match" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.onMatch"></a>

- *Type:* str

The action taken when the exclusion filter matches.

When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.parameters"></a>

- *Type:* typing.List[str]

A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body.

Nested parameters can be matched by joining fields with a dot character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}

---

##### `path_glob`<sup>Optional</sup> <a name="path_glob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.pathGlob"></a>

- *Type:* str

The HTTP path glob expression matched by the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}

---

##### `rules_target`<sup>Optional</sup> <a name="rules_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.rulesTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]

rules_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget">put_rules_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery">reset_event_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch">reset_on_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob">reset_path_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget">reset_rules_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules_target` <a name="put_rules_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget"></a>

```python
def put_rules_target(
  value: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterRulesTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope"></a>

```python
def put_scope(
  value: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]

---

##### `reset_event_query` <a name="reset_event_query" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery"></a>

```python
def reset_event_query() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_on_match` <a name="reset_on_match" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch"></a>

```python
def reset_on_match() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_path_glob` <a name="reset_path_glob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob"></a>

```python
def reset_path_glob() -> None
```

##### `reset_rules_target` <a name="reset_rules_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget"></a>

```python
def reset_rules_target() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppsecWafExclusionFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsecWafExclusionFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsecWafExclusionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsecWafExclusionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget">rules_target</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput">event_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput">on_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput">parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput">path_glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput">rules_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery">event_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch">on_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters">parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob">path_glob</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rules_target`<sup>Required</sup> <a name="rules_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget"></a>

```python
rules_target: AppsecWafExclusionFilterRulesTargetList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope"></a>

```python
scope: AppsecWafExclusionFilterScopeList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_query_input`<sup>Optional</sup> <a name="event_query_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput"></a>

```python
event_query_input: str
```

- *Type:* str

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_match_input`<sup>Optional</sup> <a name="on_match_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput"></a>

```python
on_match_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput"></a>

```python
parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_glob_input`<sup>Optional</sup> <a name="path_glob_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput"></a>

```python
path_glob_input: str
```

- *Type:* str

---

##### `rules_target_input`<sup>Optional</sup> <a name="rules_target_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput"></a>

```python
rules_target_input: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterRulesTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_query`<sup>Required</sup> <a name="event_query" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery"></a>

```python
event_query: str
```

- *Type:* str

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `on_match`<sup>Required</sup> <a name="on_match" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch"></a>

```python
on_match: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters"></a>

```python
parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_glob`<sup>Required</sup> <a name="path_glob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob"></a>

```python
path_glob: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafExclusionFilterConfig <a name="AppsecWafExclusionFilterConfig" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  enabled: typing.Union[bool, IResolvable],
  event_query: str = None,
  ip_list: typing.List[str] = None,
  on_match: str = None,
  parameters: typing.List[str] = None,
  path_glob: str = None,
  rules_target: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterRulesTarget]] = None,
  scope: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterScope]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description">description</a></code> | <code>str</code> | A description for the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the exclusion filter is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery">event_query</a></code> | <code>str</code> | The event query matched by the legacy exclusion filter. Cannot be created nor updated. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | The client IP addresses matched by the exclusion filter (CIDR notation is supported). |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch">on_match</a></code> | <code>str</code> | The action taken when the exclusion filter matches. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters">parameters</a></code> | <code>typing.List[str]</code> | A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob">path_glob</a></code> | <code>str</code> | The HTTP path glob expression matched by the exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget">rules_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]</code> | rules_target block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]</code> | scope block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the exclusion filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}

---

##### `event_query`<sup>Optional</sup> <a name="event_query" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery"></a>

```python
event_query: str
```

- *Type:* str

The event query matched by the legacy exclusion filter. Cannot be created nor updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

The client IP addresses matched by the exclusion filter (CIDR notation is supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}

---

##### `on_match`<sup>Optional</sup> <a name="on_match" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch"></a>

```python
on_match: str
```

- *Type:* str

The action taken when the exclusion filter matches.

When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters"></a>

```python
parameters: typing.List[str]
```

- *Type:* typing.List[str]

A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body.

Nested parameters can be matched by joining fields with a dot character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}

---

##### `path_glob`<sup>Optional</sup> <a name="path_glob" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob"></a>

```python
path_glob: str
```

- *Type:* str

The HTTP path glob expression matched by the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}

---

##### `rules_target`<sup>Optional</sup> <a name="rules_target" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget"></a>

```python
rules_target: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterRulesTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]

rules_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope"></a>

```python
scope: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}

---

### AppsecWafExclusionFilterRulesTarget <a name="AppsecWafExclusionFilterRulesTarget" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget(
  rule_id: str = None,
  tags: AppsecWafExclusionFilterRulesTargetTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId">rule_id</a></code> | <code>str</code> | Target a single WAF rule based on its identifier. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | tags block. |

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Target a single WAF rule based on its identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#rule_id AppsecWafExclusionFilter#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags"></a>

```python
tags: AppsecWafExclusionFilterRulesTargetTags
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#tags AppsecWafExclusionFilter#tags}

---

### AppsecWafExclusionFilterRulesTargetTags <a name="AppsecWafExclusionFilterRulesTargetTags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags(
  category: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category">category</a></code> | <code>str</code> | The category of the targeted WAF rules. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type">type</a></code> | <code>str</code> | The type of the targeted WAF rules. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category"></a>

```python
category: str
```

- *Type:* str

The category of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#category AppsecWafExclusionFilter#category}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#type AppsecWafExclusionFilter#type}

---

### AppsecWafExclusionFilterScope <a name="AppsecWafExclusionFilterScope" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterScope(
  env: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env">env</a></code> | <code>str</code> | Deploy on this environment. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service">service</a></code> | <code>str</code> | Deploy on this service. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env"></a>

```python
env: str
```

- *Type:* str

Deploy on this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#env AppsecWafExclusionFilter#env}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service"></a>

```python
service: str
```

- *Type:* str

Deploy on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#service AppsecWafExclusionFilter#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafExclusionFilterRulesTargetList <a name="AppsecWafExclusionFilterRulesTargetList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsecWafExclusionFilterRulesTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterRulesTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]]

---


### AppsecWafExclusionFilterRulesTargetOutputReference <a name="AppsecWafExclusionFilterRulesTargetOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags"></a>

```python
def put_tags(
  category: str = None,
  type: str = None
) -> None
```

###### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags.parameter.category"></a>

- *Type:* str

The category of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#category AppsecWafExclusionFilter#category}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags.parameter.type"></a>

- *Type:* str

The type of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/appsec_waf_exclusion_filter#type AppsecWafExclusionFilter#type}

---

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags"></a>

```python
tags: AppsecWafExclusionFilterRulesTargetTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a>

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, AppsecWafExclusionFilterRulesTargetTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafExclusionFilterRulesTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>]

---


### AppsecWafExclusionFilterRulesTargetTagsOutputReference <a name="AppsecWafExclusionFilterRulesTargetTagsOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_category` <a name="reset_category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafExclusionFilterRulesTargetTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>]

---


### AppsecWafExclusionFilterScopeList <a name="AppsecWafExclusionFilterScopeList" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsecWafExclusionFilterScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsecWafExclusionFilterScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]]

---


### AppsecWafExclusionFilterScopeOutputReference <a name="AppsecWafExclusionFilterScopeOutputReference" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import appsec_waf_exclusion_filter

appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_env` <a name="reset_env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput">env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env">env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput"></a>

```python
env_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env"></a>

```python
env: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsecWafExclusionFilterScope]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>]

---



