# `securityMonitoringRule` Submodule <a name="`securityMonitoringRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringRule <a name="SecurityMonitoringRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message: str,
  name: str,
  calculated_field: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField] = None,
  case: IResolvable | typing.List[SecurityMonitoringRuleCase] = None,
  enabled: bool | IResolvable = None,
  filter: IResolvable | typing.List[SecurityMonitoringRuleFilter] = None,
  group_signals_by: typing.List[str] = None,
  has_extended_title: bool | IResolvable = None,
  id: str = None,
  options: SecurityMonitoringRuleOptions = None,
  query: IResolvable | typing.List[SecurityMonitoringRuleQuery] = None,
  reference_tables: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables] = None,
  scheduling_options: SecurityMonitoringRuleSchedulingOptions = None,
  signal_query: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery] = None,
  tags: typing.List[str] = None,
  third_party_case: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase] = None,
  type: str = None,
  validate: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.message">message</a></code> | <code>str</code> | Message for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.calculatedField">calculated_field</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | calculated_field block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.case">case</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.groupSignalsBy">group_signals_by</a></code> | <code>typing.List[str]</code> | Additional grouping to perform on top of the query grouping. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.hasExtendedTitle">has_extended_title</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.query">query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.referenceTables">reference_tables</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | reference_tables block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.signalQuery">signal_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | signal_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.thirdPartyCase">third_party_case</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | third_party_case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.type">type</a></code> | <code>str</code> | The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.validate">validate</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not to validate the Rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.message"></a>

- *Type:* str

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `calculated_field`<sup>Optional</sup> <a name="calculated_field" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.calculatedField"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

calculated_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.case"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.filter"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `group_signals_by`<sup>Optional</sup> <a name="group_signals_by" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.groupSignalsBy"></a>

- *Type:* typing.List[str]

Additional grouping to perform on top of the query grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}

---

##### `has_extended_title`<sup>Optional</sup> <a name="has_extended_title" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.hasExtendedTitle"></a>

- *Type:* bool | cdktf.IResolvable

Whether the notifications include the triggering group-by values in their title. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.query"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `reference_tables`<sup>Optional</sup> <a name="reference_tables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.referenceTables"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

reference_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}

---

##### `scheduling_options`<sup>Optional</sup> <a name="scheduling_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.schedulingOptions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}

---

##### `signal_query`<sup>Optional</sup> <a name="signal_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.signalQuery"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags for generated signals.

Note: if default tags are present at provider level, they will be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `third_party_case`<sup>Optional</sup> <a name="third_party_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.thirdPartyCase"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

third_party_case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.type"></a>

- *Type:* str

The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.validate"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not to validate the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField">put_calculated_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase">put_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables">put_reference_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions">put_scheduling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery">put_signal_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase">put_third_party_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField">reset_calculated_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase">reset_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy">reset_group_signals_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle">reset_has_extended_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables">reset_reference_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions">reset_scheduling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery">reset_signal_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase">reset_third_party_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_calculated_field` <a name="put_calculated_field" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField"></a>

```python
def put_calculated_field(
  value: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

---

##### `put_case` <a name="put_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase"></a>

```python
def put_case(
  value: IResolvable | typing.List[SecurityMonitoringRuleCase]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[SecurityMonitoringRuleFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

---

##### `put_options` <a name="put_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions"></a>

```python
def put_options(
  decrease_criticality_based_on_env: bool | IResolvable = None,
  detection_method: str = None,
  evaluation_window: typing.Union[int, float] = None,
  impossible_travel_options: SecurityMonitoringRuleOptionsImpossibleTravelOptions = None,
  keep_alive: typing.Union[int, float] = None,
  max_signal_duration: typing.Union[int, float] = None,
  new_value_options: SecurityMonitoringRuleOptionsNewValueOptions = None,
  third_party_rule_options: SecurityMonitoringRuleOptionsThirdPartyRuleOptions = None
) -> None
```

###### `decrease_criticality_based_on_env`<sup>Optional</sup> <a name="decrease_criticality_based_on_env" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.decreaseCriticalityBasedOnEnv"></a>

- *Type:* bool | cdktf.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}

---

###### `detection_method`<sup>Optional</sup> <a name="detection_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.detectionMethod"></a>

- *Type:* str

The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}

---

###### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.evaluationWindow"></a>

- *Type:* typing.Union[int, float]

A time window is specified to match when at least one of the cases matches true.

This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

###### `impossible_travel_options`<sup>Optional</sup> <a name="impossible_travel_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.impossibleTravelOptions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

impossible_travel_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}

---

###### `keep_alive`<sup>Optional</sup> <a name="keep_alive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.keepAlive"></a>

- *Type:* typing.Union[int, float]

Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds).

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}

---

###### `max_signal_duration`<sup>Optional</sup> <a name="max_signal_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.maxSignalDuration"></a>

- *Type:* typing.Union[int, float]

A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds).

This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}

---

###### `new_value_options`<sup>Optional</sup> <a name="new_value_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.newValueOptions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

new_value_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}

---

###### `third_party_rule_options`<sup>Optional</sup> <a name="third_party_rule_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.thirdPartyRuleOptions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

third_party_rule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}

---

##### `put_query` <a name="put_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery"></a>

