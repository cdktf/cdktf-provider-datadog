# `onCallEscalationPolicy` Submodule <a name="`onCallEscalationPolicy` Submodule" id="@cdktf/provider-datadog.onCallEscalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallEscalationPolicy <a name="OnCallEscalationPolicy" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy datadog_on_call_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.NewOnCallEscalationPolicy(scope Construct, id *string, config OnCallEscalationPolicyConfig) OnCallEscalationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig">OnCallEscalationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig">OnCallEscalationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd">ResetResolvePageOnPolicyEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep">ResetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStep` <a name="PutStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep"></a>

```go
func PutStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.putStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResolvePageOnPolicyEnd` <a name="ResetResolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetResolvePageOnPolicyEnd"></a>

```go
func ResetResolvePageOnPolicyEnd()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetStep` <a name="ResetStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetStep"></a>

```go
func ResetStep()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.resetTeams"></a>

```go
func ResetTeams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.OnCallEscalationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.OnCallEscalationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.OnCallEscalationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.OnCallEscalationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OnCallEscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OnCallEscalationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OnCallEscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OnCallEscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step">Step</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput">ResolvePageOnPolicyEndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput">StepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd">ResolvePageOnPolicyEnd</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.step"></a>

```go
func Step() OnCallEscalationPolicyStepList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList">OnCallEscalationPolicyStepList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResolvePageOnPolicyEndInput`<sup>Optional</sup> <a name="ResolvePageOnPolicyEndInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEndInput"></a>

```go
func ResolvePageOnPolicyEndInput() interface{}
```

- *Type:* interface{}

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.stepInput"></a>

```go
func StepInput() interface{}
```

- *Type:* interface{}

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResolvePageOnPolicyEnd`<sup>Required</sup> <a name="ResolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.resolvePageOnPolicyEnd"></a>

```go
func ResolvePageOnPolicyEnd() interface{}
```

- *Type:* interface{}

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallEscalationPolicyConfig <a name="OnCallEscalationPolicyConfig" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

&oncallescalationpolicy.OnCallEscalationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResolvePageOnPolicyEnd: interface{},
	Retries: *f64,
	Step: interface{},
	Teams: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | A human-readable name for the escalation policy. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd">ResolvePageOnPolicyEnd</a></code> | <code>interface{}</code> | If true, pages will be automatically resolved if unacknowledged after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries">Retries</a></code> | <code>*f64</code> | If set, policy will be retried this many times after the final step. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step">Step</a></code> | <code>interface{}</code> | step block. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams">Teams</a></code> | <code>*[]*string</code> | A list of team ids associated with the escalation policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name for the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#name OnCallEscalationPolicy#name}

---

##### `ResolvePageOnPolicyEnd`<sup>Optional</sup> <a name="ResolvePageOnPolicyEnd" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.resolvePageOnPolicyEnd"></a>

```go
ResolvePageOnPolicyEnd interface{}
```

- *Type:* interface{}

If true, pages will be automatically resolved if unacknowledged after the final step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#resolve_page_on_policy_end OnCallEscalationPolicy#resolve_page_on_policy_end}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

If set, policy will be retried this many times after the final step.

Must be in the range 0-10. Value must be between 0 and 10. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#retries OnCallEscalationPolicy#retries}

---

##### `Step`<sup>Optional</sup> <a name="Step" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.step"></a>

```go
Step interface{}
```

- *Type:* interface{}

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#step OnCallEscalationPolicy#step}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyConfig.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

A list of team ids associated with the escalation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#teams OnCallEscalationPolicy#teams}

---

### OnCallEscalationPolicyStep <a name="OnCallEscalationPolicyStep" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

&oncallescalationpolicy.OnCallEscalationPolicyStep {
	EscalateAfterSeconds: *f64,
	Assignment: *string,
	Target: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds">EscalateAfterSeconds</a></code> | <code>*f64</code> | Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment">Assignment</a></code> | <code>*string</code> | Specifies how this escalation step will assign targets. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target">Target</a></code> | <code>interface{}</code> | target block. |

---

##### `EscalateAfterSeconds`<sup>Required</sup> <a name="EscalateAfterSeconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.escalateAfterSeconds"></a>

```go
EscalateAfterSeconds *f64
```

- *Type:* *f64

Defines how many seconds to wait before escalating to the next step. Value must be between 60 and 36000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#escalate_after_seconds OnCallEscalationPolicy#escalate_after_seconds}

---

##### `Assignment`<sup>Optional</sup> <a name="Assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.assignment"></a>

```go
Assignment *string
```

- *Type:* *string

Specifies how this escalation step will assign targets.

Can be `default` (page all targets at once) or `round-robin`. Valid values are `assignment`, `round-robin`. Defaults to `"default"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#assignment OnCallEscalationPolicy#assignment}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStep.property.target"></a>

