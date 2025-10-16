# `customAllocationRule` Submodule <a name="`customAllocationRule` Submodule" id="@cdktf/provider-datadog.customAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAllocationRule <a name="CustomAllocationRule" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  providernames: typing.List[str],
  rule_name: str,
  costs_to_allocate: IResolvable | typing.List[CustomAllocationRuleCostsToAllocate] = None,
  strategy: CustomAllocationRuleStrategy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the custom allocation rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.providernames">providernames</a></code> | <code>typing.List[str]</code> | List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | The name of the custom allocation rule. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.costsToAllocate">costs_to_allocate</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]</code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the custom allocation rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#enabled CustomAllocationRule#enabled}

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.providernames"></a>

- *Type:* typing.List[str]

List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#providernames CustomAllocationRule#providernames}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.ruleName"></a>

- *Type:* str

The name of the custom allocation rule.

This field is immutable - changing it will force replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#rule_name CustomAllocationRule#rule_name}

---

##### `costs_to_allocate`<sup>Optional</sup> <a name="costs_to_allocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.costsToAllocate"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#costs_to_allocate CustomAllocationRule#costs_to_allocate}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#strategy CustomAllocationRule#strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate">put_costs_to_allocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy">put_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate">reset_costs_to_allocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy">reset_strategy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_costs_to_allocate` <a name="put_costs_to_allocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate"></a>

```python
def put_costs_to_allocate(
  value: IResolvable | typing.List[CustomAllocationRuleCostsToAllocate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]

---

##### `put_strategy` <a name="put_strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy"></a>

```python
def put_strategy(
  allocated_by: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedBy] = None,
  allocated_by_filters: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByFilters] = None,
  allocated_by_tag_keys: typing.List[str] = None,
  based_on_costs: IResolvable | typing.List[CustomAllocationRuleStrategyBasedOnCosts] = None,
  based_on_timeseries: CustomAllocationRuleStrategyBasedOnTimeseries = None,
  evaluate_grouped_by_filters: IResolvable | typing.List[CustomAllocationRuleStrategyEvaluateGroupedByFilters] = None,
  evaluate_grouped_by_tag_keys: typing.List[str] = None,
  granularity: str = None,
  method: str = None
) -> None
```

###### `allocated_by`<sup>Optional</sup> <a name="allocated_by" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.allocatedBy"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by CustomAllocationRule#allocated_by}

---

###### `allocated_by_filters`<sup>Optional</sup> <a name="allocated_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.allocatedByFilters"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_filters CustomAllocationRule#allocated_by_filters}

---

###### `allocated_by_tag_keys`<sup>Optional</sup> <a name="allocated_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.allocatedByTagKeys"></a>

- *Type:* typing.List[str]

List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_tag_keys CustomAllocationRule#allocated_by_tag_keys}

---

###### `based_on_costs`<sup>Optional</sup> <a name="based_on_costs" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.basedOnCosts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_costs CustomAllocationRule#based_on_costs}

---

###### `based_on_timeseries`<sup>Optional</sup> <a name="based_on_timeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.basedOnTimeseries"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_timeseries CustomAllocationRule#based_on_timeseries}

---

###### `evaluate_grouped_by_filters`<sup>Optional</sup> <a name="evaluate_grouped_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.evaluateGroupedByFilters"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_filters CustomAllocationRule#evaluate_grouped_by_filters}

---

###### `evaluate_grouped_by_tag_keys`<sup>Optional</sup> <a name="evaluate_grouped_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.evaluateGroupedByTagKeys"></a>

- *Type:* typing.List[str]

List of tag keys used to group costs before allocation.

Costs are grouped by these tag values before applying the allocation strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_tag_keys CustomAllocationRule#evaluate_grouped_by_tag_keys}

---

###### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.granularity"></a>

- *Type:* str

The granularity level for cost allocation. Valid values are `daily` or `monthly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#granularity CustomAllocationRule#granularity}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.method"></a>

- *Type:* str

The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#method CustomAllocationRule#method}

---

##### `reset_costs_to_allocate` <a name="reset_costs_to_allocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate"></a>