```python
def put_query(
  value: IResolvable | typing.List[SecurityMonitoringRuleQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

---

##### `put_reference_tables` <a name="put_reference_tables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables"></a>

```python
def put_reference_tables(
  value: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

---

##### `put_scheduling_options` <a name="put_scheduling_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions"></a>

```python
def put_scheduling_options(
  rrule: str,
  start: str,
  timezone: str
) -> None
```

###### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions.parameter.rrule"></a>

- *Type:* str

Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rrule SecurityMonitoringRule#rrule}

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions.parameter.start"></a>

- *Type:* str

Start date for the schedule, in ISO 8601 format without timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#start SecurityMonitoringRule#start}

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions.parameter.timezone"></a>

- *Type:* str

Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#timezone SecurityMonitoringRule#timezone}

---

##### `put_signal_query` <a name="put_signal_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery"></a>

```python
def put_signal_query(
  value: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

---

##### `put_third_party_case` <a name="put_third_party_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase"></a>

```python
def put_third_party_case(
  value: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

---

##### `reset_calculated_field` <a name="reset_calculated_field" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField"></a>

```python
def reset_calculated_field() -> None
```

##### `reset_case` <a name="reset_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase"></a>

```python
def reset_case() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_signals_by` <a name="reset_group_signals_by" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy"></a>

```python
def reset_group_signals_by() -> None
```

##### `reset_has_extended_title` <a name="reset_has_extended_title" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle"></a>

```python
def reset_has_extended_title() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_reference_tables` <a name="reset_reference_tables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables"></a>

```python
def reset_reference_tables() -> None
```

##### `reset_scheduling_options` <a name="reset_scheduling_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions"></a>

```python
def reset_scheduling_options() -> None
```

##### `reset_signal_query` <a name="reset_signal_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery"></a>

```python
def reset_signal_query() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_third_party_case` <a name="reset_third_party_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase"></a>

```python
def reset_third_party_case() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate"></a>

```python
def reset_validate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityMonitoringRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField">calculated_field</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case">case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query">query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables">reference_tables</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference">SecurityMonitoringRuleSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery">signal_query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase">third_party_case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput">calculated_field_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput">case_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput">group_signals_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput">has_extended_title_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput">query_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput">reference_tables_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput">scheduling_options_input</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput">signal_query_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput">third_party_case_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput">validate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy">group_signals_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle">has_extended_title</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate">validate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `calculated_field`<sup>Required</sup> <a name="calculated_field" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField"></a>

```python
calculated_field: SecurityMonitoringRuleCalculatedFieldList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case"></a>

```python
case: SecurityMonitoringRuleCaseList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter"></a>

```python
filter: SecurityMonitoringRuleFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options"></a>

```python
options: SecurityMonitoringRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query"></a>

```python
query: SecurityMonitoringRuleQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a>

---

##### `reference_tables`<sup>Required</sup> <a name="reference_tables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables"></a>

```python
reference_tables: SecurityMonitoringRuleReferenceTablesList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a>

---

##### `scheduling_options`<sup>Required</sup> <a name="scheduling_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions"></a>

```python
scheduling_options: SecurityMonitoringRuleSchedulingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference">SecurityMonitoringRuleSchedulingOptionsOutputReference</a>

---

##### `signal_query`<sup>Required</sup> <a name="signal_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery"></a>

```python
signal_query: SecurityMonitoringRuleSignalQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a>

---

##### `third_party_case`<sup>Required</sup> <a name="third_party_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase"></a>

```python
third_party_case: SecurityMonitoringRuleThirdPartyCaseList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a>

---

##### `calculated_field_input`<sup>Optional</sup> <a name="calculated_field_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput"></a>

```python
calculated_field_input: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

---

##### `case_input`<sup>Optional</sup> <a name="case_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput"></a>

```python
case_input: IResolvable | typing.List[SecurityMonitoringRuleCase]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[SecurityMonitoringRuleFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

---

##### `group_signals_by_input`<sup>Optional</sup> <a name="group_signals_by_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput"></a>

```python
group_signals_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_extended_title_input`<sup>Optional</sup> <a name="has_extended_title_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput"></a>

```python
has_extended_title_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput"></a>

```python
options_input: SecurityMonitoringRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput"></a>

```python
query_input: IResolvable | typing.List[SecurityMonitoringRuleQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

---

##### `reference_tables_input`<sup>Optional</sup> <a name="reference_tables_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput"></a>

```python
reference_tables_input: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

---

##### `scheduling_options_input`<sup>Optional</sup> <a name="scheduling_options_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput"></a>

```python
scheduling_options_input: SecurityMonitoringRuleSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---

##### `signal_query_input`<sup>Optional</sup> <a name="signal_query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput"></a>

```python
signal_query_input: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `third_party_case_input`<sup>Optional</sup> <a name="third_party_case_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput"></a>

```python
third_party_case_input: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput"></a>

```python
validate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `group_signals_by`<sup>Required</sup> <a name="group_signals_by" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy"></a>

```python
group_signals_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_extended_title`<sup>Required</sup> <a name="has_extended_title" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle"></a>

```python
has_extended_title: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate"></a>

```python
validate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringRuleCalculatedField <a name="SecurityMonitoringRuleCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCalculatedField(
  expression: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression">expression</a></code> | <code>str</code> | Expression. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name">name</a></code> | <code>str</code> | Field name. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression"></a>

```python
expression: str
```

- *Type:* str

Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name"></a>

```python
name: str
```

- *Type:* str

Field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleCase <a name="SecurityMonitoringRuleCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCase(
  status: str,
  action: IResolvable | typing.List[SecurityMonitoringRuleCaseAction] = None,
  condition: str = None,
  name: str = None,
  notifications: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status">status</a></code> | <code>str</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action">action</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]</code> | action block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition">condition</a></code> | <code>str</code> | A rule case contains logical operations (`>`,`>=`, `&&`, `\|\|`) to determine if a signal should be generated based on the event counts in the previously defined queries. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name">name</a></code> | <code>str</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | Notification targets for each rule case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status"></a>

```python
status: str
```

- *Type:* str

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action"></a>

```python
action: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition"></a>

```python
condition: str
```

- *Type:* str

A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

### SecurityMonitoringRuleCaseAction <a name="SecurityMonitoringRuleCaseAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseAction(
  type: str,
  options: SecurityMonitoringRuleCaseActionOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type">type</a></code> | <code>str</code> | Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | options block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type"></a>

```python
type: str
```

- *Type:* str

Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options"></a>

```python
options: SecurityMonitoringRuleCaseActionOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

### SecurityMonitoringRuleCaseActionOptions <a name="SecurityMonitoringRuleCaseActionOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions(
  duration: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Duration of the action in seconds. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration of the action in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#duration SecurityMonitoringRule#duration}

---

### SecurityMonitoringRuleConfig <a name="SecurityMonitoringRuleConfig" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message: str,
  name: str,
  calculated_field: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField] = None,
  case: IResolvable | typing.List[SecurityMonitoringRuleCase] = None,
  enabled: bool | IResolvable = None,
  filter: IResolvable | typing.List[SecurityMonitoringRuleFilter] = None,
  group_signals_by: typing.List[str] = None,
  has_extended_title: bool | IResolvable = None,
  id: str = None,
  options: SecurityMonitoringRuleOptions = None,
  query: IResolvable | typing.List[SecurityMonitoringRuleQuery] = None,
  reference_tables: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables] = None,
  scheduling_options: SecurityMonitoringRuleSchedulingOptions = None,
  signal_query: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery] = None,
  tags: typing.List[str] = None,
  third_party_case: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase] = None,
  type: str = None,
  validate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message">message</a></code> | <code>str</code> | Message for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField">calculated_field</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | calculated_field block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case">case</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy">group_signals_by</a></code> | <code>typing.List[str]</code> | Additional grouping to perform on top of the query grouping. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle">has_extended_title</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query">query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables">reference_tables</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | reference_tables block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery">signal_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | signal_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase">third_party_case</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | third_party_case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type">type</a></code> | <code>str</code> | The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate">validate</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not to validate the Rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message"></a>

```python
message: str
```

- *Type:* str

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `calculated_field`<sup>Optional</sup> <a name="calculated_field" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField"></a>

```python
calculated_field: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

calculated_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case"></a>

```python
case: IResolvable | typing.List[SecurityMonitoringRuleCase]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[SecurityMonitoringRuleFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `group_signals_by`<sup>Optional</sup> <a name="group_signals_by" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy"></a>

```python
group_signals_by: typing.List[str]
```

- *Type:* typing.List[str]

Additional grouping to perform on top of the query grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}

---

##### `has_extended_title`<sup>Optional</sup> <a name="has_extended_title" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle"></a>

```python
has_extended_title: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the notifications include the triggering group-by values in their title. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options"></a>

```python
options: SecurityMonitoringRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query"></a>

```python
query: IResolvable | typing.List[SecurityMonitoringRuleQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `reference_tables`<sup>Optional</sup> <a name="reference_tables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables"></a>

```python
reference_tables: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

reference_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}

---

##### `scheduling_options`<sup>Optional</sup> <a name="scheduling_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions"></a>

```python
scheduling_options: SecurityMonitoringRuleSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}

---

##### `signal_query`<sup>Optional</sup> <a name="signal_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery"></a>

```python
signal_query: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags for generated signals.

Note: if default tags are present at provider level, they will be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `third_party_case`<sup>Optional</sup> <a name="third_party_case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase"></a>

```python
third_party_case: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

third_party_case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate"></a>

```python
validate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not to validate the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}

---

### SecurityMonitoringRuleFilter <a name="SecurityMonitoringRuleFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleFilter(
  action: str,
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action">action</a></code> | <code>str</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query">query</a></code> | <code>str</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action"></a>

```python
action: str
```

- *Type:* str

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query"></a>

```python
query: str
```

- *Type:* str

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

### SecurityMonitoringRuleOptions <a name="SecurityMonitoringRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptions(
  decrease_criticality_based_on_env: bool | IResolvable = None,
  detection_method: str = None,
  evaluation_window: typing.Union[int, float] = None,
  impossible_travel_options: SecurityMonitoringRuleOptionsImpossibleTravelOptions = None,
  keep_alive: typing.Union[int, float] = None,
  max_signal_duration: typing.Union[int, float] = None,
  new_value_options: SecurityMonitoringRuleOptionsNewValueOptions = None,
  third_party_rule_options: SecurityMonitoringRuleOptionsThirdPartyRuleOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv">decrease_criticality_based_on_env</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod">detection_method</a></code> | <code>str</code> | The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | A time window is specified to match when at least one of the cases matches true. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions">impossible_travel_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | impossible_travel_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive">keep_alive</a></code> | <code>typing.Union[int, float]</code> | Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration">max_signal_duration</a></code> | <code>typing.Union[int, float]</code> | A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions">new_value_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | new_value_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions">third_party_rule_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | third_party_rule_options block. |

---

##### `decrease_criticality_based_on_env`<sup>Optional</sup> <a name="decrease_criticality_based_on_env" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```python
decrease_criticality_based_on_env: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}

---

##### `detection_method`<sup>Optional</sup> <a name="detection_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod"></a>

```python
detection_method: str
```

- *Type:* str

The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A time window is specified to match when at least one of the cases matches true.

This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

##### `impossible_travel_options`<sup>Optional</sup> <a name="impossible_travel_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions"></a>

```python
impossible_travel_options: SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

impossible_travel_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}

---

##### `keep_alive`<sup>Optional</sup> <a name="keep_alive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive"></a>

```python
keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds).

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}

