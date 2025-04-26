# `observabilityPipeline` Submodule <a name="`observabilityPipeline` Submodule" id="@cdktf/provider-datadog.observabilityPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityPipeline <a name="ObservabilityPipeline" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline datadog_observability_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipeline(scope Construct, id *string, config ObservabilityPipelineConfig) ObservabilityPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig">ObservabilityPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig">ObservabilityPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig"></a>

```go
func PutConfig(value ObservabilityPipelineConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.resetConfig"></a>

```go
func ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.ObservabilityPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.ObservabilityPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.ObservabilityPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.ObservabilityPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObservabilityPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObservabilityPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObservabilityPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference">ObservabilityPipelineConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.config"></a>

```go
func Config() ObservabilityPipelineConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference">ObservabilityPipelineConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityPipelineConfig <a name="ObservabilityPipelineConfig" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Config: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.name">Name</a></code> | <code>*string</code> | The pipeline name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a></code> | config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The pipeline name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfig.property.config"></a>

```go
Config ObservabilityPipelineConfigA
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA">ObservabilityPipelineConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#config ObservabilityPipeline#config}

---

### ObservabilityPipelineConfigA <a name="ObservabilityPipelineConfigA" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigA {
	Destinations: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigDestinations,
	Processors: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigProcessors,
	Sources: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigSources,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a></code> | destinations block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.processors">Processors</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a></code> | processors block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a></code> | sources block. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.destinations"></a>

```go
Destinations ObservabilityPipelineConfigDestinations
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#destinations ObservabilityPipeline#destinations}

---

##### `Processors`<sup>Optional</sup> <a name="Processors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.processors"></a>

```go
Processors ObservabilityPipelineConfigProcessors
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

processors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#processors ObservabilityPipeline#processors}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigA.property.sources"></a>

