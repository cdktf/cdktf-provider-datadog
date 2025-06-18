# `onCallTeamRoutingRules` Submodule <a name="`onCallTeamRoutingRules` Submodule" id="@cdktf/provider-datadog.onCallTeamRoutingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallTeamRoutingRules <a name="OnCallTeamRoutingRules" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules datadog_on_call_team_routing_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRules(scope Construct, id *string, config OnCallTeamRoutingRulesConfig) OnCallTeamRoutingRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig">OnCallTeamRoutingRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig">OnCallTeamRoutingRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule"></a>

```go
func ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OnCallTeamRoutingRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.OnCallTeamRoutingRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.OnCallTeamRoutingRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.OnCallTeamRoutingRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.OnCallTeamRoutingRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OnCallTeamRoutingRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OnCallTeamRoutingRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OnCallTeamRoutingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OnCallTeamRoutingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule"></a>

```go
func Rule() OnCallTeamRoutingRulesRuleList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallTeamRoutingRulesConfig <a name="OnCallTeamRoutingRulesConfig" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id">Id</a></code> | <code>*string</code> | ID of the team to associate the routing rules with. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the team to associate the routing rules with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}

---

### OnCallTeamRoutingRulesRule <a name="OnCallTeamRoutingRulesRule" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesRule {
	Action: interface{},
	EscalationPolicy: *string,
	Query: *string,
	TimeRestrictions: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions,
	Urgency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy">EscalationPolicy</a></code> | <code>*string</code> | ID of the policy to be applied when this routing rule matches. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query">Query</a></code> | <code>*string</code> | Defines the query or condition that triggers this routing rule. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions">TimeRestrictions</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | time_restrictions block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency">Urgency</a></code> | <code>*string</code> | Defines the urgency for pages created via this rule. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#action OnCallTeamRoutingRules#action}

---

##### `EscalationPolicy`<sup>Optional</sup> <a name="EscalationPolicy" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy"></a>

```go
EscalationPolicy *string
```

- *Type:* *string

ID of the policy to be applied when this routing rule matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#escalation_policy OnCallTeamRoutingRules#escalation_policy}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query"></a>

```go
Query *string
```

- *Type:* *string

Defines the query or condition that triggers this routing rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#query OnCallTeamRoutingRules#query}

---

##### `TimeRestrictions`<sup>Optional</sup> <a name="TimeRestrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions"></a>

```go
TimeRestrictions OnCallTeamRoutingRulesRuleTimeRestrictions
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

time_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#time_restrictions OnCallTeamRoutingRules#time_restrictions}

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency"></a>

```go
Urgency *string
```

- *Type:* *string

Defines the urgency for pages created via this rule.

Only valid if `escalation_policy` is set. Valid values are `high`, `low`, `dynamic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#urgency OnCallTeamRoutingRules#urgency}

---

### OnCallTeamRoutingRulesRuleAction <a name="OnCallTeamRoutingRulesRuleAction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesRuleAction {
	SendSlackMessage: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage,
	SendTeamsMessage: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage">SendSlackMessage</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | send_slack_message block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage">SendTeamsMessage</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | send_teams_message block. |

---

##### `SendSlackMessage`<sup>Optional</sup> <a name="SendSlackMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage"></a>

```go
SendSlackMessage OnCallTeamRoutingRulesRuleActionSendSlackMessage
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

send_slack_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#send_slack_message OnCallTeamRoutingRules#send_slack_message}

---

##### `SendTeamsMessage`<sup>Optional</sup> <a name="SendTeamsMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage"></a>

```go
SendTeamsMessage OnCallTeamRoutingRulesRuleActionSendTeamsMessage
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

send_teams_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#send_teams_message OnCallTeamRoutingRules#send_teams_message}

---

### OnCallTeamRoutingRulesRuleActionSendSlackMessage <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesRuleActionSendSlackMessage {
	Channel: *string,
	Workspace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel">Channel</a></code> | <code>*string</code> | Slack channel ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace">Workspace</a></code> | <code>*string</code> | Slack workspace ID. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace"></a>

```go
Workspace *string
```

- *Type:* *string

Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#workspace OnCallTeamRoutingRules#workspace}

---

### OnCallTeamRoutingRulesRuleActionSendTeamsMessage <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage {
	Channel: *string,
	Team: *string,
	Tenant: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel">Channel</a></code> | <code>*string</code> | Teams channel ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team">Team</a></code> | <code>*string</code> | Teams team ID. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant">Tenant</a></code> | <code>*string</code> | Teams tenant ID. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Teams channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `Team`<sup>Optional</sup> <a name="Team" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team"></a>

```go
Team *string
```

- *Type:* *string

Teams team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#team OnCallTeamRoutingRules#team}

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Teams tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#tenant OnCallTeamRoutingRules#tenant}

---

### OnCallTeamRoutingRulesRuleTimeRestrictions <a name="OnCallTeamRoutingRulesRuleTimeRestrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesRuleTimeRestrictions {
	Restriction: interface{},
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction">Restriction</a></code> | <code>interface{}</code> | restriction block. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone">TimeZone</a></code> | <code>*string</code> | Specifies the time zone applicable to the restrictions, e.g. `America/New_York`. |

---

##### `Restriction`<sup>Optional</sup> <a name="Restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction"></a>

```go
Restriction interface{}
```

- *Type:* interface{}

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}

---

### OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