---

##### `max_signal_duration`<sup>Optional</sup> <a name="max_signal_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration"></a>

```python
max_signal_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds).

This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}

---

##### `new_value_options`<sup>Optional</sup> <a name="new_value_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions"></a>

```python
new_value_options: SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

new_value_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}

---

##### `third_party_rule_options`<sup>Optional</sup> <a name="third_party_rule_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions"></a>

```python
third_party_rule_options: SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

third_party_rule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}

---

### SecurityMonitoringRuleOptionsImpossibleTravelOptions <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions(
  baseline_user_locations: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations">baseline_user_locations</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, signals are suppressed for the first 24 hours. |

---

##### `baseline_user_locations`<sup>Optional</sup> <a name="baseline_user_locations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations"></a>

```python
baseline_user_locations: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, signals are suppressed for the first 24 hours.

During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}

---

### SecurityMonitoringRuleOptionsNewValueOptions <a name="SecurityMonitoringRuleOptionsNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions(
  forget_after: typing.Union[int, float],
  learning_duration: typing.Union[int, float] = None,
  learning_method: str = None,
  learning_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter">forget_after</a></code> | <code>typing.Union[int, float]</code> | The duration in days after which a learned value is forgotten. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod">learning_method</a></code> | <code>str</code> | The learning method used to determine when signals should be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold">learning_threshold</a></code> | <code>typing.Union[int, float]</code> | A number of occurrences after which signals are generated for values that weren't learned. |

