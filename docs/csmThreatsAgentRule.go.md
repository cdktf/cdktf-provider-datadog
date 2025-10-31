# `csmThreatsAgentRule` Submodule <a name="`csmThreatsAgentRule` Submodule" id="@cdktf/provider-datadog.csmThreatsAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsmThreatsAgentRule <a name="CsmThreatsAgentRule" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule datadog_csm_threats_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.NewCsmThreatsAgentRule(scope Construct, id *string, config CsmThreatsAgentRuleConfig) CsmThreatsAgentRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig">CsmThreatsAgentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig">CsmThreatsAgentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags">ResetProductTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetActions"></a>

```go
func ResetActions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetProductTags` <a name="ResetProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.resetProductTags"></a>

```go
func ResetProductTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.CsmThreatsAgentRule_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.CsmThreatsAgentRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.CsmThreatsAgentRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.CsmThreatsAgentRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CsmThreatsAgentRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CsmThreatsAgentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CsmThreatsAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CsmThreatsAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput">ProductTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags">ProductTags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actions"></a>

```go
func Actions() CsmThreatsAgentRuleActionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList">CsmThreatsAgentRuleActionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProductTagsInput`<sup>Optional</sup> <a name="ProductTagsInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTagsInput"></a>

```go
func ProductTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `ProductTags`<sup>Required</sup> <a name="ProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.productTags"></a>

```go
func ProductTags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CsmThreatsAgentRuleActions <a name="CsmThreatsAgentRuleActions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

