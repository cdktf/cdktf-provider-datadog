# `complianceCustomFramework` Submodule <a name="`complianceCustomFramework` Submodule" id="@cdktf/provider-datadog.complianceCustomFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceCustomFramework <a name="ComplianceCustomFramework" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework datadog_compliance_custom_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.NewComplianceCustomFramework(scope Construct, id *string, config ComplianceCustomFrameworkConfig) ComplianceCustomFramework
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig">ComplianceCustomFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig">ComplianceCustomFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements">PutRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements">ResetRequirements</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequirements` <a name="PutRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements"></a>

```go
func PutRequirements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIconUrl` <a name="ResetIconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl"></a>

```go
func ResetIconUrl()
```

##### `ResetRequirements` <a name="ResetRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements"></a>

```go
func ResetRequirements()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.ComplianceCustomFramework_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.ComplianceCustomFramework_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.ComplianceCustomFramework_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.ComplianceCustomFramework_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComplianceCustomFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComplianceCustomFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceCustomFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements">Requirements</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput">HandleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput">IconUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput">RequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle">Handle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements"></a>

```go
func Requirements() ComplianceCustomFrameworkRequirementsList
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a>

---

##### `HandleInput`<sup>Optional</sup> <a name="HandleInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput"></a>

```go
func HandleInput() *string
```

- *Type:* *string

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput"></a>

```go
func IconUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequirementsInput`<sup>Optional</sup> <a name="RequirementsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput"></a>

```go
func RequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle"></a>

```go
func Handle() *string
```

- *Type:* *string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceCustomFrameworkConfig <a name="ComplianceCustomFrameworkConfig" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

&compliancecustomframework.ComplianceCustomFrameworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Handle: *string,
	Name: *string,
	Version: *string,
	IconUrl: *string,
	Requirements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle">Handle</a></code> | <code>*string</code> | The framework handle. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name">Name</a></code> | <code>*string</code> | The framework name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version">Version</a></code> | <code>*string</code> | The framework version. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl">IconUrl</a></code> | <code>*string</code> | The URL of the icon representing the framework. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements">Requirements</a></code> | <code>interface{}</code> | requirements block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle"></a>

```go
Handle *string
```

- *Type:* *string

The framework handle. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#handle ComplianceCustomFramework#handle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The framework name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The framework version. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#version ComplianceCustomFramework#version}

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl"></a>

```go
IconUrl *string
```

- *Type:* *string

The URL of the icon representing the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#icon_url ComplianceCustomFramework#icon_url}

---

##### `Requirements`<sup>Optional</sup> <a name="Requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements"></a>

```go
Requirements interface{}
```

- *Type:* interface{}

requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#requirements ComplianceCustomFramework#requirements}

---

### ComplianceCustomFrameworkRequirements <a name="ComplianceCustomFrameworkRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

&compliancecustomframework.ComplianceCustomFrameworkRequirements {
	Name: *string,
	Controls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name">Name</a></code> | <code>*string</code> | The name of the requirement. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls">Controls</a></code> | <code>interface{}</code> | controls block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the requirement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `Controls`<sup>Optional</sup> <a name="Controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls"></a>

```go
Controls interface{}
```

- *Type:* interface{}

controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#controls ComplianceCustomFramework#controls}

---

### ComplianceCustomFrameworkRequirementsControls <a name="ComplianceCustomFrameworkRequirementsControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

&compliancecustomframework.ComplianceCustomFrameworkRequirementsControls {
	Name: *string,
	RulesId: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name">Name</a></code> | <code>*string</code> | The name of the control. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId">RulesId</a></code> | <code>*[]*string</code> | The set of rules IDs for the control. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the control. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `RulesId`<sup>Required</sup> <a name="RulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId"></a>

```go
RulesId *[]*string
```

- *Type:* *[]*string

The set of rules IDs for the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/compliance_custom_framework#rules_id ComplianceCustomFramework#rules_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceCustomFrameworkRequirementsControlsList <a name="ComplianceCustomFrameworkRequirementsControlsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.NewComplianceCustomFrameworkRequirementsControlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComplianceCustomFrameworkRequirementsControlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get"></a>

```go
func Get(index *f64) ComplianceCustomFrameworkRequirementsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComplianceCustomFrameworkRequirementsControlsOutputReference <a name="ComplianceCustomFrameworkRequirementsControlsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.NewComplianceCustomFrameworkRequirementsControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComplianceCustomFrameworkRequirementsControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput">RulesIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId">RulesId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RulesIdInput`<sup>Optional</sup> <a name="RulesIdInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput"></a>

```go
func RulesIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RulesId`<sup>Required</sup> <a name="RulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId"></a>

```go
func RulesId() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComplianceCustomFrameworkRequirementsList <a name="ComplianceCustomFrameworkRequirementsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.NewComplianceCustomFrameworkRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComplianceCustomFrameworkRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get"></a>

```go
func Get(index *f64) ComplianceCustomFrameworkRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComplianceCustomFrameworkRequirementsOutputReference <a name="ComplianceCustomFrameworkRequirementsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/compliancecustomframework"

compliancecustomframework.NewComplianceCustomFrameworkRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComplianceCustomFrameworkRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls">PutControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls">ResetControls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControls` <a name="PutControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls"></a>

```go
func PutControls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetControls` <a name="ResetControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls"></a>

```go
func ResetControls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls">Controls</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput">ControlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls"></a>

```go
func Controls() ComplianceCustomFrameworkRequirementsControlsList
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a>

---

##### `ControlsInput`<sup>Optional</sup> <a name="ControlsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput"></a>

```go
func ControlsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