---

##### `forget_after`<sup>Required</sup> <a name="forget_after" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter"></a>

```python
forget_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in days after which a learned value is forgotten.

Valid values are `1`, `2`, `7`, `14`, `21`, `28`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}

---

##### `learning_duration`<sup>Optional</sup> <a name="learning_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in days during which values are learned, and after which signals will be generated for values that weren't learned.

If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

##### `learning_method`<sup>Optional</sup> <a name="learning_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod"></a>

```python
learning_method: str
```

- *Type:* str

The learning method used to determine when signals should be generated for values that weren't learned.

Valid values are `duration`, `threshold`. Defaults to `"duration"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}

---

##### `learning_threshold`<sup>Optional</sup> <a name="learning_threshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold"></a>

```python
learning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A number of occurrences after which signals are generated for values that weren't learned.

Valid values are `0`, `1`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptions <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions(
  default_status: str,
  root_query: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery],
  default_notifications: typing.List[str] = None,
  signal_title_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus">default_status</a></code> | <code>str</code> | Severity of the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery">root_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]</code> | root_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications">default_notifications</a></code> | <code>typing.List[str]</code> | Notification targets for the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate">signal_title_template</a></code> | <code>str</code> | A template for the signal title; if omitted, the title is generated based on the case name. |

---

##### `default_status`<sup>Required</sup> <a name="default_status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus"></a>

```python
default_status: str
```

- *Type:* str

Severity of the default rule case, when none of the third-party cases match.

Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}

---

##### `root_query`<sup>Required</sup> <a name="root_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery"></a>

```python
root_query: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

root_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}

---

##### `default_notifications`<sup>Optional</sup> <a name="default_notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications"></a>

```python
default_notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for the default rule case, when none of the third-party cases match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}

---

##### `signal_title_template`<sup>Optional</sup> <a name="signal_title_template" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate"></a>

```python
signal_title_template: str
```

- *Type:* str

A template for the signal title; if omitted, the title is generated based on the case name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery(
  query: str,
  group_by_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query">query</a></code> | <code>str</code> | Query to filter logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | Fields to group by. If empty, each log triggers a signal. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query"></a>

```python
query: str
```

- *Type:* str

Query to filter logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields to group by. If empty, each log triggers a signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

### SecurityMonitoringRuleQuery <a name="SecurityMonitoringRuleQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQuery(
  query: str,
  agent_rule: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule] = None,
  aggregation: str = None,
  data_source: str = None,
  distinct_fields: typing.List[str] = None,
  group_by_fields: typing.List[str] = None,
  has_optional_group_by_fields: bool | IResolvable = None,
  indexes: typing.List[str] = None,
  metric: str = None,
  metrics: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query">query</a></code> | <code>str</code> | Query to run on logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule">agent_rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]</code> | agent_rule block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation">aggregation</a></code> | <code>str</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource">data_source</a></code> | <code>str</code> | Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. Defaults to `"logs"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields">distinct_fields</a></code> | <code>typing.List[str]</code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | Fields to group by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields">has_optional_group_by_fields</a></code> | <code>bool \| cdktf.IResolvable</code> | When false, events without a group-by value are ignored by the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes">indexes</a></code> | <code>typing.List[str]</code> | List of indexes to run the query on when the data source is `logs`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric">metric</a></code> | <code>str</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name">name</a></code> | <code>str</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query"></a>

```python
query: str
```

- *Type:* str

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `agent_rule`<sup>Optional</sup> <a name="agent_rule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule"></a>

```python
agent_rule: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. Defaults to `"logs"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#data_source SecurityMonitoringRule#data_source}

---

##### `distinct_fields`<sup>Optional</sup> <a name="distinct_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields"></a>

```python
distinct_fields: typing.List[str]
```

- *Type:* typing.List[str]

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

##### `has_optional_group_by_fields`<sup>Optional</sup> <a name="has_optional_group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields"></a>

