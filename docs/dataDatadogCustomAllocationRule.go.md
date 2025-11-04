# `dataDatadogCustomAllocationRule` Submodule <a name="`dataDatadogCustomAllocationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCustomAllocationRule <a name="DataDatadogCustomAllocationRule" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRule(scope Construct, id *string, config DataDatadogCustomAllocationRuleConfig) DataDatadogCustomAllocationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig">DataDatadogCustomAllocationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig">DataDatadogCustomAllocationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate">PutCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate">ResetCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCostsToAllocate` <a name="PutCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate"></a>

```go
func PutCostsToAllocate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy"></a>

```go
func PutStrategy(value DataDatadogCustomAllocationRuleStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---

##### `ResetCostsToAllocate` <a name="ResetCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate"></a>

```go
func ResetCostsToAllocate()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy"></a>

```go
func ResetStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.DataDatadogCustomAllocationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.DataDatadogCustomAllocationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.DataDatadogCustomAllocationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.DataDatadogCustomAllocationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogCustomAllocationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogCustomAllocationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogCustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate">CostsToAllocate</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid">LastModifiedUserUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId">OrderId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames">Providernames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected">Rejected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput">CostsToAllocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput">StrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId">RuleId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CostsToAllocate`<sup>Required</sup> <a name="CostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate"></a>

```go
func CostsToAllocate() DataDatadogCustomAllocationRuleCostsToAllocateList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedUserUuid`<sup>Required</sup> <a name="LastModifiedUserUuid" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid"></a>

```go
func LastModifiedUserUuid() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId"></a>

```go
func OrderId() *f64
```

- *Type:* *f64

---

##### `Providernames`<sup>Required</sup> <a name="Providernames" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames"></a>

```go
func Providernames() *[]*string
```

- *Type:* *[]*string

---

##### `Rejected`<sup>Required</sup> <a name="Rejected" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected"></a>

```go
func Rejected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy"></a>

```go
func Strategy() DataDatadogCustomAllocationRuleStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CostsToAllocateInput`<sup>Optional</sup> <a name="CostsToAllocateInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput"></a>

```go
func CostsToAllocateInput() interface{}
```

- *Type:* interface{}

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *f64
```

- *Type:* *f64

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput"></a>

```go
func StrategyInput() interface{}
```

- *Type:* interface{}

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId"></a>

```go
func RuleId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCustomAllocationRuleConfig <a name="DataDatadogCustomAllocationRuleConfig" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CostsToAllocate: interface{},
	RuleId: *f64,
	Strategy: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate">CostsToAllocate</a></code> | <code>interface{}</code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId">RuleId</a></code> | <code>*f64</code> | The ID of the custom allocation rule to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CostsToAllocate`<sup>Optional</sup> <a name="CostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate"></a>

```go
CostsToAllocate interface{}
```

- *Type:* interface{}

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId"></a>

```go
RuleId *f64
```

- *Type:* *f64

The ID of the custom allocation rule to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy"></a>

```go
Strategy DataDatadogCustomAllocationRuleStrategy
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}

---

### DataDatadogCustomAllocationRuleCostsToAllocate <a name="DataDatadogCustomAllocationRuleCostsToAllocate" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleCostsToAllocate {

}
```


### DataDatadogCustomAllocationRuleStrategy <a name="DataDatadogCustomAllocationRuleStrategy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategy {
	AllocatedBy: interface{},
	AllocatedByFilters: interface{},
	BasedOnCosts: interface{},
	BasedOnTimeseries: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries,
	EvaluateGroupedByFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy">AllocatedBy</a></code> | <code>interface{}</code> | allocated_by block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters">AllocatedByFilters</a></code> | <code>interface{}</code> | allocated_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts">BasedOnCosts</a></code> | <code>interface{}</code> | based_on_costs block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code>interface{}</code> | evaluate_grouped_by_filters block. |

---

##### `AllocatedBy`<sup>Optional</sup> <a name="AllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy"></a>

```go
AllocatedBy interface{}
```

- *Type:* interface{}

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#allocated_by DataDatadogCustomAllocationRule#allocated_by}

---

##### `AllocatedByFilters`<sup>Optional</sup> <a name="AllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```go
AllocatedByFilters interface{}
```

- *Type:* interface{}

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#allocated_by_filters DataDatadogCustomAllocationRule#allocated_by_filters}

---

##### `BasedOnCosts`<sup>Optional</sup> <a name="BasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts"></a>

```go
BasedOnCosts interface{}
```

- *Type:* interface{}

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#based_on_costs DataDatadogCustomAllocationRule#based_on_costs}

---

##### `BasedOnTimeseries`<sup>Optional</sup> <a name="BasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```go
BasedOnTimeseries DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#based_on_timeseries DataDatadogCustomAllocationRule#based_on_timeseries}

---

##### `EvaluateGroupedByFilters`<sup>Optional</sup> <a name="EvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```go
EvaluateGroupedByFilters interface{}
```

- *Type:* interface{}

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#evaluate_grouped_by_filters DataDatadogCustomAllocationRule#evaluate_grouped_by_filters}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedBy <a name="DataDatadogCustomAllocationRuleStrategyAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategyAllocatedBy {
	AllocatedTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">AllocatedTags</a></code> | <code>interface{}</code> | allocated_tags block. |

---

##### `AllocatedTags`<sup>Optional</sup> <a name="AllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```go
AllocatedTags interface{}
```

- *Type:* interface{}

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/custom_allocation_rule#allocated_tags DataDatadogCustomAllocationRule#allocated_tags}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags {

}
```


### DataDatadogCustomAllocationRuleStrategyAllocatedByFilters <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters {

}
```


### DataDatadogCustomAllocationRuleStrategyBasedOnCosts <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts {

}
```


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries {

}
```


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

&datadatadogcustomallocationrule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCustomAllocationRuleCostsToAllocateList <a name="DataDatadogCustomAllocationRuleCostsToAllocateList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleCostsToAllocateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCustomAllocationRuleCostsToAllocateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get"></a>

```go
func Get(index *f64) DataDatadogCustomAllocationRuleCostsToAllocateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleCostsToAllocateOutputReference <a name="DataDatadogCustomAllocationRuleCostsToAllocateOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleCostsToAllocateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCustomAllocationRuleCostsToAllocateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```go
func Get(index *f64) DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```go
func Get(index *f64) DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyAllocatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCustomAllocationRuleStrategyAllocatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get"></a>

```go
func Get(index *f64) DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">PutAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">ResetAllocatedTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedTags` <a name="PutAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```go
func PutAllocatedTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedTags` <a name="ResetAllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```go
func ResetAllocatedTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">AllocatedTags</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">AllocatedTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedTags`<sup>Required</sup> <a name="AllocatedTags" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```go
func AllocatedTags() DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `AllocatedTagsInput`<sup>Optional</sup> <a name="AllocatedTagsInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```go
func AllocatedTagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsList <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyBasedOnCostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCustomAllocationRuleStrategyBasedOnCostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```go
func Get(index *f64) DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```go
func Get(index *f64) DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCustomAllocationRuleStrategyOutputReference <a name="DataDatadogCustomAllocationRuleStrategyOutputReference" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcustomallocationrule"

