# `appsecWafCustomRule` Submodule <a name="`appsecWafCustomRule` Submodule" id="@cdktf/provider-datadog.appsecWafCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafCustomRule <a name="AppsecWafCustomRule" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule datadog_appsec_waf_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRule(scope Construct, id *string, config AppsecWafCustomRuleConfig) AppsecWafCustomRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig">AppsecWafCustomRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig">AppsecWafCustomRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob">ResetPathGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction"></a>

```go
func PutAction(value AppsecWafCustomRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition"></a>

```go
func PutCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope"></a>

```go
func PutScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetPathGlob` <a name="ResetPathGlob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob"></a>

```go
func ResetPathGlob()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope"></a>

```go
func ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.AppsecWafCustomRule_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.AppsecWafCustomRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.AppsecWafCustomRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.AppsecWafCustomRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppsecWafCustomRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppsecWafCustomRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppsecWafCustomRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput">BlockingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput">ConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput">PathGlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking">Blocking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob">PathGlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action"></a>

```go
func Action() AppsecWafCustomRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition"></a>

```go
func Condition() AppsecWafCustomRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope"></a>

```go
func Scope() AppsecWafCustomRuleScopeList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `BlockingInput`<sup>Optional</sup> <a name="BlockingInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput"></a>

```go
func BlockingInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput"></a>

```go
func ConditionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathGlobInput`<sup>Optional</sup> <a name="PathGlobInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput"></a>

```go
func PathGlobInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Blocking`<sup>Required</sup> <a name="Blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking"></a>

```go
func Blocking() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathGlob`<sup>Required</sup> <a name="PathGlob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob"></a>

```go
func PathGlob() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafCustomRuleAction <a name="AppsecWafCustomRuleAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleAction {
	Action: *string,
	Parameters: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.appsecWafCustomRule.AppsecWafCustomRuleActionParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action">Action</a></code> | <code>*string</code> | Override the default action to take when the WAF custom rule would block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | parameters block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Override the default action to take when the WAF custom rule would block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters"></a>

```go
Parameters AppsecWafCustomRuleActionParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleActionParameters <a name="AppsecWafCustomRuleActionParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleActionParameters {
	Location: *string,
	StatusCode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location">Location</a></code> | <code>*string</code> | The location to redirect to when the WAF custom rule triggers. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode">StatusCode</a></code> | <code>*f64</code> | The status code to return when the WAF custom rule triggers. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location to redirect to when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#location AppsecWafCustomRule#location}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

The status code to return when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#status_code AppsecWafCustomRule#status_code}

---

### AppsecWafCustomRuleCondition <a name="AppsecWafCustomRuleCondition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleCondition {
	Operator: *string,
	Parameters: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator">Operator</a></code> | <code>*string</code> | Operator to use for the WAF Condition. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | parameters block. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Operator to use for the WAF Condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#operator AppsecWafCustomRule#operator}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters"></a>

```go
Parameters AppsecWafCustomRuleConditionParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleConditionParameters <a name="AppsecWafCustomRuleConditionParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleConditionParameters {
	Data: *string,
	Input: interface{},
	List: *[]*string,
	Options: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions,
	Regex: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data">Data</a></code> | <code>*string</code> | Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input">Input</a></code> | <code>interface{}</code> | input block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list">List</a></code> | <code>*[]*string</code> | List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex">Regex</a></code> | <code>*string</code> | Regex to use with the condition. Only used with match_regex and !match_regex operator. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value">Value</a></code> | <code>*string</code> | Store the captured value in the specified tag name. Only used with the capture_data operator. |

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data"></a>

```go
Data *string
```

- *Type:* *string

Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#data AppsecWafCustomRule#data}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#input AppsecWafCustomRule#input}

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list"></a>

```go
List *[]*string
```

- *Type:* *[]*string

List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#list AppsecWafCustomRule#list}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options"></a>

```go
Options AppsecWafCustomRuleConditionParametersOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#options AppsecWafCustomRule#options}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Regex to use with the condition. Only used with match_regex and !match_regex operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#regex AppsecWafCustomRule#regex}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Store the captured value in the specified tag name. Only used with the capture_data operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#value AppsecWafCustomRule#value}

---

### AppsecWafCustomRuleConditionParametersInput <a name="AppsecWafCustomRuleConditionParametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleConditionParametersInput {
	Address: *string,
	KeyPath: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address">Address</a></code> | <code>*string</code> | Input from the request on which the condition should apply. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath">KeyPath</a></code> | <code>*[]*string</code> | Specific path for the input. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address"></a>

```go
Address *string
```

- *Type:* *string

Input from the request on which the condition should apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#address AppsecWafCustomRule#address}

---

##### `KeyPath`<sup>Optional</sup> <a name="KeyPath" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath"></a>

```go
KeyPath *[]*string
```

- *Type:* *[]*string

Specific path for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#key_path AppsecWafCustomRule#key_path}

---

### AppsecWafCustomRuleConditionParametersOptions <a name="AppsecWafCustomRuleConditionParametersOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleConditionParametersOptions {
	CaseSensitive: interface{},
	MinLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Evaluate the value as case sensitive. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength">MinLength</a></code> | <code>*f64</code> | Only evaluate this condition if the value has a minimum amount of characters. |

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Evaluate the value as case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#case_sensitive AppsecWafCustomRule#case_sensitive}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Only evaluate this condition if the value has a minimum amount of characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#min_length AppsecWafCustomRule#min_length}

---