&oncallteamroutingrules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction {
	EndDay: *string,
	EndTime: *string,
	StartDay: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay">EndDay</a></code> | <code>*string</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime">EndTime</a></code> | <code>*string</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay">StartDay</a></code> | <code>*string</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime">StartTime</a></code> | <code>*string</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `EndDay`<sup>Optional</sup> <a name="EndDay" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay"></a>

```go
EndDay *string
```

- *Type:* *string

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#end_day OnCallTeamRoutingRules#end_day}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#end_time OnCallTeamRoutingRules#end_time}

---

##### `StartDay`<sup>Optional</sup> <a name="StartDay" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay"></a>

```go
StartDay *string
```

- *Type:* *string

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#start_day OnCallTeamRoutingRules#start_day}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_team_routing_rules#start_time OnCallTeamRoutingRules#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallTeamRoutingRulesRuleActionList <a name="OnCallTeamRoutingRulesRuleActionList" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OnCallTeamRoutingRulesRuleActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get"></a>

```go
func Get(index *f64) OnCallTeamRoutingRulesRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleActionOutputReference <a name="OnCallTeamRoutingRulesRuleActionOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OnCallTeamRoutingRulesRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage">PutSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage">PutSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage">ResetSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage">ResetSendTeamsMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSendSlackMessage` <a name="PutSendSlackMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage"></a>

```go
func PutSendSlackMessage(value OnCallTeamRoutingRulesRuleActionSendSlackMessage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---

##### `PutSendTeamsMessage` <a name="PutSendTeamsMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage"></a>

```go
func PutSendTeamsMessage(value OnCallTeamRoutingRulesRuleActionSendTeamsMessage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---

##### `ResetSendSlackMessage` <a name="ResetSendSlackMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage"></a>

```go
func ResetSendSlackMessage()
```

##### `ResetSendTeamsMessage` <a name="ResetSendTeamsMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage"></a>

```go
func ResetSendTeamsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage">SendSlackMessage</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage">SendTeamsMessage</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput">SendSlackMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput">SendTeamsMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SendSlackMessage`<sup>Required</sup> <a name="SendSlackMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage"></a>

```go
func SendSlackMessage() OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a>

---

##### `SendTeamsMessage`<sup>Required</sup> <a name="SendTeamsMessage" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage"></a>

```go
func SendTeamsMessage() OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a>

---

##### `SendSlackMessageInput`<sup>Optional</sup> <a name="SendSlackMessageInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput"></a>

```go
func SendSlackMessageInput() interface{}
```

- *Type:* interface{}

---

##### `SendTeamsMessageInput`<sup>Optional</sup> <a name="SendTeamsMessageInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput"></a>

```go
func SendTeamsMessageInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam">ResetTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant">ResetTenant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetTeam` <a name="ResetTeam" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam"></a>

```go
func ResetTeam()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant"></a>

```go
func ResetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput">TeamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team">Team</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `TeamInput`<sup>Optional</sup> <a name="TeamInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput"></a>

```go
func TeamInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team"></a>

```go
func Team() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleList <a name="OnCallTeamRoutingRulesRuleList" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OnCallTeamRoutingRulesRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get"></a>

```go
func Get(index *f64) OnCallTeamRoutingRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleOutputReference <a name="OnCallTeamRoutingRulesRuleOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OnCallTeamRoutingRulesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions">PutTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy">ResetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions">ResetTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency">ResetUrgency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeRestrictions` <a name="PutTimeRestrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions"></a>

```go
func PutTimeRestrictions(value OnCallTeamRoutingRulesRuleTimeRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetEscalationPolicy` <a name="ResetEscalationPolicy" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy"></a>

```go
func ResetEscalationPolicy()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetTimeRestrictions` <a name="ResetTimeRestrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions"></a>

```go
func ResetTimeRestrictions()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency"></a>

```go
func ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions">TimeRestrictions</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput">EscalationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput">TimeRestrictionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy">EscalationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency">Urgency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action"></a>

```go
func Action() OnCallTeamRoutingRulesRuleActionList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeRestrictions`<sup>Required</sup> <a name="TimeRestrictions" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions"></a>

```go
func TimeRestrictions() OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `EscalationPolicyInput`<sup>Optional</sup> <a name="EscalationPolicyInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput"></a>

```go
func EscalationPolicyInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `TimeRestrictionsInput`<sup>Optional</sup> <a name="TimeRestrictionsInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput"></a>

```go
func TimeRestrictionsInput() interface{}
```

- *Type:* interface{}

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput"></a>

```go
func UrgencyInput() *string
```

- *Type:* *string

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy"></a>

```go
func EscalationPolicy() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency"></a>

```go
func Urgency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction">PutRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction">ResetRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestriction` <a name="PutRestriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction"></a>

```go
func PutRestriction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRestriction` <a name="ResetRestriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction"></a>

```go
func ResetRestriction()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction">Restriction</a></code> | <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput">RestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Restriction`<sup>Required</sup> <a name="Restriction" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction"></a>

```go
func Restriction() OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a>

---

##### `RestrictionInput`<sup>Optional</sup> <a name="RestrictionInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput"></a>

```go
func RestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get"></a>

```go
func Get(index *f64) OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/oncallteamroutingrules"

oncallteamroutingrules.NewOnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay">ResetEndDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay">ResetStartDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDay` <a name="ResetEndDay" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay"></a>

```go
func ResetEndDay()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartDay` <a name="ResetStartDay" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay"></a>

```go
func ResetStartDay()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput">EndDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput">StartDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay">EndDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay">StartDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDayInput`<sup>Optional</sup> <a name="EndDayInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput"></a>

```go
func EndDayInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartDayInput`<sup>Optional</sup> <a name="StartDayInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput"></a>

```go
func StartDayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndDay`<sup>Required</sup> <a name="EndDay" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay"></a>

```go
func EndDay() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay"></a>

```go
func StartDay() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