```python
has_optional_group_by_fields: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When false, events without a group-by value are ignored by the rule.

When true, events with missing group-by fields are processed with `N/A`, replacing the missing values. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_optional_group_by_fields SecurityMonitoringRule#has_optional_group_by_fields}

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes"></a>

```python
indexes: typing.List[str]
```

- *Type:* typing.List[str]

List of indexes to run the query on when the data source is `logs`.

Supports only one element. Used only for scheduled rules (in other words, when `scheduling_options` is defined).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#indexes SecurityMonitoringRule#indexes}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric"></a>

```python
metric: str
```

- *Type:* str

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

**Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleQueryAgentRule <a name="SecurityMonitoringRuleQueryAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule(
  agent_rule_id: str,
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId">agent_rule_id</a></code> | <code>str</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression">expression</a></code> | <code>str</code> | **Deprecated**. It won't be applied anymore. |

---

##### `agent_rule_id`<sup>Required</sup> <a name="agent_rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId"></a>

```python
agent_rule_id: str
```

- *Type:* str

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

### SecurityMonitoringRuleReferenceTables <a name="SecurityMonitoringRuleReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleReferenceTables(
  check_presence: bool | IResolvable,
  column_name: str,
  log_field_path: str,
  rule_query_name: str,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence">check_presence</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to include or exclude logs that match the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName">column_name</a></code> | <code>str</code> | The name of the column in the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath">log_field_path</a></code> | <code>str</code> | The field in the log that should be matched against the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName">rule_query_name</a></code> | <code>str</code> | The name of the query to filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName">table_name</a></code> | <code>str</code> | The name of the reference table. |

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence"></a>

```python
check_presence: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to include or exclude logs that match the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#check_presence SecurityMonitoringRule#check_presence}

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

The name of the column in the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#column_name SecurityMonitoringRule#column_name}

---

##### `log_field_path`<sup>Required</sup> <a name="log_field_path" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath"></a>

```python
log_field_path: str
```

- *Type:* str

The field in the log that should be matched against the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#log_field_path SecurityMonitoringRule#log_field_path}

---

##### `rule_query_name`<sup>Required</sup> <a name="rule_query_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName"></a>

```python
rule_query_name: str
```

- *Type:* str

The name of the query to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rule_query_name SecurityMonitoringRule#rule_query_name}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#table_name SecurityMonitoringRule#table_name}

---

### SecurityMonitoringRuleSchedulingOptions <a name="SecurityMonitoringRuleSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions(
  rrule: str,
  start: str,
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule">rrule</a></code> | <code>str</code> | Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start">start</a></code> | <code>str</code> | Start date for the schedule, in ISO 8601 format without timezone. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone">timezone</a></code> | <code>str</code> | Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. |

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rrule SecurityMonitoringRule#rrule}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start"></a>

```python
start: str
```

- *Type:* str

Start date for the schedule, in ISO 8601 format without timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#start SecurityMonitoringRule#start}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#timezone SecurityMonitoringRule#timezone}

---

### SecurityMonitoringRuleSignalQuery <a name="SecurityMonitoringRuleSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSignalQuery(
  rule_id: str,
  aggregation: str = None,
  correlated_by_fields: typing.List[str] = None,
  correlated_query_index: str = None,
  default_rule_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId">rule_id</a></code> | <code>str</code> | Rule ID of the signal to correlate. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation">aggregation</a></code> | <code>str</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields">correlated_by_fields</a></code> | <code>typing.List[str]</code> | Fields to correlate by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex">correlated_query_index</a></code> | <code>str</code> | Index of the rule query used to retrieve the correlated field. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId">default_rule_id</a></code> | <code>str</code> | Default Rule ID of the signal to correlate. This value is READ-ONLY. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name">name</a></code> | <code>str</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Rule ID of the signal to correlate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"event_count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `correlated_by_fields`<sup>Optional</sup> <a name="correlated_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields"></a>

```python
correlated_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields to correlate by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}

---

##### `correlated_query_index`<sup>Optional</sup> <a name="correlated_query_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex"></a>

```python
correlated_query_index: str
```

- *Type:* str

Index of the rule query used to retrieve the correlated field.

An empty string applies correlation on the non-projected per query attributes of the rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}

---

##### `default_rule_id`<sup>Optional</sup> <a name="default_rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId"></a>

```python
default_rule_id: str
```

- *Type:* str

Default Rule ID of the signal to correlate. This value is READ-ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_rule_id SecurityMonitoringRule#default_rule_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleThirdPartyCase <a name="SecurityMonitoringRuleThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase(
  status: str,
  name: str = None,
  notifications: typing.List[str] = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status">status</a></code> | <code>str</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name">name</a></code> | <code>str</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | Notification targets for each rule case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query">query</a></code> | <code>str</code> | A query to associate a third-party event to this case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status"></a>

```python
status: str
```

- *Type:* str

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query"></a>

```python
query: str
```

- *Type:* str

A query to associate a third-party event to this case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringRuleCalculatedFieldList <a name="SecurityMonitoringRuleCalculatedFieldList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCalculatedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

---


### SecurityMonitoringRuleCalculatedFieldOutputReference <a name="SecurityMonitoringRuleCalculatedFieldOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCalculatedField
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>

---


### SecurityMonitoringRuleCaseActionList <a name="SecurityMonitoringRuleCaseActionList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCaseActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

---


### SecurityMonitoringRuleCaseActionOptionsOutputReference <a name="SecurityMonitoringRuleCaseActionOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityMonitoringRuleCaseActionOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---


### SecurityMonitoringRuleCaseActionOutputReference <a name="SecurityMonitoringRuleCaseActionOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_options` <a name="put_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions"></a>

```python
def put_options(
  duration: typing.Union[int, float] = None
) -> None
```

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Duration of the action in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#duration SecurityMonitoringRule#duration}

