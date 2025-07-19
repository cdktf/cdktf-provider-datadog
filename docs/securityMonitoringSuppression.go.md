# `securityMonitoringSuppression` Submodule <a name="`securityMonitoringSuppression` Submodule" id="@cdktf/provider-datadog.securityMonitoringSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringSuppression <a name="SecurityMonitoringSuppression" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression datadog_security_monitoring_suppression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringsuppression"

securitymonitoringsuppression.NewSecurityMonitoringSuppression(scope Construct, id *string, config SecurityMonitoringSuppressionConfig) SecurityMonitoringSuppression
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig">SecurityMonitoringSuppressionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig">SecurityMonitoringSuppressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery">ResetDataExclusionQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery">ResetSuppressionQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDataExclusionQuery` <a name="ResetDataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDataExclusionQuery"></a>

```go
func ResetDataExclusionQuery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetExpirationDate"></a>

```go
func ResetExpirationDate()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetSuppressionQuery` <a name="ResetSuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.resetSuppressionQuery"></a>

```go
func ResetSuppressionQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringsuppression"

securitymonitoringsuppression.SecurityMonitoringSuppression_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringsuppression"

securitymonitoringsuppression.SecurityMonitoringSuppression_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringsuppression"

securitymonitoringsuppression.SecurityMonitoringSuppression_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringsuppression"

securitymonitoringsuppression.SecurityMonitoringSuppression_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityMonitoringSuppression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityMonitoringSuppression to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityMonitoringSuppression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringSuppression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput">DataExclusionQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput">ExpirationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput">RuleQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput">SuppressionQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery">DataExclusionQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery">RuleQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery">SuppressionQuery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DataExclusionQueryInput`<sup>Optional</sup> <a name="DataExclusionQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQueryInput"></a>

```go
func DataExclusionQueryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDateInput"></a>

```go
func ExpirationDateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleQueryInput`<sup>Optional</sup> <a name="RuleQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQueryInput"></a>

```go
func RuleQueryInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `SuppressionQueryInput`<sup>Optional</sup> <a name="SuppressionQueryInput" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQueryInput"></a>

```go
func SuppressionQueryInput() *string
```

- *Type:* *string

---

##### `DataExclusionQuery`<sup>Required</sup> <a name="DataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.dataExclusionQuery"></a>

```go
func DataExclusionQuery() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.ruleQuery"></a>

```go
func RuleQuery() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `SuppressionQuery`<sup>Required</sup> <a name="SuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.suppressionQuery"></a>

```go
func SuppressionQuery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppression.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringSuppressionConfig <a name="SecurityMonitoringSuppressionConfig" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringsuppression"

&securitymonitoringsuppression.SecurityMonitoringSuppressionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	RuleQuery: *string,
	DataExclusionQuery: *string,
	Description: *string,
	ExpirationDate: *string,
	StartDate: *string,
	SuppressionQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the suppression rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery">RuleQuery</a></code> | <code>*string</code> | The rule query of the suppression rule, with the same syntax as the search bar for detection rules. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery">DataExclusionQuery</a></code> | <code>*string</code> | An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description">Description</a></code> | <code>*string</code> | A description for the suppression rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.startDate">StartDate</a></code> | <code>*string</code> | A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery">SuppressionQuery</a></code> | <code>*string</code> | The suppression query of the suppression rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the suppression rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#enabled SecurityMonitoringSuppression#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#name SecurityMonitoringSuppression#name}

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.ruleQuery"></a>

```go
RuleQuery *string
```

- *Type:* *string

The rule query of the suppression rule, with the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#rule_query SecurityMonitoringSuppression#rule_query}

---

##### `DataExclusionQuery`<sup>Optional</sup> <a name="DataExclusionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.dataExclusionQuery"></a>

```go
DataExclusionQuery *string
```

- *Type:* *string

An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule.

Events matching this query are ignored by any detection rules referenced in the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#data_exclusion_query SecurityMonitoringSuppression#data_exclusion_query}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the suppression rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#description SecurityMonitoringSuppression#description}

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.expirationDate"></a>

```go
ExpirationDate *string
```

- *Type:* *string

A RFC3339 timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#expiration_date SecurityMonitoringSuppression#expiration_date}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

A RFC3339 timestamp giving a start date for the suppression rule. Before this date, it doesn't suppress signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#start_date SecurityMonitoringSuppression#start_date}

---

##### `SuppressionQuery`<sup>Optional</sup> <a name="SuppressionQuery" id="@cdktf/provider-datadog.securityMonitoringSuppression.SecurityMonitoringSuppressionConfig.property.suppressionQuery"></a>

```go
SuppressionQuery *string
```

- *Type:* *string

The suppression query of the suppression rule.

If a signal matches this query, it is suppressed and is not triggered. It uses the same syntax as the queries to search signals in the Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/security_monitoring_suppression#suppression_query SecurityMonitoringSuppression#suppression_query}

---



