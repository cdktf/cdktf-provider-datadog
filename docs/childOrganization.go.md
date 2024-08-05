# `childOrganization` Submodule <a name="`childOrganization` Submodule" id="@cdktf/provider-datadog.childOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChildOrganization <a name="ChildOrganization" id="@cdktf/provider-datadog.childOrganization.ChildOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/child_organization datadog_child_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganization(scope Construct, id *string, config ChildOrganizationConfig) ChildOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig">ChildOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig">ChildOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChildOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.ChildOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.ChildOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.ChildOrganization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.ChildOrganization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChildOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChildOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChildOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/child_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChildOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList">ChildOrganizationApiKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.applicationKey">ApplicationKey</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList">ChildOrganizationApplicationKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.publicId">PublicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList">ChildOrganizationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.user">User</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList">ChildOrganizationUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.apiKey"></a>

```go
func ApiKey() ChildOrganizationApiKeyList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList">ChildOrganizationApiKeyList</a>

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.applicationKey"></a>

```go
func ApplicationKey() ChildOrganizationApplicationKeyList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList">ChildOrganizationApplicationKeyList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.publicId"></a>

```go
func PublicId() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.settings"></a>

```go
func Settings() ChildOrganizationSettingsList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList">ChildOrganizationSettingsList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.user"></a>

```go
func User() ChildOrganizationUserList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList">ChildOrganizationUserList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChildOrganizationApiKey <a name="ChildOrganizationApiKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationApiKey {

}
```


### ChildOrganizationApplicationKey <a name="ChildOrganizationApplicationKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationApplicationKey {

}
```


### ChildOrganizationConfig <a name="ChildOrganizationConfig" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.name">Name</a></code> | <code>*string</code> | Name for Child Organization after creation. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/child_organization#id ChildOrganization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name for Child Organization after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/child_organization#name ChildOrganization#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/child_organization#id ChildOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChildOrganizationSettings <a name="ChildOrganizationSettings" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationSettings {

}
```


### ChildOrganizationSettingsSaml <a name="ChildOrganizationSettingsSaml" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationSettingsSaml {

}
```


### ChildOrganizationSettingsSamlAutocreateUsersDomains <a name="ChildOrganizationSettingsSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationSettingsSamlAutocreateUsersDomains {

}
```


### ChildOrganizationSettingsSamlIdpInitiatedLogin <a name="ChildOrganizationSettingsSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationSettingsSamlIdpInitiatedLogin {

}
```


### ChildOrganizationSettingsSamlStrictMode <a name="ChildOrganizationSettingsSamlStrictMode" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationSettingsSamlStrictMode {

}
```


### ChildOrganizationUser <a name="ChildOrganizationUser" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

&childorganization.ChildOrganizationUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ChildOrganizationApiKeyList <a name="ChildOrganizationApiKeyList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationApiKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationApiKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.get"></a>

```go
func Get(index *f64) ChildOrganizationApiKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationApiKeyOutputReference <a name="ChildOrganizationApiKeyOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey">ChildOrganizationApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationApiKey
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey">ChildOrganizationApiKey</a>

---


### ChildOrganizationApplicationKeyList <a name="ChildOrganizationApplicationKeyList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationApplicationKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationApplicationKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.get"></a>

```go
func Get(index *f64) ChildOrganizationApplicationKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationApplicationKeyOutputReference <a name="ChildOrganizationApplicationKeyOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationApplicationKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationApplicationKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey">ChildOrganizationApplicationKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationApplicationKey
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey">ChildOrganizationApplicationKey</a>

---


### ChildOrganizationSettingsList <a name="ChildOrganizationSettingsList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.get"></a>

```go
func Get(index *f64) ChildOrganizationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationSettingsOutputReference <a name="ChildOrganizationSettingsOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.privateWidgetShare">PrivateWidgetShare</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList">ChildOrganizationSettingsSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateAccessRole">SamlAutocreateAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList">ChildOrganizationSettingsSamlAutocreateUsersDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlCanBeEnabled">SamlCanBeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpEndpoint">SamlIdpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList">ChildOrganizationSettingsSamlIdpInitiatedLoginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpMetadataUploaded">SamlIdpMetadataUploaded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlLoginUrl">SamlLoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlStrictMode">SamlStrictMode</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList">ChildOrganizationSettingsSamlStrictModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings">ChildOrganizationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateWidgetShare`<sup>Required</sup> <a name="PrivateWidgetShare" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.privateWidgetShare"></a>

