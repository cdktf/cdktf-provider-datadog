# `awsCurConfig` Submodule <a name="`awsCurConfig` Submodule" id="@cdktf/provider-datadog.awsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCurConfig <a name="AwsCurConfig" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

awscurconfig.NewAwsCurConfig(scope Construct, id *string, config AwsCurConfigConfig) AwsCurConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig">AwsCurConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig">AwsCurConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters">PutAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters">ResetAccountFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountFilters` <a name="PutAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters"></a>

```go
func PutAccountFilters(value AwsCurConfigAccountFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.putAccountFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

---

##### `ResetAccountFilters` <a name="ResetAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetAccountFilters"></a>

```go
func ResetAccountFilters()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.resetBucketRegion"></a>

```go
func ResetBucketRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

awscurconfig.AwsCurConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

awscurconfig.AwsCurConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

awscurconfig.AwsCurConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

awscurconfig.AwsCurConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsCurConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsCurConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters">AccountFilters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.errorMessages">ErrorMessages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.statusUpdatedAt">StatusUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput">AccountFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput">BucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput">ReportNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput">ReportPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName">ReportName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix">ReportPrefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountFilters`<sup>Required</sup> <a name="AccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFilters"></a>

```go
func AccountFilters() AwsCurConfigAccountFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference">AwsCurConfigAccountFiltersOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.errorMessages"></a>

```go
func ErrorMessages() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusUpdatedAt`<sup>Required</sup> <a name="StatusUpdatedAt" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.statusUpdatedAt"></a>

```go
func StatusUpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountFiltersInput`<sup>Optional</sup> <a name="AccountFiltersInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountFiltersInput"></a>

```go
func AccountFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegionInput"></a>

```go
func BucketRegionInput() *string
```

- *Type:* *string

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportNameInput"></a>

```go
func ReportNameInput() *string
```

- *Type:* *string

---

##### `ReportPrefixInput`<sup>Optional</sup> <a name="ReportPrefixInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefixInput"></a>

```go
func ReportPrefixInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportName"></a>

```go
func ReportName() *string
```

- *Type:* *string

---

##### `ReportPrefix`<sup>Required</sup> <a name="ReportPrefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.reportPrefix"></a>

```go
func ReportPrefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsCurConfigAccountFilters <a name="AwsCurConfigAccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

&awscurconfig.AwsCurConfigAccountFilters {
	ExcludedAccounts: *[]*string,
	IncludedAccounts: *[]*string,
	IncludeNewAccounts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | List of AWS account IDs to exclude from cost analysis. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts">IncludedAccounts</a></code> | <code>*[]*string</code> | List of AWS account IDs to include in cost analysis. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts">IncludeNewAccounts</a></code> | <code>interface{}</code> | Whether to automatically include new member accounts in your cost analysis. |

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.excludedAccounts"></a>

```go
ExcludedAccounts *[]*string
```

- *Type:* *[]*string

List of AWS account IDs to exclude from cost analysis.

Only used when `include_new_accounts` is `true`. Cannot be used together with `included_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#excluded_accounts AwsCurConfig#excluded_accounts}

---

##### `IncludedAccounts`<sup>Optional</sup> <a name="IncludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includedAccounts"></a>

```go
IncludedAccounts *[]*string
```

- *Type:* *[]*string

List of AWS account IDs to include in cost analysis.

Only used when `include_new_accounts` is `false`. Cannot be used together with `excluded_accounts`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#included_accounts AwsCurConfig#included_accounts}

---

##### `IncludeNewAccounts`<sup>Optional</sup> <a name="IncludeNewAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters.property.includeNewAccounts"></a>

```go
IncludeNewAccounts interface{}
```

- *Type:* interface{}

Whether to automatically include new member accounts in your cost analysis.

When `true`, use `excluded_accounts` to specify accounts to exclude. When `false`, use `included_accounts` to specify only the accounts to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#include_new_accounts AwsCurConfig#include_new_accounts}

---

### AwsCurConfigConfig <a name="AwsCurConfigConfig" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

&awscurconfig.AwsCurConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	BucketName: *string,
	ReportName: *string,
	ReportPrefix: *string,
	AccountFilters: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.awsCurConfig.AwsCurConfigAccountFilters,
	BucketRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The S3 bucket name where your AWS Cost and Usage Report files are stored. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName">ReportName</a></code> | <code>*string</code> | The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix">ReportPrefix</a></code> | <code>*string</code> | The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/'). |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters">AccountFilters</a></code> | <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a></code> | account_filters block. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The AWS account ID of your billing/payer account. For AWS Organizations, this is typically the management account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#account_id AwsCurConfig#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The S3 bucket name where your AWS Cost and Usage Report files are stored.

This bucket must have appropriate IAM permissions for Datadog access and should be in the same AWS account as the CUR report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#bucket_name AwsCurConfig#bucket_name}

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportName"></a>

```go
ReportName *string
```

- *Type:* *string

The exact name of your AWS Cost and Usage Report as configured in AWS Billing preferences.

This must match the report name exactly as it appears in your AWS billing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#report_name AwsCurConfig#report_name}

---

##### `ReportPrefix`<sup>Required</sup> <a name="ReportPrefix" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.reportPrefix"></a>

```go
ReportPrefix *string
```

- *Type:* *string

The S3 key prefix where your Cost and Usage Report files are stored within the bucket (e.g., 'cur-reports/', 'billing/cur/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#report_prefix AwsCurConfig#report_prefix}

---

##### `AccountFilters`<sup>Optional</sup> <a name="AccountFilters" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.accountFilters"></a>

```go
AccountFilters AwsCurConfigAccountFilters
```

- *Type:* <a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFilters">AwsCurConfigAccountFilters</a>

account_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#account_filters AwsCurConfig#account_filters}

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigConfig.property.bucketRegion"></a>

```go
BucketRegion *string
```

- *Type:* *string

The AWS region where the S3 bucket containing your Cost and Usage Report is located (e.g., us-east-1, eu-west-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/aws_cur_config#bucket_region AwsCurConfig#bucket_region}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsCurConfigAccountFiltersOutputReference <a name="AwsCurConfigAccountFiltersOutputReference" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/awscurconfig"

awscurconfig.NewAwsCurConfigAccountFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AwsCurConfigAccountFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts">ResetIncludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts">ResetIncludeNewAccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetExcludedAccounts"></a>

```go
func ResetExcludedAccounts()
```

##### `ResetIncludedAccounts` <a name="ResetIncludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludedAccounts"></a>

```go
func ResetIncludedAccounts()
```

##### `ResetIncludeNewAccounts` <a name="ResetIncludeNewAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.resetIncludeNewAccounts"></a>

```go
func ResetIncludeNewAccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput">IncludedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput">IncludeNewAccountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts">IncludedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">IncludeNewAccounts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccountsInput"></a>

```go
func ExcludedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedAccountsInput`<sup>Optional</sup> <a name="IncludedAccountsInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccountsInput"></a>

```go
func IncludedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeNewAccountsInput`<sup>Optional</sup> <a name="IncludeNewAccountsInput" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccountsInput"></a>

```go
func IncludeNewAccountsInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```go
func ExcludedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedAccounts`<sup>Required</sup> <a name="IncludedAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```go
func IncludedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeNewAccounts`<sup>Required</sup> <a name="IncludeNewAccounts" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```go
func IncludeNewAccounts() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.awsCurConfig.AwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



