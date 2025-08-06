# `complianceResourceEvaluationFilter` Submodule <a name="`complianceResourceEvaluationFilter` Submodule" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceResourceEvaluationFilter <a name="ComplianceResourceEvaluationFilter" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/compliance_resource_evaluation_filter datadog_compliance_resource_evaluation_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/complianceresourceevaluationfilter"

complianceresourceevaluationfilter.NewComplianceResourceEvaluationFilter(scope Construct, id *string, config ComplianceResourceEvaluationFilterConfig) ComplianceResourceEvaluationFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig">ComplianceResourceEvaluationFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig">ComplianceResourceEvaluationFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceResourceEvaluationFilter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/complianceresourceevaluationfilter"

complianceresourceevaluationfilter.ComplianceResourceEvaluationFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/complianceresourceevaluationfilter"

complianceresourceevaluationfilter.ComplianceResourceEvaluationFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/complianceresourceevaluationfilter"

complianceresourceevaluationfilter.ComplianceResourceEvaluationFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/complianceresourceevaluationfilter"

complianceresourceevaluationfilter.ComplianceResourceEvaluationFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComplianceResourceEvaluationFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComplianceResourceEvaluationFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComplianceResourceEvaluationFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/compliance_resource_evaluation_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceResourceEvaluationFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceResourceEvaluationFilterConfig <a name="ComplianceResourceEvaluationFilterConfig" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/complianceresourceevaluationfilter"

&complianceresourceevaluationfilter.ComplianceResourceEvaluationFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudProvider: *string,
	ResourceId: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | The ID of the of the filter's targeted resource. |
| <code><a href="#@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

The cloud provider of the filter's targeted resource. Only `aws`, `gcp`, or `azure` are considered valid cloud providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/compliance_resource_evaluation_filter#cloud_provider ComplianceResourceEvaluationFilter#cloud_provider}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

The ID of the of the filter's targeted resource.

Different cloud providers target different resource IDs:

* `aws`: account ID
* `gcp`: project ID
* `azure`: subscription ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/compliance_resource_evaluation_filter#resource_id ComplianceResourceEvaluationFilter#resource_id}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.complianceResourceEvaluationFilter.ComplianceResourceEvaluationFilterConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

List of tags to filter misconfiguration detections. Each entry should follow the format: "key":"value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.70.0/docs/resources/compliance_resource_evaluation_filter#tags ComplianceResourceEvaluationFilter#tags}

---



