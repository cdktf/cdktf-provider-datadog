# `securityNotificationRule` Submodule <a name="`securityNotificationRule` Submodule" id="@cdktf/provider-datadog.securityNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationRule <a name="SecurityNotificationRule" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule datadog_security_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

securitynotificationrule.NewSecurityNotificationRule(scope Construct, id *string, config SecurityNotificationRuleConfig) SecurityNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig">SecurityNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig">SecurityNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors">ResetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation">ResetTimeAggregation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors"></a>

```go
func PutSelectors(value SecurityNotificationRuleSelectors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors"></a>

```go
func ResetSelectors()
```

##### `ResetTimeAggregation` <a name="ResetTimeAggregation" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation"></a>

```go
func ResetTimeAggregation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

securitynotificationrule.SecurityNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

securitynotificationrule.SecurityNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

securitynotificationrule.SecurityNotificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

securitynotificationrule.SecurityNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle">CreatedByHandle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName">CreatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt">ModifiedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle">ModifiedByHandle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName">ModifiedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput">TargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput">TimeAggregationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation">TimeAggregation</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedByHandle`<sup>Required</sup> <a name="CreatedByHandle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle"></a>

```go
func CreatedByHandle() *string
```

- *Type:* *string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName"></a>

```go
func CreatedByName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt"></a>

```go
func ModifiedAt() *f64
```

- *Type:* *f64

---

##### `ModifiedByHandle`<sup>Required</sup> <a name="ModifiedByHandle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle"></a>

```go
func ModifiedByHandle() *string
```

- *Type:* *string

---

##### `ModifiedByName`<sup>Required</sup> <a name="ModifiedByName" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName"></a>

```go
func ModifiedByName() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors"></a>

```go
func Selectors() SecurityNotificationRuleSelectorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput"></a>

```go
func TargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeAggregationInput`<sup>Optional</sup> <a name="TimeAggregationInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput"></a>

```go
func TimeAggregationInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `TimeAggregation`<sup>Required</sup> <a name="TimeAggregation" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation"></a>

```go
func TimeAggregation() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationRuleConfig <a name="SecurityNotificationRuleConfig" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

&securitynotificationrule.SecurityNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Targets: *[]*string,
	Enabled: interface{},
	Selectors: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityNotificationRule.SecurityNotificationRuleSelectors,
	TimeAggregation: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the rule (must be unique). |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets">Targets</a></code> | <code>*[]*string</code> | The list of handle targets for the notifications. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | selectors block. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation">TimeAggregation</a></code> | <code>*f64</code> | Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the rule (must be unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets"></a>

```go
Targets *[]*string
```

- *Type:* *[]*string

The list of handle targets for the notifications.

A target must be prefixed with an

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors"></a>

```go
Selectors SecurityNotificationRuleSelectors
```

- *Type:* <a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}

---

##### `TimeAggregation`<sup>Optional</sup> <a name="TimeAggregation" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation"></a>

```go
TimeAggregation *f64
```

- *Type:* *f64

Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}

---

### SecurityNotificationRuleSelectors <a name="SecurityNotificationRuleSelectors" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

&securitynotificationrule.SecurityNotificationRuleSelectors {
	RuleTypes: *[]*string,
	TriggerSource: *string,
	Query: *string,
	Severities: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes">RuleTypes</a></code> | <code>*[]*string</code> | Specifies security rule types for filtering signals and vulnerabilities that generate notifications. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | The type of security issues the rule applies to. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query">Query</a></code> | <code>*string</code> | Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities">Severities</a></code> | <code>*[]*string</code> | The security rules severities to consider. |

---

##### `RuleTypes`<sup>Required</sup> <a name="RuleTypes" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes"></a>

```go
RuleTypes *[]*string
```

- *Type:* *[]*string

Specifies security rule types for filtering signals and vulnerabilities that generate notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#rule_types SecurityNotificationRule#rule_types}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource"></a>

```go
TriggerSource *string
```

- *Type:* *string

The type of security issues the rule applies to.

Use `security_signals` for rules based on security signals and `security_findings` for those based on vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#trigger_source SecurityNotificationRule#trigger_source}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query"></a>

```go
Query *string
```

- *Type:* *string

Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#query SecurityNotificationRule#query}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities"></a>

```go
Severities *[]*string
```

- *Type:* *[]*string

The security rules severities to consider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/security_notification_rule#severities SecurityNotificationRule#severities}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityNotificationRuleSelectorsOutputReference <a name="SecurityNotificationRuleSelectorsOutputReference" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitynotificationrule"

securitynotificationrule.NewSecurityNotificationRuleSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityNotificationRuleSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities"></a>

```go
func ResetSeverities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput">RuleTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes">RuleTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RuleTypesInput`<sup>Optional</sup> <a name="RuleTypesInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput"></a>

```go
func RuleTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput"></a>

```go
func SeveritiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput"></a>

```go
func TriggerSourceInput() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RuleTypes`<sup>Required</sup> <a name="RuleTypes" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes"></a>

```go
func RuleTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource"></a>

```go
func TriggerSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



