# `customAllocationRule` Submodule <a name="`customAllocationRule` Submodule" id="@cdktf/provider-datadog.customAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAllocationRule <a name="CustomAllocationRule" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRule(scope Construct, id *string, config CustomAllocationRuleConfig) CustomAllocationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig">CustomAllocationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig">CustomAllocationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate">PutCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate">ResetCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCostsToAllocate` <a name="PutCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate"></a>

```go
func PutCostsToAllocate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy"></a>

```go
func PutStrategy(value CustomAllocationRuleStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---

##### `ResetCostsToAllocate` <a name="ResetCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate"></a>

```go
func ResetCostsToAllocate()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy"></a>

```go
func ResetStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.CustomAllocationRule_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.CustomAllocationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.CustomAllocationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.CustomAllocationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CustomAllocationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomAllocationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate">CostsToAllocate</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid">LastModifiedUserUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId">OrderId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected">Rejected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput">CostsToAllocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput">ProvidernamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput">StrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames">Providernames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CostsToAllocate`<sup>Required</sup> <a name="CostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate"></a>

```go
func CostsToAllocate() CustomAllocationRuleCostsToAllocateList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedUserUuid`<sup>Required</sup> <a name="LastModifiedUserUuid" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid"></a>

```go
func LastModifiedUserUuid() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId"></a>

```go
func OrderId() *f64
```

- *Type:* *f64

---

##### `Rejected`<sup>Required</sup> <a name="Rejected" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected"></a>

```go
func Rejected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy"></a>

```go
func Strategy() CustomAllocationRuleStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a>

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `CostsToAllocateInput`<sup>Optional</sup> <a name="CostsToAllocateInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput"></a>

```go
func CostsToAllocateInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProvidernamesInput`<sup>Optional</sup> <a name="ProvidernamesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput"></a>

```go
func ProvidernamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput"></a>

```go
func StrategyInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Providernames`<sup>Required</sup> <a name="Providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames"></a>

```go
func Providernames() *[]*string
```

- *Type:* *[]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAllocationRuleConfig <a name="CustomAllocationRuleConfig" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Providernames: *[]*string,
	RuleName: *string,
	CostsToAllocate: interface{},
	Strategy: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.customAllocationRule.CustomAllocationRuleStrategy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the custom allocation rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames">Providernames</a></code> | <code>*[]*string</code> | List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | The name of the custom allocation rule. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate">CostsToAllocate</a></code> | <code>interface{}</code> | costs_to_allocate block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the custom allocation rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#enabled CustomAllocationRule#enabled}

---

##### `Providernames`<sup>Required</sup> <a name="Providernames" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames"></a>

```go
Providernames *[]*string
```

- *Type:* *[]*string

List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#providernames CustomAllocationRule#providernames}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

The name of the custom allocation rule.

This field is immutable - changing it will force replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#rule_name CustomAllocationRule#rule_name}

---

##### `CostsToAllocate`<sup>Optional</sup> <a name="CostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate"></a>

```go
CostsToAllocate interface{}
```

- *Type:* interface{}

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#costs_to_allocate CustomAllocationRule#costs_to_allocate}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy"></a>

```go
Strategy CustomAllocationRuleStrategy
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#strategy CustomAllocationRule#strategy}

---

### CustomAllocationRuleCostsToAllocate <a name="CustomAllocationRuleCostsToAllocate" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleCostsToAllocate {
	Condition: *string,
	Tag: *string,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition">Condition</a></code> | <code>*string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag">Tag</a></code> | <code>*string</code> | The tag key to filter on (e.g., `aws_product`, `team`, `environment`). |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value">Value</a></code> | <code>*string</code> | The single tag value to match. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values">Values</a></code> | <code>*[]*string</code> | A list of tag values to match. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag key to filter on (e.g., `aws_product`, `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value"></a>

```go
Value *string
```

- *Type:* *string

The single tag value to match.

Use this field for conditions like `=`, `!=`, `is`, `is not`, `like`. Do not use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of tag values to match.

Use this field for `in` or `not in` conditions only. Do not use with single-value conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategy <a name="CustomAllocationRuleStrategy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategy {
	AllocatedBy: interface{},
	AllocatedByFilters: interface{},
	AllocatedByTagKeys: *[]*string,
	BasedOnCosts: interface{},
	BasedOnTimeseries: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries,
	EvaluateGroupedByFilters: interface{},
	EvaluateGroupedByTagKeys: *[]*string,
	Granularity: *string,
	Method: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy">AllocatedBy</a></code> | <code>interface{}</code> | allocated_by block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters">AllocatedByFilters</a></code> | <code>interface{}</code> | allocated_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys">AllocatedByTagKeys</a></code> | <code>*[]*string</code> | List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts">BasedOnCosts</a></code> | <code>interface{}</code> | based_on_costs block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code>interface{}</code> | evaluate_grouped_by_filters block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys">EvaluateGroupedByTagKeys</a></code> | <code>*[]*string</code> | List of tag keys used to group costs before allocation. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity">Granularity</a></code> | <code>*string</code> | The granularity level for cost allocation. Valid values are `daily` or `monthly`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method">Method</a></code> | <code>*string</code> | The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`. |

---

##### `AllocatedBy`<sup>Optional</sup> <a name="AllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy"></a>

```go
AllocatedBy interface{}
```

- *Type:* interface{}

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#allocated_by CustomAllocationRule#allocated_by}

---

##### `AllocatedByFilters`<sup>Optional</sup> <a name="AllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```go
AllocatedByFilters interface{}
```

- *Type:* interface{}

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#allocated_by_filters CustomAllocationRule#allocated_by_filters}

---

##### `AllocatedByTagKeys`<sup>Optional</sup> <a name="AllocatedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys"></a>

```go
AllocatedByTagKeys *[]*string
```

- *Type:* *[]*string

List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#allocated_by_tag_keys CustomAllocationRule#allocated_by_tag_keys}

---

##### `BasedOnCosts`<sup>Optional</sup> <a name="BasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts"></a>

```go
BasedOnCosts interface{}
```

- *Type:* interface{}

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#based_on_costs CustomAllocationRule#based_on_costs}

---

##### `BasedOnTimeseries`<sup>Optional</sup> <a name="BasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```go
BasedOnTimeseries CustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#based_on_timeseries CustomAllocationRule#based_on_timeseries}

---

##### `EvaluateGroupedByFilters`<sup>Optional</sup> <a name="EvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```go
EvaluateGroupedByFilters interface{}
```

- *Type:* interface{}

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_filters CustomAllocationRule#evaluate_grouped_by_filters}

---

##### `EvaluateGroupedByTagKeys`<sup>Optional</sup> <a name="EvaluateGroupedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys"></a>

```go
EvaluateGroupedByTagKeys *[]*string
```

- *Type:* *[]*string

List of tag keys used to group costs before allocation.

Costs are grouped by these tag values before applying the allocation strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_tag_keys CustomAllocationRule#evaluate_grouped_by_tag_keys}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity"></a>

```go
Granularity *string
```

- *Type:* *string

The granularity level for cost allocation. Valid values are `daily` or `monthly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#granularity CustomAllocationRule#granularity}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method"></a>

```go
Method *string
```

- *Type:* *string

The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#method CustomAllocationRule#method}

---

### CustomAllocationRuleStrategyAllocatedBy <a name="CustomAllocationRuleStrategyAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategyAllocatedBy {
	AllocatedTags: interface{},
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">AllocatedTags</a></code> | <code>interface{}</code> | allocated_tags block. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`. |

---

##### `AllocatedTags`<sup>Optional</sup> <a name="AllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```go
AllocatedTags interface{}
```

- *Type:* interface{}

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#allocated_tags CustomAllocationRule#allocated_tags}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#percentage CustomAllocationRule#percentage}

---

### CustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategyAllocatedByAllocatedTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key">Key</a></code> | <code>*string</code> | The tag key to allocate costs to (e.g., `team`, `environment`). |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value">Value</a></code> | <code>*string</code> | The tag value to allocate costs to (e.g., `backend`, `production`). |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key to allocate costs to (e.g., `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#key CustomAllocationRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value to allocate costs to (e.g., `backend`, `production`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

### CustomAllocationRuleStrategyAllocatedByFilters <a name="CustomAllocationRuleStrategyAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategyAllocatedByFilters {
	Condition: *string,
	Tag: *string,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition">Condition</a></code> | <code>*string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag">Tag</a></code> | <code>*string</code> | The tag key to filter on for allocation targets. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value">Value</a></code> | <code>*string</code> | The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values">Values</a></code> | <code>*[]*string</code> | A list of tag values to match for allocation. Use with `in` or `not in` conditions. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag key to filter on for allocation targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of tag values to match for allocation. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnCosts <a name="CustomAllocationRuleStrategyBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategyBasedOnCosts {
	Condition: *string,
	Tag: *string,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition">Condition</a></code> | <code>*string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag">Tag</a></code> | <code>*string</code> | The tag key to use as the basis for cost allocation calculations. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value">Value</a></code> | <code>*string</code> | The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values">Values</a></code> | <code>*[]*string</code> | A list of tag values to use for cost calculations. Use with `in` or `not in` conditions. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag key to use as the basis for cost allocation calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value"></a>

```go
Value *string
```

- *Type:* *string

The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of tag values to use for cost calculations. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnTimeseries <a name="CustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategyBasedOnTimeseries {

}
```


### CustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="CustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

&customallocationrule.CustomAllocationRuleStrategyEvaluateGroupedByFilters {
	Condition: *string,
	Tag: *string,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition">Condition</a></code> | <code>*string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag">Tag</a></code> | <code>*string</code> | The tag key to filter on when grouping costs for evaluation. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value">Value</a></code> | <code>*string</code> | The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values">Values</a></code> | <code>*[]*string</code> | A list of tag values to match when grouping. Use with `in` or `not in` conditions. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag key to filter on when grouping costs for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of tag values to match when grouping. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAllocationRuleCostsToAllocateList <a name="CustomAllocationRuleCostsToAllocateList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleCostsToAllocateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomAllocationRuleCostsToAllocateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get"></a>

```go
func Get(index *f64) CustomAllocationRuleCostsToAllocateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleCostsToAllocateOutputReference <a name="CustomAllocationRuleCostsToAllocateOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleCostsToAllocateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomAllocationRuleCostsToAllocateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyAllocatedByAllocatedTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomAllocationRuleStrategyAllocatedByAllocatedTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```go
func Get(index *f64) CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyAllocatedByFiltersList <a name="CustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyAllocatedByFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomAllocationRuleStrategyAllocatedByFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```go
func Get(index *f64) CustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="CustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyAllocatedByFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyAllocatedByList <a name="CustomAllocationRuleStrategyAllocatedByList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyAllocatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomAllocationRuleStrategyAllocatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get"></a>

```go
func Get(index *f64) CustomAllocationRuleStrategyAllocatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyAllocatedByOutputReference <a name="CustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyAllocatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomAllocationRuleStrategyAllocatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">PutAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">ResetAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedTags` <a name="PutAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```go
func PutAllocatedTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedTags` <a name="ResetAllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```go
func ResetAllocatedTags()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">AllocatedTags</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">AllocatedTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedTags`<sup>Required</sup> <a name="AllocatedTags" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```go
func AllocatedTags() CustomAllocationRuleStrategyAllocatedByAllocatedTagsList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `AllocatedTagsInput`<sup>Optional</sup> <a name="AllocatedTagsInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```go
func AllocatedTagsInput() interface{}
```

- *Type:* interface{}

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyBasedOnCostsList <a name="CustomAllocationRuleStrategyBasedOnCostsList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyBasedOnCostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomAllocationRuleStrategyBasedOnCostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```go
func Get(index *f64) CustomAllocationRuleStrategyBasedOnCostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="CustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyBasedOnCostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomAllocationRuleStrategyBasedOnCostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyEvaluateGroupedByFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomAllocationRuleStrategyEvaluateGroupedByFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```go
func Get(index *f64) CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomAllocationRuleStrategyOutputReference <a name="CustomAllocationRuleStrategyOutputReference" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/customallocationrule"

customallocationrule.NewCustomAllocationRuleStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomAllocationRuleStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy">PutAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">PutAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts">PutBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">PutBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">PutEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy">ResetAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">ResetAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys">ResetAllocatedByTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">ResetBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">ResetEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys">ResetEvaluateGroupedByTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedBy` <a name="PutAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```go
func PutAllocatedBy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllocatedByFilters` <a name="PutAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```go
func PutAllocatedByFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBasedOnCosts` <a name="PutBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```go
func PutBasedOnCosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBasedOnTimeseries` <a name="PutBasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```go
func PutBasedOnTimeseries(value CustomAllocationRuleStrategyBasedOnTimeseries)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `PutEvaluateGroupedByFilters` <a name="PutEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```go
func PutEvaluateGroupedByFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatedBy` <a name="ResetAllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```go
func ResetAllocatedBy()
```

##### `ResetAllocatedByFilters` <a name="ResetAllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```go
func ResetAllocatedByFilters()
```

##### `ResetAllocatedByTagKeys` <a name="ResetAllocatedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys"></a>

```go
func ResetAllocatedByTagKeys()
```

##### `ResetBasedOnCosts` <a name="ResetBasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```go
func ResetBasedOnCosts()
```

##### `ResetEvaluateGroupedByFilters` <a name="ResetEvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```go
func ResetEvaluateGroupedByFilters()
```

##### `ResetEvaluateGroupedByTagKeys` <a name="ResetEvaluateGroupedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys"></a>

```go
func ResetEvaluateGroupedByTagKeys()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity"></a>

```go
func ResetGranularity()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod"></a>

```go
func ResetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy">AllocatedBy</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">AllocatedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts">BasedOnCosts</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">AllocatedByFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput">AllocatedByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput">AllocatedByTagKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">BasedOnCostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">BasedOnTimeseriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">EvaluateGroupedByFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput">EvaluateGroupedByTagKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput">GranularityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">AllocatedByTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">EvaluateGroupedByTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity">Granularity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedBy`<sup>Required</sup> <a name="AllocatedBy" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```go
func AllocatedBy() CustomAllocationRuleStrategyAllocatedByList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a>

---

##### `AllocatedByFilters`<sup>Required</sup> <a name="AllocatedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```go
func AllocatedByFilters() CustomAllocationRuleStrategyAllocatedByFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `BasedOnCosts`<sup>Required</sup> <a name="BasedOnCosts" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```go
func BasedOnCosts() CustomAllocationRuleStrategyBasedOnCostsList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `BasedOnTimeseries`<sup>Required</sup> <a name="BasedOnTimeseries" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```go
func BasedOnTimeseries() CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `EvaluateGroupedByFilters`<sup>Required</sup> <a name="EvaluateGroupedByFilters" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```go
func EvaluateGroupedByFilters() CustomAllocationRuleStrategyEvaluateGroupedByFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `AllocatedByFiltersInput`<sup>Optional</sup> <a name="AllocatedByFiltersInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```go
func AllocatedByFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `AllocatedByInput`<sup>Optional</sup> <a name="AllocatedByInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```go
func AllocatedByInput() interface{}
```

- *Type:* interface{}

---

##### `AllocatedByTagKeysInput`<sup>Optional</sup> <a name="AllocatedByTagKeysInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput"></a>

```go
func AllocatedByTagKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `BasedOnCostsInput`<sup>Optional</sup> <a name="BasedOnCostsInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```go
func BasedOnCostsInput() interface{}
```

- *Type:* interface{}

---

##### `BasedOnTimeseriesInput`<sup>Optional</sup> <a name="BasedOnTimeseriesInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```go
func BasedOnTimeseriesInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluateGroupedByFiltersInput`<sup>Optional</sup> <a name="EvaluateGroupedByFiltersInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```go
func EvaluateGroupedByFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluateGroupedByTagKeysInput`<sup>Optional</sup> <a name="EvaluateGroupedByTagKeysInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput"></a>

```go
func EvaluateGroupedByTagKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput"></a>

```go
func GranularityInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `AllocatedByTagKeys`<sup>Required</sup> <a name="AllocatedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```go
func AllocatedByTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `EvaluateGroupedByTagKeys`<sup>Required</sup> <a name="EvaluateGroupedByTagKeys" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```go
func EvaluateGroupedByTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```go
func Granularity() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