```python
def reset_costs_to_allocate() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy"></a>

```python
def reset_strategy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomAllocationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate">costs_to_allocate</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid">last_modified_user_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected">rejected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput">costs_to_allocate_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput">providernames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput">strategy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames">providernames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `costs_to_allocate`<sup>Required</sup> <a name="costs_to_allocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate"></a>

```python
costs_to_allocate: CustomAllocationRuleCostsToAllocateList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_user_uuid`<sup>Required</sup> <a name="last_modified_user_uuid" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid"></a>

```python
last_modified_user_uuid: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rejected`<sup>Required</sup> <a name="rejected" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected"></a>

```python
rejected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy"></a>

```python
strategy: CustomAllocationRuleStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `costs_to_allocate_input`<sup>Optional</sup> <a name="costs_to_allocate_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput"></a>

```python
costs_to_allocate_input: IResolvable | typing.List[CustomAllocationRuleCostsToAllocate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `providernames_input`<sup>Optional</sup> <a name="providernames_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput"></a>

```python
providernames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput"></a>

```python
strategy_input: IResolvable | CustomAllocationRuleStrategy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames"></a>

```python
providernames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAllocationRuleConfig <a name="CustomAllocationRuleConfig" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  providernames: typing.List[str],
  rule_name: str,
  costs_to_allocate: IResolvable | typing.List[CustomAllocationRuleCostsToAllocate] = None,
  strategy: CustomAllocationRuleStrategy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the custom allocation rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames">providernames</a></code> | <code>typing.List[str]</code> | List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the custom allocation rule. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate">costs_to_allocate</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]</code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the custom allocation rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#enabled CustomAllocationRule#enabled}

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames"></a>

```python
providernames: typing.List[str]
```

- *Type:* typing.List[str]

List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#providernames CustomAllocationRule#providernames}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the custom allocation rule.

This field is immutable - changing it will force replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#rule_name CustomAllocationRule#rule_name}

---

##### `costs_to_allocate`<sup>Optional</sup> <a name="costs_to_allocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate"></a>

```python
costs_to_allocate: IResolvable | typing.List[CustomAllocationRuleCostsToAllocate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#costs_to_allocate CustomAllocationRule#costs_to_allocate}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy"></a>

```python
strategy: CustomAllocationRuleStrategy
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#strategy CustomAllocationRule#strategy}

---

