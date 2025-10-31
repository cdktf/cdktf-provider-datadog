# `tagPipelineRuleset` Submodule <a name="`tagPipelineRuleset` Submodule" id="@cdktf/provider-datadog.tagPipelineRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagPipelineRuleset <a name="TagPipelineRuleset" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset datadog_tag_pipeline_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRuleset(scope Construct, id *string, config TagPipelineRulesetConfig) TagPipelineRuleset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig">TagPipelineRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig">TagPipelineRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.resetRules"></a>

```go
func ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.TagPipelineRuleset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.TagPipelineRuleset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.TagPipelineRuleset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.TagPipelineRuleset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TagPipelineRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TagPipelineRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TagPipelineRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TagPipelineRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rules"></a>

```go
func Rules() TagPipelineRulesetRulesList
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList">TagPipelineRulesetRulesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRuleset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TagPipelineRulesetConfig <a name="TagPipelineRulesetConfig" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Enabled: interface{},
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the ruleset is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the ruleset is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#rules TagPipelineRuleset#rules}

---

### TagPipelineRulesetRules <a name="TagPipelineRulesetRules" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetRules {
	Enabled: interface{},
	Name: *string,
	Mapping: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.tagPipelineRuleset.TagPipelineRulesetRulesMapping,
	Query: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.tagPipelineRuleset.TagPipelineRulesetRulesQuery,
	ReferenceTable: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name">Name</a></code> | <code>*string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping">Mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a></code> | mapping block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable">ReferenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a></code> | reference_table block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#enabled TagPipelineRuleset#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#name TagPipelineRuleset#name}

---

##### `Mapping`<sup>Optional</sup> <a name="Mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.mapping"></a>

```go
Mapping TagPipelineRulesetRulesMapping
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#mapping TagPipelineRuleset#mapping}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.query"></a>

```go
Query TagPipelineRulesetRulesQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

##### `ReferenceTable`<sup>Optional</sup> <a name="ReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRules.property.referenceTable"></a>

```go
ReferenceTable TagPipelineRulesetRulesReferenceTable
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

reference_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#reference_table TagPipelineRuleset#reference_table}

---

### TagPipelineRulesetRulesMapping <a name="TagPipelineRulesetRulesMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetRulesMapping {
	DestinationKey: *string,
	IfNotExists: interface{},
	SourceKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey">DestinationKey</a></code> | <code>*string</code> | The destination key for the mapping. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | Whether to apply the mapping only if the destination key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys">SourceKeys</a></code> | <code>*[]*string</code> | The source keys for the mapping. |

---

##### `DestinationKey`<sup>Optional</sup> <a name="DestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.destinationKey"></a>

```go
DestinationKey *string
```

- *Type:* *string

The destination key for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#destination_key TagPipelineRuleset#destination_key}

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.ifNotExists"></a>

```go
IfNotExists interface{}
```

- *Type:* interface{}

Whether to apply the mapping only if the destination key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `SourceKeys`<sup>Optional</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping.property.sourceKeys"></a>

```go
SourceKeys *[]*string
```

- *Type:* *[]*string

The source keys for the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

### TagPipelineRulesetRulesQuery <a name="TagPipelineRulesetRulesQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetRulesQuery {
	Addition: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition,
	CaseInsensitivity: interface{},
	IfNotExists: interface{},
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition">Addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a></code> | addition block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>interface{}</code> | Whether the query matching is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | Whether to apply the query only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query">Query</a></code> | <code>*string</code> | The query string. |

---

##### `Addition`<sup>Optional</sup> <a name="Addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.addition"></a>

```go
Addition TagPipelineRulesetRulesQueryAddition
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

addition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#addition TagPipelineRuleset#addition}

---

##### `CaseInsensitivity`<sup>Optional</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.caseInsensitivity"></a>

```go
CaseInsensitivity interface{}
```

- *Type:* interface{}

Whether the query matching is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.ifNotExists"></a>

```go
IfNotExists interface{}
```

- *Type:* interface{}

Whether to apply the query only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

The query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#query TagPipelineRuleset#query}