```go
Sources ObservabilityPipelineConfigSources
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#sources ObservabilityPipeline#sources}

---

### ObservabilityPipelineConfigDestinations <a name="ObservabilityPipelineConfigDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigDestinations {
	DatadogLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.property.datadogLogs">DatadogLogs</a></code> | <code>interface{}</code> | datadog_logs block. |

---

##### `DatadogLogs`<sup>Optional</sup> <a name="DatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations.property.datadogLogs"></a>

```go
DatadogLogs interface{}
```

- *Type:* interface{}

datadog_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#datadog_logs ObservabilityPipeline#datadog_logs}

---

### ObservabilityPipelineConfigDestinationsDatadogLogs <a name="ObservabilityPipelineConfigDestinationsDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigDestinationsDatadogLogs {
	Id: *string,
	Inputs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.id">Id</a></code> | <code>*string</code> | The unique ID of the destination. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.inputs">Inputs</a></code> | <code>*[]*string</code> | The inputs for the destination. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogs.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

The inputs for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessors <a name="ObservabilityPipelineConfigProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessors {
	AddFields: interface{},
	Filter: interface{},
	ParseJson: interface{},
	Quota: interface{},
	RemoveFields: interface{},
	RenameFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.addFields">AddFields</a></code> | <code>interface{}</code> | add_fields block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.parseJson">ParseJson</a></code> | <code>interface{}</code> | parse_json block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.quota">Quota</a></code> | <code>interface{}</code> | quota block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.removeFields">RemoveFields</a></code> | <code>interface{}</code> | remove_fields block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.renameFields">RenameFields</a></code> | <code>interface{}</code> | rename_fields block. |

---

##### `AddFields`<sup>Optional</sup> <a name="AddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.addFields"></a>

```go
AddFields interface{}
```

- *Type:* interface{}

add_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#add_fields ObservabilityPipeline#add_fields}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#filter ObservabilityPipeline#filter}

---

##### `ParseJson`<sup>Optional</sup> <a name="ParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.parseJson"></a>

```go
ParseJson interface{}
```

- *Type:* interface{}

parse_json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#parse_json ObservabilityPipeline#parse_json}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.quota"></a>

```go
Quota interface{}
```

- *Type:* interface{}

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#quota ObservabilityPipeline#quota}

---

##### `RemoveFields`<sup>Optional</sup> <a name="RemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.removeFields"></a>

```go
RemoveFields interface{}
```

- *Type:* interface{}

remove_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#remove_fields ObservabilityPipeline#remove_fields}

---

##### `RenameFields`<sup>Optional</sup> <a name="RenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors.property.renameFields"></a>

```go
RenameFields interface{}
```

- *Type:* interface{}

rename_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#rename_fields ObservabilityPipeline#rename_fields}

---

### ObservabilityPipelineConfigProcessorsAddFields <a name="ObservabilityPipelineConfigProcessorsAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsAddFields {
	Id: *string,
	Include: *string,
	Inputs: *[]*string,
	Field: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.id">Id</a></code> | <code>*string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.include">Include</a></code> | <code>*string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.inputs">Inputs</a></code> | <code>*[]*string</code> | The inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.field">Field</a></code> | <code>interface{}</code> | field block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.include"></a>

```go
Include *string
```

- *Type:* *string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFields.property.field"></a>

```go
Field interface{}
```

- *Type:* interface{}

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsAddFieldsField <a name="ObservabilityPipelineConfigProcessorsAddFieldsField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsAddFieldsField {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.name">Name</a></code> | <code>*string</code> | The field name to add. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.value">Value</a></code> | <code>*string</code> | The value to assign to the field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.name"></a>

```go
Name *string
```

- *Type:* *string

The field name to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsField.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value to assign to the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigProcessorsFilter <a name="ObservabilityPipelineConfigProcessorsFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsFilter {
	Id: *string,
	Include: *string,
	Inputs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.id">Id</a></code> | <code>*string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.include">Include</a></code> | <code>*string</code> | A Datadog search query used to determine which logs should pass through the filter. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.inputs">Inputs</a></code> | <code>*[]*string</code> | The inputs for the processor. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.include"></a>

```go
Include *string
```

- *Type:* *string

A Datadog search query used to determine which logs should pass through the filter.

Logs that match this query continue to downstream components; others are dropped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilter.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsParseJson <a name="ObservabilityPipelineConfigProcessorsParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsParseJson {
	Field: *string,
	Id: *string,
	Include: *string,
	Inputs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.field">Field</a></code> | <code>*string</code> | The field to parse. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.id">Id</a></code> | <code>*string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.include">Include</a></code> | <code>*string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.inputs">Inputs</a></code> | <code>*[]*string</code> | The inputs for the processor. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.field"></a>

```go
Field *string
```

- *Type:* *string

The field to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.include"></a>

```go
Include *string
```

- *Type:* *string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJson.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsQuota <a name="ObservabilityPipelineConfigProcessorsQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsQuota {
	DropEvents: interface{},
	Id: *string,
	Include: *string,
	Inputs: *[]*string,
	Limit: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit,
	Name: *string,
	IgnoreWhenMissingPartitions: interface{},
	Overrides: interface{},
	PartitionFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.dropEvents">DropEvents</a></code> | <code>interface{}</code> | Whether to drop events exceeding the limit. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.id">Id</a></code> | <code>*string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.include">Include</a></code> | <code>*string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.inputs">Inputs</a></code> | <code>*[]*string</code> | The inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.name">Name</a></code> | <code>*string</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.ignoreWhenMissingPartitions">IgnoreWhenMissingPartitions</a></code> | <code>interface{}</code> | Whether to ignore when partition fields are missing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.overrides">Overrides</a></code> | <code>interface{}</code> | overrides block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.partitionFields">PartitionFields</a></code> | <code>*[]*string</code> | List of partition fields. |

---

##### `DropEvents`<sup>Required</sup> <a name="DropEvents" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.dropEvents"></a>

```go
DropEvents interface{}
```

- *Type:* interface{}

Whether to drop events exceeding the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#drop_events ObservabilityPipeline#drop_events}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.include"></a>

```go
Include *string
```

- *Type:* *string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.limit"></a>

```go
Limit ObservabilityPipelineConfigProcessorsQuotaLimit
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `IgnoreWhenMissingPartitions`<sup>Optional</sup> <a name="IgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.ignoreWhenMissingPartitions"></a>

```go
IgnoreWhenMissingPartitions interface{}
```

- *Type:* interface{}

Whether to ignore when partition fields are missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#ignore_when_missing_partitions ObservabilityPipeline#ignore_when_missing_partitions}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.overrides"></a>

```go
Overrides interface{}
```

- *Type:* interface{}

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#overrides ObservabilityPipeline#overrides}

---

##### `PartitionFields`<sup>Optional</sup> <a name="PartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuota.property.partitionFields"></a>

```go
PartitionFields *[]*string
```

- *Type:* *[]*string

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#partition_fields ObservabilityPipeline#partition_fields}

---

### ObservabilityPipelineConfigProcessorsQuotaLimit <a name="ObservabilityPipelineConfigProcessorsQuotaLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsQuotaLimit {
	Enforce: *string,
	Limit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.enforce">Enforce</a></code> | <code>*string</code> | Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.limit">Limit</a></code> | <code>*f64</code> | The daily quota limit. |

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.enforce"></a>

```go
Enforce *string
```

- *Type:* *string

Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

The daily quota limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