### CustomAllocationRuleCostsToAllocate <a name="CustomAllocationRuleCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleCostsToAllocate(
  condition: str = None,
  tag: str = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition">condition</a></code> | <code>str</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag">tag</a></code> | <code>str</code> | The tag key to filter on (e.g., `aws_product`, `team`, `environment`). |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value">value</a></code> | <code>str</code> | The single tag value to match. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values">values</a></code> | <code>typing.List[str]</code> | A list of tag values to match. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag key to filter on (e.g., `aws_product`, `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value"></a>

```python
value: str
```

- *Type:* str

The single tag value to match.

Use this field for conditions like `=`, `!=`, `is`, `is not`, `like`. Do not use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag values to match.

Use this field for `in` or `not in` conditions only. Do not use with single-value conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategy <a name="CustomAllocationRuleStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategy(
  allocated_by: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedBy] = None,
  allocated_by_filters: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByFilters] = None,
  allocated_by_tag_keys: typing.List[str] = None,
  based_on_costs: IResolvable | typing.List[CustomAllocationRuleStrategyBasedOnCosts] = None,
  based_on_timeseries: CustomAllocationRuleStrategyBasedOnTimeseries = None,
  evaluate_grouped_by_filters: IResolvable | typing.List[CustomAllocationRuleStrategyEvaluateGroupedByFilters] = None,
  evaluate_grouped_by_tag_keys: typing.List[str] = None,
  granularity: str = None,
  method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy">allocated_by</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]</code> | allocated_by block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters">allocated_by_filters</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]</code> | allocated_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys">allocated_by_tag_keys</a></code> | <code>typing.List[str]</code> | List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts">based_on_costs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]</code> | based_on_costs block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries">based_on_timeseries</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters">evaluate_grouped_by_filters</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]</code> | evaluate_grouped_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys">evaluate_grouped_by_tag_keys</a></code> | <code>typing.List[str]</code> | List of tag keys used to group costs before allocation. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity">granularity</a></code> | <code>str</code> | The granularity level for cost allocation. Valid values are `daily` or `monthly`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method">method</a></code> | <code>str</code> | The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`. |

---

##### `allocated_by`<sup>Optional</sup> <a name="allocated_by" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy"></a>

```python
allocated_by: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedBy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by CustomAllocationRule#allocated_by}

---

##### `allocated_by_filters`<sup>Optional</sup> <a name="allocated_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```python
allocated_by_filters: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByFilters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_filters CustomAllocationRule#allocated_by_filters}

---

##### `allocated_by_tag_keys`<sup>Optional</sup> <a name="allocated_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys"></a>

```python
allocated_by_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_by_tag_keys CustomAllocationRule#allocated_by_tag_keys}

---

##### `based_on_costs`<sup>Optional</sup> <a name="based_on_costs" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts"></a>

```python
based_on_costs: IResolvable | typing.List[CustomAllocationRuleStrategyBasedOnCosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_costs CustomAllocationRule#based_on_costs}

---

##### `based_on_timeseries`<sup>Optional</sup> <a name="based_on_timeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```python
based_on_timeseries: CustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#based_on_timeseries CustomAllocationRule#based_on_timeseries}

---

##### `evaluate_grouped_by_filters`<sup>Optional</sup> <a name="evaluate_grouped_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```python
evaluate_grouped_by_filters: IResolvable | typing.List[CustomAllocationRuleStrategyEvaluateGroupedByFilters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_filters CustomAllocationRule#evaluate_grouped_by_filters}

---

##### `evaluate_grouped_by_tag_keys`<sup>Optional</sup> <a name="evaluate_grouped_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys"></a>

```python
evaluate_grouped_by_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of tag keys used to group costs before allocation.

Costs are grouped by these tag values before applying the allocation strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_tag_keys CustomAllocationRule#evaluate_grouped_by_tag_keys}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

The granularity level for cost allocation. Valid values are `daily` or `monthly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#granularity CustomAllocationRule#granularity}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method"></a>

```python
method: str
```

- *Type:* str

The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#method CustomAllocationRule#method}

---

### CustomAllocationRuleStrategyAllocatedBy <a name="CustomAllocationRuleStrategyAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedBy(
  allocated_tags: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByAllocatedTags] = None,
  percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">allocated_tags</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]</code> | allocated_tags block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`. |

---

##### `allocated_tags`<sup>Optional</sup> <a name="allocated_tags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```python
allocated_tags: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByAllocatedTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#allocated_tags CustomAllocationRule#allocated_tags}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#percentage CustomAllocationRule#percentage}

---

### CustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key">key</a></code> | <code>str</code> | The tag key to allocate costs to (e.g., `team`, `environment`). |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value">value</a></code> | <code>str</code> | The tag value to allocate costs to (e.g., `backend`, `production`). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key to allocate costs to (e.g., `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#key CustomAllocationRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value to allocate costs to (e.g., `backend`, `production`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

### CustomAllocationRuleStrategyAllocatedByFilters <a name="CustomAllocationRuleStrategyAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters(
  condition: str = None,
  tag: str = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition">condition</a></code> | <code>str</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag">tag</a></code> | <code>str</code> | The tag key to filter on for allocation targets. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value">value</a></code> | <code>str</code> | The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values">values</a></code> | <code>typing.List[str]</code> | A list of tag values to match for allocation. Use with `in` or `not in` conditions. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag key to filter on for allocation targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value"></a>

```python
value: str
```

- *Type:* str

The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag values to match for allocation. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnCosts <a name="CustomAllocationRuleStrategyBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts(
  condition: str = None,
  tag: str = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition">condition</a></code> | <code>str</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag">tag</a></code> | <code>str</code> | The tag key to use as the basis for cost allocation calculations. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value">value</a></code> | <code>str</code> | The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values">values</a></code> | <code>typing.List[str]</code> | A list of tag values to use for cost calculations. Use with `in` or `not in` conditions. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag key to use as the basis for cost allocation calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value"></a>

```python
value: str
```

- *Type:* str

The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag values to use for cost calculations. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnTimeseries <a name="CustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries()
```


### CustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="CustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters(
  condition: str = None,
  tag: str = None,
  value: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition">condition</a></code> | <code>str</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag">tag</a></code> | <code>str</code> | The tag key to filter on when grouping costs for evaluation. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value">value</a></code> | <code>str</code> | The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values">values</a></code> | <code>typing.List[str]</code> | A list of tag values to match when grouping. Use with `in` or `not in` conditions. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag key to filter on when grouping costs for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value"></a>

```python
value: str
```

- *Type:* str

The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag values to match when grouping. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAllocationRuleCostsToAllocateList <a name="CustomAllocationRuleCostsToAllocateList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleCostsToAllocateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomAllocationRuleCostsToAllocateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomAllocationRuleCostsToAllocate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>]

---


### CustomAllocationRuleCostsToAllocateOutputReference <a name="CustomAllocationRuleCostsToAllocateOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleCostsToAllocate
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByAllocatedTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategyAllocatedByAllocatedTags
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>

---


### CustomAllocationRuleStrategyAllocatedByFiltersList <a name="CustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByFilters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]

---


### CustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="CustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategyAllocatedByFilters
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>

---


### CustomAllocationRuleStrategyAllocatedByList <a name="CustomAllocationRuleStrategyAllocatedByList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomAllocationRuleStrategyAllocatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedBy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]

---


### CustomAllocationRuleStrategyAllocatedByOutputReference <a name="CustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">put_allocated_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">reset_allocated_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allocated_tags` <a name="put_allocated_tags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```python
def put_allocated_tags(
  value: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByAllocatedTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

---

##### `reset_allocated_tags` <a name="reset_allocated_tags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```python
def reset_allocated_tags() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">allocated_tags</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">allocated_tags_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_tags`<sup>Required</sup> <a name="allocated_tags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```python
allocated_tags: CustomAllocationRuleStrategyAllocatedByAllocatedTagsList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `allocated_tags_input`<sup>Optional</sup> <a name="allocated_tags_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```python
allocated_tags_input: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByAllocatedTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategyAllocatedBy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>

---


### CustomAllocationRuleStrategyBasedOnCostsList <a name="CustomAllocationRuleStrategyBasedOnCostsList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomAllocationRuleStrategyBasedOnCostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomAllocationRuleStrategyBasedOnCosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]

---


### CustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="CustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategyBasedOnCosts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>

---


### CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomAllocationRuleStrategyEvaluateGroupedByFilters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategyEvaluateGroupedByFilters
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>

---


### CustomAllocationRuleStrategyOutputReference <a name="CustomAllocationRuleStrategyOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import custom_allocation_rule

customAllocationRule.CustomAllocationRuleStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy">put_allocated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">put_allocated_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts">put_based_on_costs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">put_based_on_timeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">put_evaluate_grouped_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy">reset_allocated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">reset_allocated_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys">reset_allocated_by_tag_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">reset_based_on_costs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">reset_evaluate_grouped_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys">reset_evaluate_grouped_by_tag_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity">reset_granularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod">reset_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allocated_by` <a name="put_allocated_by" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```python
def put_allocated_by(
  value: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedBy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]

---

##### `put_allocated_by_filters` <a name="put_allocated_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```python
def put_allocated_by_filters(
  value: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]

---

##### `put_based_on_costs` <a name="put_based_on_costs" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```python
def put_based_on_costs(
  value: IResolvable | typing.List[CustomAllocationRuleStrategyBasedOnCosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]

---

##### `put_based_on_timeseries` <a name="put_based_on_timeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```python
def put_based_on_timeseries() -> None
```

##### `put_evaluate_grouped_by_filters` <a name="put_evaluate_grouped_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```python
def put_evaluate_grouped_by_filters(
  value: IResolvable | typing.List[CustomAllocationRuleStrategyEvaluateGroupedByFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

---

##### `reset_allocated_by` <a name="reset_allocated_by" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```python
def reset_allocated_by() -> None
```

##### `reset_allocated_by_filters` <a name="reset_allocated_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```python
def reset_allocated_by_filters() -> None
```

##### `reset_allocated_by_tag_keys` <a name="reset_allocated_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys"></a>

```python
def reset_allocated_by_tag_keys() -> None
```

##### `reset_based_on_costs` <a name="reset_based_on_costs" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```python
def reset_based_on_costs() -> None
```

##### `reset_evaluate_grouped_by_filters` <a name="reset_evaluate_grouped_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```python
def reset_evaluate_grouped_by_filters() -> None
```

##### `reset_evaluate_grouped_by_tag_keys` <a name="reset_evaluate_grouped_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys"></a>

```python
def reset_evaluate_grouped_by_tag_keys() -> None
```

##### `reset_granularity` <a name="reset_granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity"></a>

```python
def reset_granularity() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy">allocated_by</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">allocated_by_filters</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts">based_on_costs</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">based_on_timeseries</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">evaluate_grouped_by_filters</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">allocated_by_filters_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput">allocated_by_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput">allocated_by_tag_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">based_on_costs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">based_on_timeseries_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">evaluate_grouped_by_filters_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput">evaluate_grouped_by_tag_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">allocated_by_tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">evaluate_grouped_by_tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_by`<sup>Required</sup> <a name="allocated_by" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```python
allocated_by: CustomAllocationRuleStrategyAllocatedByList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a>

---

##### `allocated_by_filters`<sup>Required</sup> <a name="allocated_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```python
allocated_by_filters: CustomAllocationRuleStrategyAllocatedByFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `based_on_costs`<sup>Required</sup> <a name="based_on_costs" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```python
based_on_costs: CustomAllocationRuleStrategyBasedOnCostsList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `based_on_timeseries`<sup>Required</sup> <a name="based_on_timeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```python
based_on_timeseries: CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `evaluate_grouped_by_filters`<sup>Required</sup> <a name="evaluate_grouped_by_filters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```python
evaluate_grouped_by_filters: CustomAllocationRuleStrategyEvaluateGroupedByFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `allocated_by_filters_input`<sup>Optional</sup> <a name="allocated_by_filters_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```python
allocated_by_filters_input: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedByFilters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>]

---

##### `allocated_by_input`<sup>Optional</sup> <a name="allocated_by_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```python
allocated_by_input: IResolvable | typing.List[CustomAllocationRuleStrategyAllocatedBy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>]

---

##### `allocated_by_tag_keys_input`<sup>Optional</sup> <a name="allocated_by_tag_keys_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput"></a>

```python
allocated_by_tag_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `based_on_costs_input`<sup>Optional</sup> <a name="based_on_costs_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```python
based_on_costs_input: IResolvable | typing.List[CustomAllocationRuleStrategyBasedOnCosts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>]

---

##### `based_on_timeseries_input`<sup>Optional</sup> <a name="based_on_timeseries_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```python
based_on_timeseries_input: IResolvable | CustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `evaluate_grouped_by_filters_input`<sup>Optional</sup> <a name="evaluate_grouped_by_filters_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```python
evaluate_grouped_by_filters_input: IResolvable | typing.List[CustomAllocationRuleStrategyEvaluateGroupedByFilters]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

---

##### `evaluate_grouped_by_tag_keys_input`<sup>Optional</sup> <a name="evaluate_grouped_by_tag_keys_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput"></a>

```python
evaluate_grouped_by_tag_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `allocated_by_tag_keys`<sup>Required</sup> <a name="allocated_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```python
allocated_by_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `evaluate_grouped_by_tag_keys`<sup>Required</sup> <a name="evaluate_grouped_by_tag_keys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```python
evaluate_grouped_by_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomAllocationRuleStrategy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---