```go
func PrivateWidgetShare() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.saml"></a>

```go
func Saml() ChildOrganizationSettingsSamlList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList">ChildOrganizationSettingsSamlList</a>

---

##### `SamlAutocreateAccessRole`<sup>Required</sup> <a name="SamlAutocreateAccessRole" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```go
func SamlAutocreateAccessRole() *string
```

- *Type:* *string

---

##### `SamlAutocreateUsersDomains`<sup>Required</sup> <a name="SamlAutocreateUsersDomains" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```go
func SamlAutocreateUsersDomains() ChildOrganizationSettingsSamlAutocreateUsersDomainsList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList">ChildOrganizationSettingsSamlAutocreateUsersDomainsList</a>

---

##### `SamlCanBeEnabled`<sup>Required</sup> <a name="SamlCanBeEnabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlCanBeEnabled"></a>

```go
func SamlCanBeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SamlIdpEndpoint`<sup>Required</sup> <a name="SamlIdpEndpoint" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpEndpoint"></a>

```go
func SamlIdpEndpoint() *string
```

- *Type:* *string

---

##### `SamlIdpInitiatedLogin`<sup>Required</sup> <a name="SamlIdpInitiatedLogin" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```go
func SamlIdpInitiatedLogin() ChildOrganizationSettingsSamlIdpInitiatedLoginList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList">ChildOrganizationSettingsSamlIdpInitiatedLoginList</a>

---

##### `SamlIdpMetadataUploaded`<sup>Required</sup> <a name="SamlIdpMetadataUploaded" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```go
func SamlIdpMetadataUploaded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SamlLoginUrl`<sup>Required</sup> <a name="SamlLoginUrl" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlLoginUrl"></a>

```go
func SamlLoginUrl() *string
```

- *Type:* *string

---

##### `SamlStrictMode`<sup>Required</sup> <a name="SamlStrictMode" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlStrictMode"></a>

```go
func SamlStrictMode() ChildOrganizationSettingsSamlStrictModeList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList">ChildOrganizationSettingsSamlStrictModeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings">ChildOrganizationSettings</a>

---


### ChildOrganizationSettingsSamlAutocreateUsersDomainsList <a name="ChildOrganizationSettingsSamlAutocreateUsersDomainsList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlAutocreateUsersDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationSettingsSamlAutocreateUsersDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.get"></a>

```go
func Get(index *f64) ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference <a name="ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains">ChildOrganizationSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationSettingsSamlAutocreateUsersDomains
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains">ChildOrganizationSettingsSamlAutocreateUsersDomains</a>

---


### ChildOrganizationSettingsSamlIdpInitiatedLoginList <a name="ChildOrganizationSettingsSamlIdpInitiatedLoginList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlIdpInitiatedLoginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationSettingsSamlIdpInitiatedLoginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.get"></a>

```go
func Get(index *f64) ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference <a name="ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin">ChildOrganizationSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationSettingsSamlIdpInitiatedLogin
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin">ChildOrganizationSettingsSamlIdpInitiatedLogin</a>

---


### ChildOrganizationSettingsSamlList <a name="ChildOrganizationSettingsSamlList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationSettingsSamlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.get"></a>

```go
func Get(index *f64) ChildOrganizationSettingsSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationSettingsSamlOutputReference <a name="ChildOrganizationSettingsSamlOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationSettingsSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml">ChildOrganizationSettingsSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationSettingsSaml
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml">ChildOrganizationSettingsSaml</a>

---


### ChildOrganizationSettingsSamlStrictModeList <a name="ChildOrganizationSettingsSamlStrictModeList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlStrictModeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationSettingsSamlStrictModeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.get"></a>

```go
func Get(index *f64) ChildOrganizationSettingsSamlStrictModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationSettingsSamlStrictModeOutputReference <a name="ChildOrganizationSettingsSamlStrictModeOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationSettingsSamlStrictModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationSettingsSamlStrictModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode">ChildOrganizationSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationSettingsSamlStrictMode
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode">ChildOrganizationSettingsSamlStrictMode</a>

---


### ChildOrganizationUserList <a name="ChildOrganizationUserList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChildOrganizationUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.get"></a>

```go
func Get(index *f64) ChildOrganizationUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChildOrganizationUserOutputReference <a name="ChildOrganizationUserOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/childorganization"

childorganization.NewChildOrganizationUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChildOrganizationUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.accessRole">AccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUser">ChildOrganizationUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.accessRole"></a>

```go
func AccessRole() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.internalValue"></a>

```go
func InternalValue() ChildOrganizationUser
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUser">ChildOrganizationUser</a>

---