---

### TagPipelineRulesetRulesQueryAddition <a name="TagPipelineRulesetRulesQueryAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetRulesQueryAddition {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key">Key</a></code> | <code>*string</code> | The key to add. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value">Value</a></code> | <code>*string</code> | The value to add. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#key TagPipelineRuleset#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#value TagPipelineRuleset#value}

---

### TagPipelineRulesetRulesReferenceTable <a name="TagPipelineRulesetRulesReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetRulesReferenceTable {
	CaseInsensitivity: interface{},
	FieldPairs: interface{},
	IfNotExists: interface{},
	SourceKeys: *[]*string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>interface{}</code> | Whether the reference table lookup is case insensitive. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs">FieldPairs</a></code> | <code>interface{}</code> | field_pairs block. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | Whether to apply the reference table only if the key doesn't exist. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys">SourceKeys</a></code> | <code>*[]*string</code> | The source keys for the reference table lookup. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName">TableName</a></code> | <code>*string</code> | The name of the reference table. |

---

##### `CaseInsensitivity`<sup>Optional</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.caseInsensitivity"></a>

```go
CaseInsensitivity interface{}
```

- *Type:* interface{}

Whether the reference table lookup is case insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#case_insensitivity TagPipelineRuleset#case_insensitivity}

---

##### `FieldPairs`<sup>Optional</sup> <a name="FieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.fieldPairs"></a>

```go
FieldPairs interface{}
```

- *Type:* interface{}

field_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#field_pairs TagPipelineRuleset#field_pairs}

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.ifNotExists"></a>

```go
IfNotExists interface{}
```

- *Type:* interface{}

Whether to apply the reference table only if the key doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#if_not_exists TagPipelineRuleset#if_not_exists}

---

##### `SourceKeys`<sup>Optional</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.sourceKeys"></a>

```go
SourceKeys *[]*string
```

- *Type:* *[]*string

The source keys for the reference table lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#source_keys TagPipelineRuleset#source_keys}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#table_name TagPipelineRuleset#table_name}

---

### TagPipelineRulesetRulesReferenceTableFieldPairs <a name="TagPipelineRulesetRulesReferenceTableFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