datadatadogcustomallocationrule.NewDataDatadogCustomAllocationRuleStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogCustomAllocationRuleStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy">PutAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">PutAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts">PutBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">PutBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">PutEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy">ResetAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">ResetAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">ResetBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">ResetEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedBy` <a name="PutAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```go
func PutAllocatedBy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllocatedByFilters` <a name="PutAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```go
func PutAllocatedByFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBasedOnCosts` <a name="PutBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```go
func PutBasedOnCosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBasedOnTimeseries` <a name="PutBasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```go
func PutBasedOnTimeseries(value DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `PutEvaluateGroupedByFilters` <a name="PutEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```go
func PutEvaluateGroupedByFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedBy` <a name="ResetAllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```go
func ResetAllocatedBy()
```

##### `ResetAllocatedByFilters` <a name="ResetAllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```go
func ResetAllocatedByFilters()
```

##### `ResetBasedOnCosts` <a name="ResetBasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```go
func ResetBasedOnCosts()
```

##### `ResetEvaluateGroupedByFilters` <a name="ResetEvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```go
func ResetEvaluateGroupedByFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy">AllocatedBy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">AllocatedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">AllocatedByTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts">BasedOnCosts</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">EvaluateGroupedByTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity">Granularity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">AllocatedByFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput">AllocatedByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">BasedOnCostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">BasedOnTimeseriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">EvaluateGroupedByFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedBy`<sup>Required</sup> <a name="AllocatedBy" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```go
func AllocatedBy() DataDatadogCustomAllocationRuleStrategyAllocatedByList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a>

---

##### `AllocatedByFilters`<sup>Required</sup> <a name="AllocatedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```go
func AllocatedByFilters() DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `AllocatedByTagKeys`<sup>Required</sup> <a name="AllocatedByTagKeys" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```go
func AllocatedByTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `BasedOnCosts`<sup>Required</sup> <a name="BasedOnCosts" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```go
func BasedOnCosts() DataDatadogCustomAllocationRuleStrategyBasedOnCostsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `BasedOnTimeseries`<sup>Required</sup> <a name="BasedOnTimeseries" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```go
func BasedOnTimeseries() DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `EvaluateGroupedByFilters`<sup>Required</sup> <a name="EvaluateGroupedByFilters" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```go
func EvaluateGroupedByFilters() DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `EvaluateGroupedByTagKeys`<sup>Required</sup> <a name="EvaluateGroupedByTagKeys" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```go
func EvaluateGroupedByTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```go
func Granularity() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `AllocatedByFiltersInput`<sup>Optional</sup> <a name="AllocatedByFiltersInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```go
func AllocatedByFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `AllocatedByInput`<sup>Optional</sup> <a name="AllocatedByInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```go
func AllocatedByInput() interface{}
```

- *Type:* interface{}

---

##### `BasedOnCostsInput`<sup>Optional</sup> <a name="BasedOnCostsInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```go
func BasedOnCostsInput() interface{}
```

- *Type:* interface{}

---

##### `BasedOnTimeseriesInput`<sup>Optional</sup> <a name="BasedOnTimeseriesInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```go
func BasedOnTimeseriesInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluateGroupedByFiltersInput`<sup>Optional</sup> <a name="EvaluateGroupedByFiltersInput" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```go
func EvaluateGroupedByFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