### ObservabilityPipelineConfigProcessorsQuotaOverrides <a name="ObservabilityPipelineConfigProcessorsQuotaOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides {
	Limit: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit,
	Field: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.field">Field</a></code> | <code>interface{}</code> | field block. |

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.limit"></a>

```go
Limit ObservabilityPipelineConfigProcessorsQuotaOverridesLimit
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverrides.property.field"></a>

```go
Field interface{}
```

- *Type:* interface{}

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsQuotaOverridesField <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.name">Name</a></code> | <code>*string</code> | The field name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.value">Value</a></code> | <code>*string</code> | The field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.name"></a>

```go
Name *string
```

- *Type:* *string

The field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesField.property.value"></a>

```go
Value *string
```

- *Type:* *string

The field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigProcessorsQuotaOverridesLimit <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit {
	Enforce: *string,
	Limit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.enforce">Enforce</a></code> | <code>*string</code> | Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.limit">Limit</a></code> | <code>*f64</code> | The daily quota limit. |

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.enforce"></a>

```go
Enforce *string
```

- *Type:* *string

Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

The daily quota limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}

---

### ObservabilityPipelineConfigProcessorsRemoveFields <a name="ObservabilityPipelineConfigProcessorsRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsRemoveFields {
	Fields: *[]*string,
	Id: *string,
	Include: *string,
	Inputs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.fields">Fields</a></code> | <code>*[]*string</code> | List of fields to remove from the events. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.id">Id</a></code> | <code>*string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.include">Include</a></code> | <code>*string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.inputs">Inputs</a></code> | <code>*[]*string</code> | The inputs for the processor. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

List of fields to remove from the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.include"></a>

```go
Include *string
```

- *Type:* *string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFields.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

The inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

### ObservabilityPipelineConfigProcessorsRenameFields <a name="ObservabilityPipelineConfigProcessorsRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsRenameFields {
	Id: *string,
	Include: *string,
	Inputs: *[]*string,
	Field: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.id">Id</a></code> | <code>*string</code> | The unique ID of the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.include">Include</a></code> | <code>*string</code> | A Datadog search query used to determine which logs this processor targets. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.inputs">Inputs</a></code> | <code>*[]*string</code> | he inputs for the processor. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.field">Field</a></code> | <code>interface{}</code> | field block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.include"></a>

```go
Include *string
```

- *Type:* *string

A Datadog search query used to determine which logs this processor targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#include ObservabilityPipeline#include}

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

he inputs for the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFields.property.field"></a>

```go
Field interface{}
```

- *Type:* interface{}

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#field ObservabilityPipeline#field}

---

### ObservabilityPipelineConfigProcessorsRenameFieldsField <a name="ObservabilityPipelineConfigProcessorsRenameFieldsField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField {
	Destination: *string,
	PreserveSource: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.destination">Destination</a></code> | <code>*string</code> | Destination field name. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.preserveSource">PreserveSource</a></code> | <code>interface{}</code> | Whether to keep the original field. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.source">Source</a></code> | <code>*string</code> | Source field to rename. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Destination field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}

---

##### `PreserveSource`<sup>Required</sup> <a name="PreserveSource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.preserveSource"></a>

```go
PreserveSource interface{}
```

- *Type:* interface{}

Whether to keep the original field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#preserve_source ObservabilityPipeline#preserve_source}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsField.property.source"></a>

```go
Source *string
```

- *Type:* *string

Source field to rename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#source ObservabilityPipeline#source}

---

### ObservabilityPipelineConfigSources <a name="ObservabilityPipelineConfigSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSources {
	DatadogAgent: interface{},
	Kafka: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.datadogAgent">DatadogAgent</a></code> | <code>interface{}</code> | datadog_agent block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.kafka">Kafka</a></code> | <code>interface{}</code> | kafka block. |

---

##### `DatadogAgent`<sup>Optional</sup> <a name="DatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.datadogAgent"></a>

```go
DatadogAgent interface{}
```

- *Type:* interface{}

datadog_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}

---

##### `Kafka`<sup>Optional</sup> <a name="Kafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources.property.kafka"></a>

```go
Kafka interface{}
```

- *Type:* interface{}

kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}

---

### ObservabilityPipelineConfigSourcesDatadogAgent <a name="ObservabilityPipelineConfigSourcesDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSourcesDatadogAgent {
	Id: *string,
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.id">Id</a></code> | <code>*string</code> | The unique ID of the source. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.tls">Tls</a></code> | <code>interface{}</code> | tls block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgent.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}

---

### ObservabilityPipelineConfigSourcesDatadogAgentTls <a name="ObservabilityPipelineConfigSourcesDatadogAgentTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls {
	CrtFile: *string,
	CaFile: *string,
	KeyFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.crtFile">CrtFile</a></code> | <code>*string</code> | Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.caFile">CaFile</a></code> | <code>*string</code> | Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.keyFile">KeyFile</a></code> | <code>*string</code> | Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication. |

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.crtFile"></a>

```go
CrtFile *string
```

- *Type:* *string

Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.caFile"></a>

```go
CaFile *string
```

- *Type:* *string

Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTls.property.keyFile"></a>

```go
KeyFile *string
```

- *Type:* *string

Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}

---

### ObservabilityPipelineConfigSourcesKafka <a name="ObservabilityPipelineConfigSourcesKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSourcesKafka {
	GroupId: *string,
	Id: *string,
	Sasl: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl,
	Topics: *[]*string,
	LibrdkafkaOption: interface{},
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.groupId">GroupId</a></code> | <code>*string</code> | The Kafka consumer group ID. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.id">Id</a></code> | <code>*string</code> | The unique ID of the source. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a></code> | sasl block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.topics">Topics</a></code> | <code>*[]*string</code> | A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.librdkafkaOption">LibrdkafkaOption</a></code> | <code>interface{}</code> | librdkafka_option block. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.tls">Tls</a></code> | <code>interface{}</code> | tls block. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The Kafka consumer group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#group_id ObservabilityPipeline#group_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.sasl"></a>

```go
Sasl ObservabilityPipelineConfigSourcesKafkaSasl
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.topics"></a>