### AppsecWafCustomRuleConfig <a name="AppsecWafCustomRuleConfig" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Blocking: interface{},
	Enabled: interface{},
	Name: *string,
	Tags: *map[string]*string,
	Action: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.appsecWafCustomRule.AppsecWafCustomRuleAction,
	Condition: interface{},
	PathGlob: *string,
	Scope: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking">Blocking</a></code> | <code>interface{}</code> | Indicates whether the WAF custom rule will block the request. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether the WAF custom rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name">Name</a></code> | <code>*string</code> | The Name of the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Tags associated with the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition">Condition</a></code> | <code>interface{}</code> | condition block. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob">PathGlob</a></code> | <code>*string</code> | The path glob for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope">Scope</a></code> | <code>interface{}</code> | scope block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Blocking`<sup>Required</sup> <a name="Blocking" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking"></a>

```go
Blocking interface{}
```

- *Type:* interface{}

Indicates whether the WAF custom rule will block the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#blocking AppsecWafCustomRule#blocking}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether the WAF custom rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#enabled AppsecWafCustomRule#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Name of the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#name AppsecWafCustomRule#name}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Tags associated with the WAF custom rule.

`category` and `type` tags are required. Supported categories include `business_logic`, `attack_attempt` and `security_response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#tags AppsecWafCustomRule#tags}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action"></a>

```go
Action AppsecWafCustomRuleAction
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition"></a>

```go
Condition interface{}
```

- *Type:* interface{}

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#condition AppsecWafCustomRule#condition}

---

##### `PathGlob`<sup>Optional</sup> <a name="PathGlob" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob"></a>

```go
PathGlob *string
```

- *Type:* *string

The path glob for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#path_glob AppsecWafCustomRule#path_glob}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope"></a>

```go
Scope interface{}
```

- *Type:* interface{}

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#scope AppsecWafCustomRule#scope}

---

### AppsecWafCustomRuleScope <a name="AppsecWafCustomRuleScope" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

&appsecwafcustomrule.AppsecWafCustomRuleScope {
	Env: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env">Env</a></code> | <code>*string</code> | The environment scope for the WAF custom rule. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service">Service</a></code> | <code>*string</code> | The service scope for the WAF custom rule. |

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env"></a>

```go
Env *string
```

- *Type:* *string

The environment scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#env AppsecWafCustomRule#env}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/appsec_waf_custom_rule#service AppsecWafCustomRule#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafCustomRuleActionOutputReference <a name="AppsecWafCustomRuleActionOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsecWafCustomRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters"></a>

```go
func PutParameters(value AppsecWafCustomRuleActionParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters"></a>

```go
func Parameters() AppsecWafCustomRuleActionParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleActionParametersOutputReference <a name="AppsecWafCustomRuleActionParametersOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleActionParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsecWafCustomRuleActionParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleConditionList <a name="AppsecWafCustomRuleConditionList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsecWafCustomRuleConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get"></a>

```go
func Get(index *f64) AppsecWafCustomRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleConditionOutputReference <a name="AppsecWafCustomRuleConditionOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsecWafCustomRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters"></a>

```go
func PutParameters(value AppsecWafCustomRuleConditionParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters"></a>

```go
func Parameters() AppsecWafCustomRuleConditionParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleConditionParametersInputList <a name="AppsecWafCustomRuleConditionParametersInputList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleConditionParametersInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsecWafCustomRuleConditionParametersInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get"></a>

```go
func Get(index *f64) AppsecWafCustomRuleConditionParametersInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleConditionParametersInputOutputReference <a name="AppsecWafCustomRuleConditionParametersInputOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleConditionParametersInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsecWafCustomRuleConditionParametersInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath">ResetKeyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetKeyPath` <a name="ResetKeyPath" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath"></a>

```go
func ResetKeyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput">KeyPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath">KeyPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `KeyPathInput`<sup>Optional</sup> <a name="KeyPathInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput"></a>

```go
func KeyPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `KeyPath`<sup>Required</sup> <a name="KeyPath" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath"></a>

```go
func KeyPath() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleConditionParametersOptionsOutputReference <a name="AppsecWafCustomRuleConditionParametersOptionsOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleConditionParametersOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsecWafCustomRuleConditionParametersOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive"></a>

```go
func ResetCaseSensitive()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength"></a>

```go
func ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleConditionParametersOutputReference <a name="AppsecWafCustomRuleConditionParametersOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleConditionParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsecWafCustomRuleConditionParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList">ResetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions"></a>

```go
func PutOptions(value AppsecWafCustomRuleConditionParametersOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---

##### `ResetData` <a name="ResetData" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData"></a>

```go
func ResetData()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetList` <a name="ResetList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList"></a>

```go
func ResetList()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput">ListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list">List</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input"></a>

```go
func Input() AppsecWafCustomRuleConditionParametersInputList
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options"></a>

```go
func Options() AppsecWafCustomRuleConditionParametersOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput"></a>

```go
func ListInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list"></a>

```go
func List() *[]*string
```

- *Type:* *[]*string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleScopeList <a name="AppsecWafCustomRuleScopeList" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsecWafCustomRuleScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get"></a>

```go
func Get(index *f64) AppsecWafCustomRuleScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsecWafCustomRuleScopeOutputReference <a name="AppsecWafCustomRuleScopeOutputReference" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/appsecwafcustomrule"

appsecwafcustomrule.NewAppsecWafCustomRuleScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsecWafCustomRuleScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput">EnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env">Env</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput"></a>

```go
func EnvInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env"></a>

```go
func Env() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