```go
Target interface{}
```

- *Type:* interface{}

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#target OnCallEscalationPolicy#target}

---

### OnCallEscalationPolicyStepTarget <a name="OnCallEscalationPolicyStepTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

&oncallescalationpolicy.OnCallEscalationPolicyStepTarget {
	Schedule: *string,
	Team: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule">Schedule</a></code> | <code>*string</code> | Targeted schedule ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team">Team</a></code> | <code>*string</code> | Targeted team ID. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user">User</a></code> | <code>*string</code> | Targeted user ID. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Targeted schedule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#schedule OnCallEscalationPolicy#schedule}

---

##### `Team`<sup>Optional</sup> <a name="Team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.team"></a>

```go
Team *string
```

- *Type:* *string

Targeted team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#team OnCallEscalationPolicy#team}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTarget.property.user"></a>

```go
User *string
```

- *Type:* *string

Targeted user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/on_call_escalation_policy#user OnCallEscalationPolicy#user}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallEscalationPolicyStepList <a name="OnCallEscalationPolicyStepList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.NewOnCallEscalationPolicyStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OnCallEscalationPolicyStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get"></a>

```go
func Get(index *f64) OnCallEscalationPolicyStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallEscalationPolicyStepOutputReference <a name="OnCallEscalationPolicyStepOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.NewOnCallEscalationPolicyStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OnCallEscalationPolicyStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment">ResetAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget"></a>

```go
func PutTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.putTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssignment` <a name="ResetAssignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetAssignment"></a>

```go
func ResetAssignment()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput">AssignmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput">EscalateAfterSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment">Assignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds">EscalateAfterSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.target"></a>

```go
func Target() OnCallEscalationPolicyStepTargetList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList">OnCallEscalationPolicyStepTargetList</a>

---

##### `AssignmentInput`<sup>Optional</sup> <a name="AssignmentInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignmentInput"></a>

```go
func AssignmentInput() *string
```

- *Type:* *string

---

##### `EscalateAfterSecondsInput`<sup>Optional</sup> <a name="EscalateAfterSecondsInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSecondsInput"></a>

```go
func EscalateAfterSecondsInput() *f64
```

- *Type:* *f64

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `Assignment`<sup>Required</sup> <a name="Assignment" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.assignment"></a>

```go
func Assignment() *string
```

- *Type:* *string

---

##### `EscalateAfterSeconds`<sup>Required</sup> <a name="EscalateAfterSeconds" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.escalateAfterSeconds"></a>

```go
func EscalateAfterSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallEscalationPolicyStepTargetList <a name="OnCallEscalationPolicyStepTargetList" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.NewOnCallEscalationPolicyStepTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OnCallEscalationPolicyStepTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get"></a>

```go
func Get(index *f64) OnCallEscalationPolicyStepTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallEscalationPolicyStepTargetOutputReference <a name="OnCallEscalationPolicyStepTargetOutputReference" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallescalationpolicy"

oncallescalationpolicy.NewOnCallEscalationPolicyStepTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OnCallEscalationPolicyStepTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam">ResetTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTeam` <a name="ResetTeam" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetTeam"></a>

```go
func ResetTeam()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput">TeamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team">Team</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TeamInput`<sup>Optional</sup> <a name="TeamInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.teamInput"></a>

```go
func TeamInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.team"></a>

```go
func Team() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallEscalationPolicy.OnCallEscalationPolicyStepTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