&tagpipelineruleset.TagPipelineRulesetRulesReferenceTableFieldPairs {
	InputColumn: *string,
	OutputKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn">InputColumn</a></code> | <code>*string</code> | The input column name. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey">OutputKey</a></code> | <code>*string</code> | The output key name. |

---

##### `InputColumn`<sup>Optional</sup> <a name="InputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.inputColumn"></a>

```go
InputColumn *string
```

- *Type:* *string

The input column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#input_column TagPipelineRuleset#input_column}

---

##### `OutputKey`<sup>Optional</sup> <a name="OutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairs.property.outputKey"></a>

```go
OutputKey *string
```

- *Type:* *string

The output key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/tag_pipeline_ruleset#output_key TagPipelineRuleset#output_key}

---

## Classes <a name="Classes" id="Classes"></a>

### TagPipelineRulesetRulesList <a name="TagPipelineRulesetRulesList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TagPipelineRulesetRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get"></a>

```go
func Get(index *f64) TagPipelineRulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesMappingOutputReference <a name="TagPipelineRulesetRulesMappingOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagPipelineRulesetRulesMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey">ResetDestinationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys">ResetSourceKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationKey` <a name="ResetDestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetDestinationKey"></a>

```go
func ResetDestinationKey()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetIfNotExists"></a>

```go
func ResetIfNotExists()
```

##### `ResetSourceKeys` <a name="ResetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.resetSourceKeys"></a>

```go
func ResetSourceKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput">DestinationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput">SourceKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey">DestinationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys">SourceKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationKeyInput`<sup>Optional</sup> <a name="DestinationKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKeyInput"></a>

```go
func DestinationKeyInput() *string
```

- *Type:* *string

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExistsInput"></a>

```go
func IfNotExistsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceKeysInput`<sup>Optional</sup> <a name="SourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeysInput"></a>

```go
func SourceKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationKey`<sup>Required</sup> <a name="DestinationKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.destinationKey"></a>

```go
func DestinationKey() *string
```

- *Type:* *string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.ifNotExists"></a>

```go
func IfNotExists() interface{}
```

- *Type:* interface{}

---

##### `SourceKeys`<sup>Required</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.sourceKeys"></a>

```go
func SourceKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesOutputReference <a name="TagPipelineRulesetRulesOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TagPipelineRulesetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping">PutMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable">PutReferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping">ResetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable">ResetReferenceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMapping` <a name="PutMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping"></a>

```go
func PutMapping(value TagPipelineRulesetRulesMapping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMapping">TagPipelineRulesetRulesMapping</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery"></a>

```go
func PutQuery(value TagPipelineRulesetRulesQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQuery">TagPipelineRulesetRulesQuery</a>

---

##### `PutReferenceTable` <a name="PutReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable"></a>

```go
func PutReferenceTable(value TagPipelineRulesetRulesReferenceTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.putReferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTable">TagPipelineRulesetRulesReferenceTable</a>

---

##### `ResetMapping` <a name="ResetMapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetMapping"></a>

```go
func ResetMapping()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetReferenceTable` <a name="ResetReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.resetReferenceTable"></a>

```go
func ResetReferenceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping">Mapping</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable">ReferenceTable</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput">MappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput">QueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput">ReferenceTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mapping"></a>

```go
func Mapping() TagPipelineRulesetRulesMappingOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesMappingOutputReference">TagPipelineRulesetRulesMappingOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.query"></a>

```go
func Query() TagPipelineRulesetRulesQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference">TagPipelineRulesetRulesQueryOutputReference</a>

---

##### `ReferenceTable`<sup>Required</sup> <a name="ReferenceTable" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTable"></a>

```go
func ReferenceTable() TagPipelineRulesetRulesReferenceTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference">TagPipelineRulesetRulesReferenceTableOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.mappingInput"></a>

```go
func MappingInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.queryInput"></a>

```go
func QueryInput() interface{}
```

- *Type:* interface{}

---

##### `ReferenceTableInput`<sup>Optional</sup> <a name="ReferenceTableInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.referenceTableInput"></a>

```go
func ReferenceTableInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesQueryAdditionOutputReference <a name="TagPipelineRulesetRulesQueryAdditionOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesQueryAdditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagPipelineRulesetRulesQueryAdditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesQueryOutputReference <a name="TagPipelineRulesetRulesQueryOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagPipelineRulesetRulesQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition">PutAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition">ResetAddition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity">ResetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddition` <a name="PutAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition"></a>

```go
func PutAddition(value TagPipelineRulesetRulesQueryAddition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.putAddition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAddition">TagPipelineRulesetRulesQueryAddition</a>

---

##### `ResetAddition` <a name="ResetAddition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetAddition"></a>

```go
func ResetAddition()
```

##### `ResetCaseInsensitivity` <a name="ResetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetCaseInsensitivity"></a>

```go
func ResetCaseInsensitivity()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetIfNotExists"></a>

```go
func ResetIfNotExists()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition">Addition</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput">AdditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput">CaseInsensitivityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Addition`<sup>Required</sup> <a name="Addition" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.addition"></a>

```go
func Addition() TagPipelineRulesetRulesQueryAdditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryAdditionOutputReference">TagPipelineRulesetRulesQueryAdditionOutputReference</a>

---

##### `AdditionInput`<sup>Optional</sup> <a name="AdditionInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.additionInput"></a>

```go
func AdditionInput() interface{}
```

- *Type:* interface{}

---

##### `CaseInsensitivityInput`<sup>Optional</sup> <a name="CaseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivityInput"></a>

```go
func CaseInsensitivityInput() interface{}
```

- *Type:* interface{}

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExistsInput"></a>

```go
func IfNotExistsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `CaseInsensitivity`<sup>Required</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.caseInsensitivity"></a>

```go
func CaseInsensitivity() interface{}
```

- *Type:* interface{}

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.ifNotExists"></a>

```go
func IfNotExists() interface{}
```

- *Type:* interface{}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesReferenceTableFieldPairsList <a name="TagPipelineRulesetRulesReferenceTableFieldPairsList" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesReferenceTableFieldPairsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TagPipelineRulesetRulesReferenceTableFieldPairsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get"></a>

```go
func Get(index *f64) TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference <a name="TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesReferenceTableFieldPairsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn">ResetInputColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey">ResetOutputKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputColumn` <a name="ResetInputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetInputColumn"></a>

```go
func ResetInputColumn()
```

##### `ResetOutputKey` <a name="ResetOutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.resetOutputKey"></a>

```go
func ResetOutputKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput">InputColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput">OutputKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn">InputColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey">OutputKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputColumnInput`<sup>Optional</sup> <a name="InputColumnInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumnInput"></a>

```go
func InputColumnInput() *string
```

- *Type:* *string

---

##### `OutputKeyInput`<sup>Optional</sup> <a name="OutputKeyInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKeyInput"></a>

```go
func OutputKeyInput() *string
```

- *Type:* *string

---

##### `InputColumn`<sup>Required</sup> <a name="InputColumn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.inputColumn"></a>

```go
func InputColumn() *string
```

- *Type:* *string

---

##### `OutputKey`<sup>Required</sup> <a name="OutputKey" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.outputKey"></a>

```go
func OutputKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TagPipelineRulesetRulesReferenceTableOutputReference <a name="TagPipelineRulesetRulesReferenceTableOutputReference" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/tagpipelineruleset"

tagpipelineruleset.NewTagPipelineRulesetRulesReferenceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TagPipelineRulesetRulesReferenceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs">PutFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity">ResetCaseInsensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs">ResetFieldPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys">ResetSourceKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldPairs` <a name="PutFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs"></a>

```go
func PutFieldPairs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.putFieldPairs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCaseInsensitivity` <a name="ResetCaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetCaseInsensitivity"></a>

```go
func ResetCaseInsensitivity()
```

##### `ResetFieldPairs` <a name="ResetFieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetFieldPairs"></a>

```go
func ResetFieldPairs()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetIfNotExists"></a>

```go
func ResetIfNotExists()
```

##### `ResetSourceKeys` <a name="ResetSourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetSourceKeys"></a>

```go
func ResetSourceKeys()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs">FieldPairs</a></code> | <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput">CaseInsensitivityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput">FieldPairsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput">SourceKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity">CaseInsensitivity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists">IfNotExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys">SourceKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPairs`<sup>Required</sup> <a name="FieldPairs" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairs"></a>

```go
func FieldPairs() TagPipelineRulesetRulesReferenceTableFieldPairsList
```

- *Type:* <a href="#@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableFieldPairsList">TagPipelineRulesetRulesReferenceTableFieldPairsList</a>

---

##### `CaseInsensitivityInput`<sup>Optional</sup> <a name="CaseInsensitivityInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivityInput"></a>

```go
func CaseInsensitivityInput() interface{}
```

- *Type:* interface{}

---

##### `FieldPairsInput`<sup>Optional</sup> <a name="FieldPairsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.fieldPairsInput"></a>

```go
func FieldPairsInput() interface{}
```

- *Type:* interface{}

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExistsInput"></a>

```go
func IfNotExistsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceKeysInput`<sup>Optional</sup> <a name="SourceKeysInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeysInput"></a>

```go
func SourceKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CaseInsensitivity`<sup>Required</sup> <a name="CaseInsensitivity" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.caseInsensitivity"></a>

```go
func CaseInsensitivity() interface{}
```

- *Type:* interface{}

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.ifNotExists"></a>

```go
func IfNotExists() interface{}
```

- *Type:* interface{}

---

##### `SourceKeys`<sup>Required</sup> <a name="SourceKeys" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.sourceKeys"></a>

```go
func SourceKeys() *[]*string
```

- *Type:* *[]*string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.tagPipelineRuleset.TagPipelineRulesetRulesReferenceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



