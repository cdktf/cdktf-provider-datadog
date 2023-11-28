# `sloCorrection` Submodule <a name="`sloCorrection` Submodule" id="@cdktf/provider-datadog.sloCorrection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SloCorrection <a name="SloCorrection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction datadog_slo_correction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/slocorrection"

slocorrection.NewSloCorrection(scope Construct, id *string, config SloCorrectionConfig) SloCorrection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig">SloCorrectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule">ResetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId"></a>

```go
func ResetId()
```

##### `ResetRrule` <a name="ResetRrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule"></a>

```go
func ResetRrule()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone"></a>

```go
func ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SloCorrection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/slocorrection"

slocorrection.SloCorrection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/slocorrection"

slocorrection.SloCorrection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/slocorrection"

slocorrection.SloCorrection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/slocorrection"

slocorrection.SloCorrection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SloCorrection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SloCorrection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SloCorrection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SloCorrection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput">RruleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput">SloIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule">Rrule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId">SloId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput"></a>

```go
func RruleInput() *string
```

- *Type:* *string

---

##### `SloIdInput`<sup>Optional</sup> <a name="SloIdInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput"></a>

```go
func SloIdInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule"></a>

```go
func Rrule() *string
```

- *Type:* *string

---

##### `SloId`<sup>Required</sup> <a name="SloId" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId"></a>

```go
func SloId() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SloCorrectionConfig <a name="SloCorrectionConfig" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/slocorrection"

&slocorrection.SloCorrectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Category: *string,
	SloId: *string,
	Start: *f64,
	Description: *string,
	Duration: *f64,
	End: *f64,
	Id: *string,
	Rrule: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category">Category</a></code> | <code>*string</code> | Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId">SloId</a></code> | <code>*string</code> | ID of the SLO that this correction will be applied to. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start">Start</a></code> | <code>*f64</code> | Starting time of the correction in epoch seconds. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description">Description</a></code> | <code>*string</code> | Description of the correction being made. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration">Duration</a></code> | <code>*f64</code> | Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`). |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end">End</a></code> | <code>*f64</code> | Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#id SloCorrection#id}. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule">Rrule</a></code> | <code>*string</code> | Recurrence rules as defined in the iCalendar RFC 5545. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone">Timezone</a></code> | <code>*string</code> | The timezone to display in the UI for the correction times (defaults to "UTC"). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#category SloCorrection#category}

---

##### `SloId`<sup>Required</sup> <a name="SloId" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId"></a>

```go
SloId *string
```

- *Type:* *string

ID of the SLO that this correction will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#slo_id SloCorrection#slo_id}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

Starting time of the correction in epoch seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#start SloCorrection#start}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the correction being made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#description SloCorrection#description}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#duration SloCorrection#duration}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end"></a>

```go
End *f64
```

- *Type:* *f64

Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#end SloCorrection#end}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#id SloCorrection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rrule`<sup>Optional</sup> <a name="Rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule"></a>

```go
Rrule *string
```

- *Type:* *string

Recurrence rules as defined in the iCalendar RFC 5545.

Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#rrule SloCorrection#rrule}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The timezone to display in the UI for the correction times (defaults to "UTC").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/slo_correction#timezone SloCorrection#timezone}

---