---

##### `reset_options` <a name="reset_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference">SecurityMonitoringRuleCaseActionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options"></a>

```python
options: SecurityMonitoringRuleCaseActionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference">SecurityMonitoringRuleCaseActionOptionsOutputReference</a>

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput"></a>

```python
options_input: SecurityMonitoringRuleCaseActionOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCaseAction
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>

---


### SecurityMonitoringRuleCaseList <a name="SecurityMonitoringRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCase]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

---


### SecurityMonitoringRuleCaseOutputReference <a name="SecurityMonitoringRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications">reset_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction"></a>

```python
def put_action(
  value: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications"></a>

```python
def reset_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput">action_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput">notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action"></a>

```python
action: SecurityMonitoringRuleCaseActionList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput"></a>

```python
notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCase
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>

---


### SecurityMonitoringRuleFilterList <a name="SecurityMonitoringRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleFilter]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

---


### SecurityMonitoringRuleFilterOutputReference <a name="SecurityMonitoringRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>

---


### SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations">reset_baseline_user_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_baseline_user_locations` <a name="reset_baseline_user_locations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations"></a>

```python
def reset_baseline_user_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput">baseline_user_locations_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations">baseline_user_locations</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_user_locations_input`<sup>Optional</sup> <a name="baseline_user_locations_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput"></a>

```python
baseline_user_locations_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `baseline_user_locations`<sup>Required</sup> <a name="baseline_user_locations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations"></a>

```python
baseline_user_locations: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---


### SecurityMonitoringRuleOptionsNewValueOptionsOutputReference <a name="SecurityMonitoringRuleOptionsNewValueOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration">reset_learning_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod">reset_learning_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold">reset_learning_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_learning_duration` <a name="reset_learning_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration"></a>

```python
def reset_learning_duration() -> None
```

##### `reset_learning_method` <a name="reset_learning_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod"></a>

```python
def reset_learning_method() -> None
```

##### `reset_learning_threshold` <a name="reset_learning_threshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold"></a>

```python
def reset_learning_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput">forget_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput">learning_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput">learning_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput">learning_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter">forget_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod">learning_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold">learning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forget_after_input`<sup>Optional</sup> <a name="forget_after_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput"></a>

```python
forget_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_duration_input`<sup>Optional</sup> <a name="learning_duration_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput"></a>

```python
learning_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_method_input`<sup>Optional</sup> <a name="learning_method_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput"></a>

```python
learning_method_input: str
```

- *Type:* str

---

##### `learning_threshold_input`<sup>Optional</sup> <a name="learning_threshold_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput"></a>

```python
learning_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forget_after`<sup>Required</sup> <a name="forget_after" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter"></a>

```python
forget_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_duration`<sup>Required</sup> <a name="learning_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_method`<sup>Required</sup> <a name="learning_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod"></a>

```python
learning_method: str
```

- *Type:* str

---

##### `learning_threshold`<sup>Required</sup> <a name="learning_threshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold"></a>

```python
learning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---


### SecurityMonitoringRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions">put_impossible_travel_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions">put_new_value_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions">put_third_party_rule_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">reset_decrease_criticality_based_on_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod">reset_detection_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow">reset_evaluation_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions">reset_impossible_travel_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive">reset_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration">reset_max_signal_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions">reset_new_value_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions">reset_third_party_rule_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_impossible_travel_options` <a name="put_impossible_travel_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions"></a>

```python
def put_impossible_travel_options(
  baseline_user_locations: bool | IResolvable = None
) -> None
```

###### `baseline_user_locations`<sup>Optional</sup> <a name="baseline_user_locations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions.parameter.baselineUserLocations"></a>

- *Type:* bool | cdktf.IResolvable

If true, signals are suppressed for the first 24 hours.

During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}

---

##### `put_new_value_options` <a name="put_new_value_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions"></a>

```python
def put_new_value_options(
  forget_after: typing.Union[int, float],
  learning_duration: typing.Union[int, float] = None,
  learning_method: str = None,
  learning_threshold: typing.Union[int, float] = None
) -> None
```

###### `forget_after`<sup>Required</sup> <a name="forget_after" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.forgetAfter"></a>

- *Type:* typing.Union[int, float]

The duration in days after which a learned value is forgotten.

Valid values are `1`, `2`, `7`, `14`, `21`, `28`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}

---

###### `learning_duration`<sup>Optional</sup> <a name="learning_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.learningDuration"></a>

- *Type:* typing.Union[int, float]

The duration in days during which values are learned, and after which signals will be generated for values that weren't learned.

If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

###### `learning_method`<sup>Optional</sup> <a name="learning_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.learningMethod"></a>

- *Type:* str

The learning method used to determine when signals should be generated for values that weren't learned.