```go
Topics *[]*string
```

- *Type:* *[]*string

A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#topics ObservabilityPipeline#topics}

---

##### `LibrdkafkaOption`<sup>Optional</sup> <a name="LibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.librdkafkaOption"></a>

```go
LibrdkafkaOption interface{}
```

- *Type:* interface{}

librdkafka_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafka.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}

---

### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.name">Name</a></code> | <code>*string</code> | The name of the librdkafka option. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.value">Value</a></code> | <code>*string</code> | The value of the librdkafka option. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the librdkafka option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#name ObservabilityPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the librdkafka option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#value ObservabilityPipeline#value}

---

### ObservabilityPipelineConfigSourcesKafkaSasl <a name="ObservabilityPipelineConfigSourcesKafkaSasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSourcesKafkaSasl {
	Mechanism: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.property.mechanism">Mechanism</a></code> | <code>*string</code> | SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`. |

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl.property.mechanism"></a>

```go
Mechanism *string
```

- *Type:* *string

SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}

---

### ObservabilityPipelineConfigSourcesKafkaTls <a name="ObservabilityPipelineConfigSourcesKafkaTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

&observabilitypipeline.ObservabilityPipelineConfigSourcesKafkaTls {
	CrtFile: *string,
	CaFile: *string,
	KeyFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.crtFile">CrtFile</a></code> | <code>*string</code> | Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.caFile">CaFile</a></code> | <code>*string</code> | Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.keyFile">KeyFile</a></code> | <code>*string</code> | Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication. |

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.crtFile"></a>

```go
CrtFile *string
```

- *Type:* *string

Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}

---

##### `CaFile`<sup>Optional</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.caFile"></a>

```go
CaFile *string
```

- *Type:* *string

Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}

---

##### `KeyFile`<sup>Optional</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTls.property.keyFile"></a>

```go
KeyFile *string
```

- *Type:* *string

Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityPipelineConfigAOutputReference <a name="ObservabilityPipelineConfigAOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors">PutProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetProcessors">ResetProcessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations"></a>