&csmthreatsagentrule.CsmThreatsAgentRuleActions {
	Hash: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash,
	Set: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set">Set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a></code> | set block. |

---

##### `Hash`<sup>Optional</sup> <a name="Hash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.hash"></a>

```go
Hash CsmThreatsAgentRuleActionsHash
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#hash CsmThreatsAgentRule#hash}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActions.property.set"></a>

```go
Set CsmThreatsAgentRuleActionsSet
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#set CsmThreatsAgentRule#set}

---

### CsmThreatsAgentRuleActionsHash <a name="CsmThreatsAgentRuleActionsHash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

&csmthreatsagentrule.CsmThreatsAgentRuleActionsHash {

}
```


### CsmThreatsAgentRuleActionsSet <a name="CsmThreatsAgentRuleActionsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

&csmthreatsagentrule.CsmThreatsAgentRuleActionsSet {
	Name: *string,
	Append: interface{},
	DefaultValue: *string,
	Expression: *string,
	Field: *string,
	Inherited: interface{},
	Scope: *string,
	Size: *f64,
	Ttl: *f64,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name">Name</a></code> | <code>*string</code> | The name of the set action. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append">Append</a></code> | <code>interface{}</code> | Whether to append to the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | The default value to set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.expression">Expression</a></code> | <code>*string</code> | The expression to use for the set action. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field">Field</a></code> | <code>*string</code> | The field to get the value from. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.inherited">Inherited</a></code> | <code>interface{}</code> | Whether the set action is inherited. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope">Scope</a></code> | <code>*string</code> | The scope of the set action (process, container, cgroup, or empty). |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size">Size</a></code> | <code>*f64</code> | The maximum size of the set. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl">Ttl</a></code> | <code>*f64</code> | The time to live for the set in nanoseconds. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value">Value</a></code> | <code>*string</code> | The value to set. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the set action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `Append`<sup>Optional</sup> <a name="Append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.append"></a>

```go
Append interface{}
```

- *Type:* interface{}

Whether to append to the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#append CsmThreatsAgentRule#append}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

The default value to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#default_value CsmThreatsAgentRule#default_value}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The expression to use for the set action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.field"></a>

```go
Field *string
```

- *Type:* *string

The field to get the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#field CsmThreatsAgentRule#field}

---

##### `Inherited`<sup>Optional</sup> <a name="Inherited" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.inherited"></a>

```go
Inherited interface{}
```

- *Type:* interface{}

Whether the set action is inherited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#inherited CsmThreatsAgentRule#inherited}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope of the set action (process, container, cgroup, or empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#scope CsmThreatsAgentRule#scope}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The maximum size of the set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#size CsmThreatsAgentRule#size}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The time to live for the set in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#ttl CsmThreatsAgentRule#ttl}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#value CsmThreatsAgentRule#value}

---

### CsmThreatsAgentRuleConfig <a name="CsmThreatsAgentRuleConfig" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

&csmthreatsagentrule.CsmThreatsAgentRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Expression: *string,
	Name: *string,
	Actions: interface{},
	Description: *string,
	Enabled: interface{},
	PolicyId: *string,
	ProductTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression">Expression</a></code> | <code>*string</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description">Description</a></code> | <code>*string</code> | A description for the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether the Agent rule is enabled. Must not be used without policy_id. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The ID of the agent policy in which the rule is saved. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags">ProductTags</a></code> | <code>*[]*string</code> | The list of product tags associated with the rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#expression CsmThreatsAgentRule#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#name CsmThreatsAgentRule#name}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#actions CsmThreatsAgentRule#actions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#description CsmThreatsAgentRule#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether the Agent rule is enabled. Must not be used without policy_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#enabled CsmThreatsAgentRule#enabled}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The ID of the agent policy in which the rule is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#policy_id CsmThreatsAgentRule#policy_id}

---

##### `ProductTags`<sup>Optional</sup> <a name="ProductTags" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleConfig.property.productTags"></a>

```go
ProductTags *[]*string
```

- *Type:* *[]*string

The list of product tags associated with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/csm_threats_agent_rule#product_tags CsmThreatsAgentRule#product_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### CsmThreatsAgentRuleActionsHashOutputReference <a name="CsmThreatsAgentRuleActionsHashOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.NewCsmThreatsAgentRuleActionsHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsmThreatsAgentRuleActionsHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsmThreatsAgentRuleActionsList <a name="CsmThreatsAgentRuleActionsList" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.NewCsmThreatsAgentRuleActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CsmThreatsAgentRuleActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get"></a>

```go
func Get(index *f64) CsmThreatsAgentRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsmThreatsAgentRuleActionsOutputReference <a name="CsmThreatsAgentRuleActionsOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.NewCsmThreatsAgentRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CsmThreatsAgentRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash">PutHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHash` <a name="PutHash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash"></a>

```go
func PutHash(value CsmThreatsAgentRuleActionsHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHash">CsmThreatsAgentRuleActionsHash</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet"></a>

```go
func PutSet(value CsmThreatsAgentRuleActionsSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSet">CsmThreatsAgentRuleActionsSet</a>

---

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference">CsmThreatsAgentRuleActionsHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set">Set</a></code> | <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hashInput">HashInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput">SetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hash"></a>

```go
func Hash() CsmThreatsAgentRuleActionsHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsHashOutputReference">CsmThreatsAgentRuleActionsHashOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.set"></a>

```go
func Set() CsmThreatsAgentRuleActionsSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference">CsmThreatsAgentRuleActionsSetOutputReference</a>

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.hashInput"></a>

```go
func HashInput() interface{}
```

- *Type:* interface{}

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.setInput"></a>

```go
func SetInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsmThreatsAgentRuleActionsSetOutputReference <a name="CsmThreatsAgentRuleActionsSetOutputReference" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/csmthreatsagentrule"

csmthreatsagentrule.NewCsmThreatsAgentRuleActionsSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsmThreatsAgentRuleActionsSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend">ResetAppend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetInherited">ResetInherited</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppend` <a name="ResetAppend" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetAppend"></a>

```go
func ResetAppend()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetInherited` <a name="ResetInherited" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetInherited"></a>

```go
func ResetInherited()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput">AppendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.inheritedInput">InheritedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append">Append</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.inherited">Inherited</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppendInput`<sup>Optional</sup> <a name="AppendInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.appendInput"></a>

```go
func AppendInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `InheritedInput`<sup>Optional</sup> <a name="InheritedInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.inheritedInput"></a>

```go
func InheritedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Append`<sup>Required</sup> <a name="Append" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.append"></a>

```go
func Append() interface{}
```

- *Type:* interface{}

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.inherited"></a>

```go
func Inherited() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.csmThreatsAgentRule.CsmThreatsAgentRuleActionsSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