Valid values are `duration`, `threshold`. Defaults to `"duration"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}

---

###### `learning_threshold`<sup>Optional</sup> <a name="learning_threshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.learningThreshold"></a>

- *Type:* typing.Union[int, float]

A number of occurrences after which signals are generated for values that weren't learned.

Valid values are `0`, `1`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}

---

##### `put_third_party_rule_options` <a name="put_third_party_rule_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions"></a>

```python
def put_third_party_rule_options(
  default_status: str,
  root_query: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery],
  default_notifications: typing.List[str] = None,
  signal_title_template: str = None
) -> None
```

###### `default_status`<sup>Required</sup> <a name="default_status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.defaultStatus"></a>

- *Type:* str

Severity of the default rule case, when none of the third-party cases match.

Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}

---

###### `root_query`<sup>Required</sup> <a name="root_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.rootQuery"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

root_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}

---

###### `default_notifications`<sup>Optional</sup> <a name="default_notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.defaultNotifications"></a>

- *Type:* typing.List[str]

Notification targets for the default rule case, when none of the third-party cases match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}

---

###### `signal_title_template`<sup>Optional</sup> <a name="signal_title_template" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.signalTitleTemplate"></a>

- *Type:* str

A template for the signal title; if omitted, the title is generated based on the case name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}

---

##### `reset_decrease_criticality_based_on_env` <a name="reset_decrease_criticality_based_on_env" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```python
def reset_decrease_criticality_based_on_env() -> None
```

##### `reset_detection_method` <a name="reset_detection_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod"></a>

```python
def reset_detection_method() -> None
```

##### `reset_evaluation_window` <a name="reset_evaluation_window" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow"></a>

```python
def reset_evaluation_window() -> None
```

##### `reset_impossible_travel_options` <a name="reset_impossible_travel_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions"></a>

```python
def reset_impossible_travel_options() -> None
```

##### `reset_keep_alive` <a name="reset_keep_alive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive"></a>

```python
def reset_keep_alive() -> None
```

##### `reset_max_signal_duration` <a name="reset_max_signal_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration"></a>

```python
def reset_max_signal_duration() -> None
```

##### `reset_new_value_options` <a name="reset_new_value_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions"></a>

```python
def reset_new_value_options() -> None
```

##### `reset_third_party_rule_options` <a name="reset_third_party_rule_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions"></a>

```python
def reset_third_party_rule_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions">impossible_travel_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions">new_value_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions">third_party_rule_options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">decrease_criticality_based_on_env_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput">detection_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput">evaluation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput">impossible_travel_options_input</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput">keep_alive_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput">max_signal_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput">new_value_options_input</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput">third_party_rule_options_input</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decrease_criticality_based_on_env</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod">detection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive">keep_alive</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration">max_signal_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `impossible_travel_options`<sup>Required</sup> <a name="impossible_travel_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions"></a>

```python
impossible_travel_options: SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a>

---

##### `new_value_options`<sup>Required</sup> <a name="new_value_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions"></a>

```python
new_value_options: SecurityMonitoringRuleOptionsNewValueOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a>

---

##### `third_party_rule_options`<sup>Required</sup> <a name="third_party_rule_options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions"></a>

```python
third_party_rule_options: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference</a>

---

##### `decrease_criticality_based_on_env_input`<sup>Optional</sup> <a name="decrease_criticality_based_on_env_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```python
decrease_criticality_based_on_env_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `detection_method_input`<sup>Optional</sup> <a name="detection_method_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput"></a>

```python
detection_method_input: str
```

- *Type:* str

---

##### `evaluation_window_input`<sup>Optional</sup> <a name="evaluation_window_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput"></a>

```python
evaluation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `impossible_travel_options_input`<sup>Optional</sup> <a name="impossible_travel_options_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput"></a>

```python
impossible_travel_options_input: SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `keep_alive_input`<sup>Optional</sup> <a name="keep_alive_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput"></a>

```python
keep_alive_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_signal_duration_input`<sup>Optional</sup> <a name="max_signal_duration_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput"></a>

```python
max_signal_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_value_options_input`<sup>Optional</sup> <a name="new_value_options_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput"></a>

```python
new_value_options_input: SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `third_party_rule_options_input`<sup>Optional</sup> <a name="third_party_rule_options_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput"></a>

```python
third_party_rule_options_input: SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---

##### `decrease_criticality_based_on_env`<sup>Required</sup> <a name="decrease_criticality_based_on_env" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```python
decrease_criticality_based_on_env: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `detection_method`<sup>Required</sup> <a name="detection_method" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod"></a>

```python
detection_method: str
```

- *Type:* str

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_alive`<sup>Required</sup> <a name="keep_alive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive"></a>

```python
keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_signal_duration`<sup>Required</sup> <a name="max_signal_duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration"></a>

```python
max_signal_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityMonitoringRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery">put_root_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications">reset_default_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate">reset_signal_title_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_root_query` <a name="put_root_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery"></a>

```python
def put_root_query(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

---

##### `reset_default_notifications` <a name="reset_default_notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications"></a>

```python
def reset_default_notifications() -> None
```

##### `reset_signal_title_template` <a name="reset_signal_title_template" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate"></a>

```python
def reset_signal_title_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery">root_query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput">default_notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput">default_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput">root_query_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput">signal_title_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications">default_notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus">default_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate">signal_title_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_query`<sup>Required</sup> <a name="root_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery"></a>

```python
root_query: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a>

---

##### `default_notifications_input`<sup>Optional</sup> <a name="default_notifications_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput"></a>

```python
default_notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_status_input`<sup>Optional</sup> <a name="default_status_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput"></a>

```python
default_status_input: str
```

- *Type:* str

---

##### `root_query_input`<sup>Optional</sup> <a name="root_query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput"></a>

```python
root_query_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

---

##### `signal_title_template_input`<sup>Optional</sup> <a name="signal_title_template_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput"></a>

```python
signal_title_template_input: str
```

- *Type:* str

---

##### `default_notifications`<sup>Required</sup> <a name="default_notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications"></a>

```python
default_notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_status`<sup>Required</sup> <a name="default_status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus"></a>

```python
default_status: str
```

- *Type:* str

---

##### `signal_title_template`<sup>Required</sup> <a name="signal_title_template" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate"></a>

```python
signal_title_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>

---


### SecurityMonitoringRuleQueryAgentRuleList <a name="SecurityMonitoringRuleQueryAgentRuleList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleQueryAgentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

---


### SecurityMonitoringRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringRuleQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">agent_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId">agent_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_rule_id_input`<sup>Optional</sup> <a name="agent_rule_id_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```python
agent_rule_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `agent_rule_id`<sup>Required</sup> <a name="agent_rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```python
agent_rule_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleQueryAgentRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>

---


### SecurityMonitoringRuleQueryList <a name="SecurityMonitoringRuleQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

---


### SecurityMonitoringRuleQueryOutputReference <a name="SecurityMonitoringRuleQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule">put_agent_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule">reset_agent_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields">reset_distinct_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields">reset_has_optional_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes">reset_indexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_rule` <a name="put_agent_rule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule"></a>

```python
def put_agent_rule(
  value: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

---

##### `reset_agent_rule` <a name="reset_agent_rule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule"></a>

```python
def reset_agent_rule() -> None
```

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_distinct_fields` <a name="reset_distinct_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields"></a>

```python
def reset_distinct_fields() -> None
```

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```

##### `reset_has_optional_group_by_fields` <a name="reset_has_optional_group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields"></a>

```python
def reset_has_optional_group_by_fields() -> None
```

##### `reset_indexes` <a name="reset_indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes"></a>

```python
def reset_indexes() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule">agent_rule</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput">agent_rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput">distinct_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput">has_optional_group_by_fields_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput">indexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput">metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields">distinct_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields">has_optional_group_by_fields</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes">indexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_rule`<sup>Required</sup> <a name="agent_rule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule"></a>

```python
agent_rule: SecurityMonitoringRuleQueryAgentRuleList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a>

---

##### `agent_rule_input`<sup>Optional</sup> <a name="agent_rule_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput"></a>

```python
agent_rule_input: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `distinct_fields_input`<sup>Optional</sup> <a name="distinct_fields_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput"></a>

```python
distinct_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_optional_group_by_fields_input`<sup>Optional</sup> <a name="has_optional_group_by_fields_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput"></a>

```python
has_optional_group_by_fields_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `indexes_input`<sup>Optional</sup> <a name="indexes_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput"></a>

```python
indexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput"></a>

```python
metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `distinct_fields`<sup>Required</sup> <a name="distinct_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields"></a>

```python
distinct_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_optional_group_by_fields`<sup>Required</sup> <a name="has_optional_group_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields"></a>

```python
has_optional_group_by_fields: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes"></a>

```python
indexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleQuery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>

---


### SecurityMonitoringRuleReferenceTablesList <a name="SecurityMonitoringRuleReferenceTablesList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleReferenceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

---


### SecurityMonitoringRuleReferenceTablesOutputReference <a name="SecurityMonitoringRuleReferenceTablesOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput">check_presence_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput">log_field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput">rule_query_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence">check_presence</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath">log_field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName">rule_query_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_presence_input`<sup>Optional</sup> <a name="check_presence_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput"></a>

```python
check_presence_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `log_field_path_input`<sup>Optional</sup> <a name="log_field_path_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput"></a>

```python
log_field_path_input: str
```

- *Type:* str

---

##### `rule_query_name_input`<sup>Optional</sup> <a name="rule_query_name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput"></a>

```python
rule_query_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence"></a>

```python
check_presence: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `log_field_path`<sup>Required</sup> <a name="log_field_path" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath"></a>

```python
log_field_path: str
```

- *Type:* str

---

##### `rule_query_name`<sup>Required</sup> <a name="rule_query_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName"></a>

```python
rule_query_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleReferenceTables
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>

---


### SecurityMonitoringRuleSchedulingOptionsOutputReference <a name="SecurityMonitoringRuleSchedulingOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityMonitoringRuleSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---


### SecurityMonitoringRuleSignalQueryList <a name="SecurityMonitoringRuleSignalQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSignalQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleSignalQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

---


### SecurityMonitoringRuleSignalQueryOutputReference <a name="SecurityMonitoringRuleSignalQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields">reset_correlated_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex">reset_correlated_query_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId">reset_default_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_correlated_by_fields` <a name="reset_correlated_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields"></a>

```python
def reset_correlated_by_fields() -> None
```

##### `reset_correlated_query_index` <a name="reset_correlated_query_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex"></a>

```python
def reset_correlated_query_index() -> None
```

##### `reset_default_rule_id` <a name="reset_default_rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId"></a>

```python
def reset_default_rule_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput">correlated_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput">correlated_query_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput">default_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields">correlated_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex">correlated_query_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId">default_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `correlated_by_fields_input`<sup>Optional</sup> <a name="correlated_by_fields_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput"></a>

```python
correlated_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `correlated_query_index_input`<sup>Optional</sup> <a name="correlated_query_index_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput"></a>

```python
correlated_query_index_input: str
```

- *Type:* str

---

##### `default_rule_id_input`<sup>Optional</sup> <a name="default_rule_id_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput"></a>

```python
default_rule_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `correlated_by_fields`<sup>Required</sup> <a name="correlated_by_fields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields"></a>

```python
correlated_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `correlated_query_index`<sup>Required</sup> <a name="correlated_query_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex"></a>

```python
correlated_query_index: str
```

- *Type:* str

---

##### `default_rule_id`<sup>Required</sup> <a name="default_rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId"></a>

```python
default_rule_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleSignalQuery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>

---


### SecurityMonitoringRuleThirdPartyCaseList <a name="SecurityMonitoringRuleThirdPartyCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleThirdPartyCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

---


### SecurityMonitoringRuleThirdPartyCaseOutputReference <a name="SecurityMonitoringRuleThirdPartyCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput">notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput"></a>

```python
notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleThirdPartyCase
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>

---