```go
func PutDestinations(value ObservabilityPipelineConfigDestinations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinations">ObservabilityPipelineConfigDestinations</a>

---

##### `PutProcessors` <a name="PutProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors"></a>

```go
func PutProcessors(value ObservabilityPipelineConfigProcessors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putProcessors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessors">ObservabilityPipelineConfigProcessors</a>

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources"></a>

```go
func PutSources(value ObservabilityPipelineConfigSources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.putSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSources">ObservabilityPipelineConfigSources</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetProcessors` <a name="ResetProcessors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetProcessors"></a>

```go
func ResetProcessors()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference">ObservabilityPipelineConfigDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processors">Processors</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference">ObservabilityPipelineConfigProcessorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference">ObservabilityPipelineConfigSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processorsInput">ProcessorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinations"></a>

```go
func Destinations() ObservabilityPipelineConfigDestinationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference">ObservabilityPipelineConfigDestinationsOutputReference</a>

---

##### `Processors`<sup>Required</sup> <a name="Processors" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processors"></a>

```go
func Processors() ObservabilityPipelineConfigProcessorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference">ObservabilityPipelineConfigProcessorsOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sources"></a>

```go
func Sources() ObservabilityPipelineConfigSourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference">ObservabilityPipelineConfigSourcesOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `ProcessorsInput`<sup>Optional</sup> <a name="ProcessorsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.processorsInput"></a>

```go
func ProcessorsInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigDestinationsDatadogLogsList <a name="ObservabilityPipelineConfigDestinationsDatadogLogsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigDestinationsDatadogLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigDestinationsDatadogLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference <a name="ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigDestinationsDatadogLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigDestinationsOutputReference <a name="ObservabilityPipelineConfigDestinationsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs">PutDatadogLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resetDatadogLogs">ResetDatadogLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatadogLogs` <a name="PutDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs"></a>

```go
func PutDatadogLogs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.putDatadogLogs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatadogLogs` <a name="ResetDatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.resetDatadogLogs"></a>

```go
func ResetDatadogLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogs">DatadogLogs</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList">ObservabilityPipelineConfigDestinationsDatadogLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogsInput">DatadogLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatadogLogs`<sup>Required</sup> <a name="DatadogLogs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogs"></a>

```go
func DatadogLogs() ObservabilityPipelineConfigDestinationsDatadogLogsList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsDatadogLogsList">ObservabilityPipelineConfigDestinationsDatadogLogsList</a>

---

##### `DatadogLogsInput`<sup>Optional</sup> <a name="DatadogLogsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.datadogLogsInput"></a>

```go
func DatadogLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsAddFieldsFieldList <a name="ObservabilityPipelineConfigProcessorsAddFieldsFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsAddFieldsFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsAddFieldsFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsAddFieldsList <a name="ObservabilityPipelineConfigProcessorsAddFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsAddFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsAddFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsAddFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsAddFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsAddFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsAddFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsAddFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField"></a>

```go
func PutField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.putField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList">ObservabilityPipelineConfigProcessorsAddFieldsFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.field"></a>

```go
func Field() ObservabilityPipelineConfigProcessorsAddFieldsFieldList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsFieldList">ObservabilityPipelineConfigProcessorsAddFieldsFieldList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.fieldInput"></a>

```go
func FieldInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsFilterList <a name="ObservabilityPipelineConfigProcessorsFilterList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsFilterOutputReference <a name="ObservabilityPipelineConfigProcessorsFilterOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsOutputReference <a name="ObservabilityPipelineConfigProcessorsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigProcessorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields">PutAddFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson">PutParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields">PutRemoveFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields">PutRenameFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetAddFields">ResetAddFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetParseJson">ResetParseJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRemoveFields">ResetRemoveFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRenameFields">ResetRenameFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddFields` <a name="PutAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields"></a>

```go
func PutAddFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putAddFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParseJson` <a name="PutParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson"></a>

```go
func PutParseJson(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putParseJson.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota"></a>

```go
func PutQuota(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putQuota.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoveFields` <a name="PutRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields"></a>

```go
func PutRemoveFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRemoveFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRenameFields` <a name="PutRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields"></a>

```go
func PutRenameFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.putRenameFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddFields` <a name="ResetAddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetAddFields"></a>

```go
func ResetAddFields()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetParseJson` <a name="ResetParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetParseJson"></a>

```go
func ResetParseJson()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetRemoveFields` <a name="ResetRemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRemoveFields"></a>

```go
func ResetRemoveFields()
```

##### `ResetRenameFields` <a name="ResetRenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.resetRenameFields"></a>

```go
func ResetRenameFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFields">AddFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList">ObservabilityPipelineConfigProcessorsAddFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList">ObservabilityPipelineConfigProcessorsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJson">ParseJson</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList">ObservabilityPipelineConfigProcessorsParseJsonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList">ObservabilityPipelineConfigProcessorsQuotaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFields">RemoveFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList">ObservabilityPipelineConfigProcessorsRemoveFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFields">RenameFields</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList">ObservabilityPipelineConfigProcessorsRenameFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFieldsInput">AddFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJsonInput">ParseJsonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quotaInput">QuotaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFieldsInput">RemoveFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFieldsInput">RenameFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddFields`<sup>Required</sup> <a name="AddFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFields"></a>

```go
func AddFields() ObservabilityPipelineConfigProcessorsAddFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsAddFieldsList">ObservabilityPipelineConfigProcessorsAddFieldsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filter"></a>

```go
func Filter() ObservabilityPipelineConfigProcessorsFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsFilterList">ObservabilityPipelineConfigProcessorsFilterList</a>

---

##### `ParseJson`<sup>Required</sup> <a name="ParseJson" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJson"></a>

```go
func ParseJson() ObservabilityPipelineConfigProcessorsParseJsonList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList">ObservabilityPipelineConfigProcessorsParseJsonList</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quota"></a>

```go
func Quota() ObservabilityPipelineConfigProcessorsQuotaList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList">ObservabilityPipelineConfigProcessorsQuotaList</a>

---

##### `RemoveFields`<sup>Required</sup> <a name="RemoveFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFields"></a>

```go
func RemoveFields() ObservabilityPipelineConfigProcessorsRemoveFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList">ObservabilityPipelineConfigProcessorsRemoveFieldsList</a>

---

##### `RenameFields`<sup>Required</sup> <a name="RenameFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFields"></a>

```go
func RenameFields() ObservabilityPipelineConfigProcessorsRenameFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList">ObservabilityPipelineConfigProcessorsRenameFieldsList</a>

---

##### `AddFieldsInput`<sup>Optional</sup> <a name="AddFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.addFieldsInput"></a>

```go
func AddFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `ParseJsonInput`<sup>Optional</sup> <a name="ParseJsonInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.parseJsonInput"></a>

```go
func ParseJsonInput() interface{}
```

- *Type:* interface{}

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.quotaInput"></a>

```go
func QuotaInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveFieldsInput`<sup>Optional</sup> <a name="RemoveFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.removeFieldsInput"></a>

```go
func RemoveFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `RenameFieldsInput`<sup>Optional</sup> <a name="RenameFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.renameFieldsInput"></a>

```go
func RenameFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsParseJsonList <a name="ObservabilityPipelineConfigProcessorsParseJsonList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsParseJsonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsParseJsonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsParseJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsParseJsonOutputReference <a name="ObservabilityPipelineConfigProcessorsParseJsonOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsParseJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsParseJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsParseJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforceInput">EnforceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforce">Enforce</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforceInput"></a>

```go
func EnforceInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.enforce"></a>

```go
func Enforce() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaList <a name="ObservabilityPipelineConfigProcessorsQuotaList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsQuotaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsQuotaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsQuotaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetIgnoreWhenMissingPartitions">ResetIgnoreWhenMissingPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetPartitionFields">ResetPartitionFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit"></a>

```go
func PutLimit(value ObservabilityPipelineConfigProcessorsQuotaLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimit">ObservabilityPipelineConfigProcessorsQuotaLimit</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides"></a>

```go
func PutOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.putOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIgnoreWhenMissingPartitions` <a name="ResetIgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetIgnoreWhenMissingPartitions"></a>

```go
func ResetIgnoreWhenMissingPartitions()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetOverrides"></a>

```go
func ResetOverrides()
```

##### `ResetPartitionFields` <a name="ResetPartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.resetPartitionFields"></a>

```go
func ResetPartitionFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList">ObservabilityPipelineConfigProcessorsQuotaOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEventsInput">DropEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitionsInput">IgnoreWhenMissingPartitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overridesInput">OverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFieldsInput">PartitionFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEvents">DropEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitions">IgnoreWhenMissingPartitions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFields">PartitionFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limit"></a>

```go
func Limit() ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overrides"></a>

```go
func Overrides() ObservabilityPipelineConfigProcessorsQuotaOverridesList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList">ObservabilityPipelineConfigProcessorsQuotaOverridesList</a>

---

##### `DropEventsInput`<sup>Optional</sup> <a name="DropEventsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEventsInput"></a>

```go
func DropEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreWhenMissingPartitionsInput`<sup>Optional</sup> <a name="IgnoreWhenMissingPartitionsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitionsInput"></a>

```go
func IgnoreWhenMissingPartitionsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.limitInput"></a>

```go
func LimitInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.overridesInput"></a>

```go
func OverridesInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionFieldsInput`<sup>Optional</sup> <a name="PartitionFieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFieldsInput"></a>

```go
func PartitionFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DropEvents`<sup>Required</sup> <a name="DropEvents" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.dropEvents"></a>

```go
func DropEvents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreWhenMissingPartitions`<sup>Required</sup> <a name="IgnoreWhenMissingPartitions" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.ignoreWhenMissingPartitions"></a>

```go
func IgnoreWhenMissingPartitions() interface{}
```

- *Type:* interface{}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.partitionFields"></a>

```go
func PartitionFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaOverridesFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforceInput">EnforceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforce">Enforce</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforceInput"></a>

```go
func EnforceInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.enforce"></a>

```go
func Enforce() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesList <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsQuotaOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference <a name="ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField"></a>

```go
func PutField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putField.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit"></a>

```go
func PutLimit(value ObservabilityPipelineConfigProcessorsQuotaOverridesLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimit">ObservabilityPipelineConfigProcessorsQuotaOverridesLimit</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList">ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fieldInput">FieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limitInput">LimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.field"></a>

```go
func Field() ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList">ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limit"></a>

```go
func Limit() ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference">ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.fieldInput"></a>

```go
func FieldInput() interface{}
```

- *Type:* interface{}

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.limitInput"></a>

```go
func LimitInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsRemoveFieldsList <a name="ObservabilityPipelineConfigProcessorsRemoveFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsRemoveFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsRemoveFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsRenameFieldsFieldList <a name="ObservabilityPipelineConfigProcessorsRenameFieldsFieldList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsRenameFieldsFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsRenameFieldsFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference <a name="ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSourceInput">PreserveSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSource">PreserveSource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `PreserveSourceInput`<sup>Optional</sup> <a name="PreserveSourceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSourceInput"></a>

```go
func PreserveSourceInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `PreserveSource`<sup>Required</sup> <a name="PreserveSource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.preserveSource"></a>

```go
func PreserveSource() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsRenameFieldsList <a name="ObservabilityPipelineConfigProcessorsRenameFieldsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsRenameFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigProcessorsRenameFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference <a name="ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigProcessorsRenameFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField"></a>

```go
func PutField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.putField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList">ObservabilityPipelineConfigProcessorsRenameFieldsFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.includeInput">IncludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.include">Include</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.field"></a>

```go
func Field() ObservabilityPipelineConfigProcessorsRenameFieldsFieldList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsFieldList">ObservabilityPipelineConfigProcessorsRenameFieldsFieldList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.fieldInput"></a>

```go
func FieldInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.includeInput"></a>

```go
func IncludeInput() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.include"></a>

```go
func Include() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesDatadogAgentList <a name="ObservabilityPipelineConfigSourcesDatadogAgentList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesDatadogAgentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigSourcesDatadogAgentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigSourcesDatadogAgentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesDatadogAgentOutputReference <a name="ObservabilityPipelineConfigSourcesDatadogAgentOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesDatadogAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigSourcesDatadogAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTls` <a name="PutTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls"></a>

```go
func PutTls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.putTls.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList">ObservabilityPipelineConfigSourcesDatadogAgentTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tls"></a>

```go
func Tls() ObservabilityPipelineConfigSourcesDatadogAgentTlsList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList">ObservabilityPipelineConfigSourcesDatadogAgentTlsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesDatadogAgentTlsList <a name="ObservabilityPipelineConfigSourcesDatadogAgentTlsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesDatadogAgentTlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigSourcesDatadogAgentTlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference <a name="ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetKeyFile">ResetKeyFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetCaFile"></a>

```go
func ResetCaFile()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.resetKeyFile"></a>

```go
func ResetKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFileInput">CaFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFileInput">CrtFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFileInput">KeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFile">CaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFile">CrtFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFile">KeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFileInput"></a>

```go
func CaFileInput() *string
```

- *Type:* *string

---

##### `CrtFileInput`<sup>Optional</sup> <a name="CrtFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFileInput"></a>

```go
func CrtFileInput() *string
```

- *Type:* *string

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFileInput"></a>

```go
func KeyFileInput() *string
```

- *Type:* *string

---

##### `CaFile`<sup>Required</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.caFile"></a>

```go
func CaFile() *string
```

- *Type:* *string

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.crtFile"></a>

```go
func CrtFile() *string
```

- *Type:* *string

---

##### `KeyFile`<sup>Required</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.keyFile"></a>

```go
func KeyFile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaList <a name="ObservabilityPipelineConfigSourcesKafkaList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigSourcesKafkaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigSourcesKafkaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigSourcesKafkaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption">PutLibrdkafkaOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl">PutSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetLibrdkafkaOption">ResetLibrdkafkaOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLibrdkafkaOption` <a name="PutLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption"></a>

```go
func PutLibrdkafkaOption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putLibrdkafkaOption.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSasl` <a name="PutSasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl"></a>

```go
func PutSasl(value ObservabilityPipelineConfigSourcesKafkaSasl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSasl">ObservabilityPipelineConfigSourcesKafkaSasl</a>

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls"></a>

```go
func PutTls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.putTls.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLibrdkafkaOption` <a name="ResetLibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetLibrdkafkaOption"></a>

```go
func ResetLibrdkafkaOption()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOption">LibrdkafkaOption</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference">ObservabilityPipelineConfigSourcesKafkaSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList">ObservabilityPipelineConfigSourcesKafkaTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOptionInput">LibrdkafkaOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.saslInput">SaslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topicsInput">TopicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topics">Topics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LibrdkafkaOption`<sup>Required</sup> <a name="LibrdkafkaOption" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOption"></a>

```go
func LibrdkafkaOption() ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList">ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList</a>

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.sasl"></a>

```go
func Sasl() ObservabilityPipelineConfigSourcesKafkaSaslOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference">ObservabilityPipelineConfigSourcesKafkaSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tls"></a>

```go
func Tls() ObservabilityPipelineConfigSourcesKafkaTlsList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList">ObservabilityPipelineConfigSourcesKafkaTlsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LibrdkafkaOptionInput`<sup>Optional</sup> <a name="LibrdkafkaOptionInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.librdkafkaOptionInput"></a>

```go
func LibrdkafkaOptionInput() interface{}
```

- *Type:* interface{}

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.saslInput"></a>

```go
func SaslInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topicsInput"></a>

```go
func TopicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.topics"></a>

```go
func Topics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaSaslOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaSaslOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaSaslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigSourcesKafkaSaslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanismInput">MechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanism">Mechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MechanismInput`<sup>Optional</sup> <a name="MechanismInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanismInput"></a>

```go
func MechanismInput() *string
```

- *Type:* *string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.mechanism"></a>

```go
func Mechanism() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaSaslOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaTlsList <a name="ObservabilityPipelineConfigSourcesKafkaTlsList" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaTlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityPipelineConfigSourcesKafkaTlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get"></a>

```go
func Get(index *f64) ObservabilityPipelineConfigSourcesKafkaTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesKafkaTlsOutputReference <a name="ObservabilityPipelineConfigSourcesKafkaTlsOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesKafkaTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityPipelineConfigSourcesKafkaTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetCaFile">ResetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetKeyFile">ResetKeyFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaFile` <a name="ResetCaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetCaFile"></a>

```go
func ResetCaFile()
```

##### `ResetKeyFile` <a name="ResetKeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.resetKeyFile"></a>

```go
func ResetKeyFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFileInput">CaFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFileInput">CrtFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFileInput">KeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFile">CaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFile">CrtFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFile">KeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaFileInput`<sup>Optional</sup> <a name="CaFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFileInput"></a>

```go
func CaFileInput() *string
```

- *Type:* *string

---

##### `CrtFileInput`<sup>Optional</sup> <a name="CrtFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFileInput"></a>

```go
func CrtFileInput() *string
```

- *Type:* *string

---

##### `KeyFileInput`<sup>Optional</sup> <a name="KeyFileInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFileInput"></a>

```go
func KeyFileInput() *string
```

- *Type:* *string

---

##### `CaFile`<sup>Required</sup> <a name="CaFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.caFile"></a>

```go
func CaFile() *string
```

- *Type:* *string

---

##### `CrtFile`<sup>Required</sup> <a name="CrtFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.crtFile"></a>

```go
func CrtFile() *string
```

- *Type:* *string

---

##### `KeyFile`<sup>Required</sup> <a name="KeyFile" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.keyFile"></a>

```go
func KeyFile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityPipelineConfigSourcesOutputReference <a name="ObservabilityPipelineConfigSourcesOutputReference" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/observabilitypipeline"

observabilitypipeline.NewObservabilityPipelineConfigSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityPipelineConfigSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent">PutDatadogAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka">PutKafka</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetDatadogAgent">ResetDatadogAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetKafka">ResetKafka</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatadogAgent` <a name="PutDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent"></a>

```go
func PutDatadogAgent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putDatadogAgent.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKafka` <a name="PutKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka"></a>

```go
func PutKafka(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.putKafka.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatadogAgent` <a name="ResetDatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetDatadogAgent"></a>

```go
func ResetDatadogAgent()
```

##### `ResetKafka` <a name="ResetKafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.resetKafka"></a>

```go
func ResetKafka()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgent">DatadogAgent</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList">ObservabilityPipelineConfigSourcesDatadogAgentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafka">Kafka</a></code> | <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList">ObservabilityPipelineConfigSourcesKafkaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgentInput">DatadogAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafkaInput">KafkaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatadogAgent`<sup>Required</sup> <a name="DatadogAgent" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgent"></a>

```go
func DatadogAgent() ObservabilityPipelineConfigSourcesDatadogAgentList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesDatadogAgentList">ObservabilityPipelineConfigSourcesDatadogAgentList</a>

---

##### `Kafka`<sup>Required</sup> <a name="Kafka" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafka"></a>

```go
func Kafka() ObservabilityPipelineConfigSourcesKafkaList
```

- *Type:* <a href="#@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesKafkaList">ObservabilityPipelineConfigSourcesKafkaList</a>

---

##### `DatadogAgentInput`<sup>Optional</sup> <a name="DatadogAgentInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.datadogAgentInput"></a>

```go
func DatadogAgentInput() interface{}
```

- *Type:* interface{}

---

##### `KafkaInput`<sup>Optional</sup> <a name="KafkaInput" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.kafkaInput"></a>

```go
func KafkaInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.observabilityPipeline.ObservabilityPipelineConfigSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



