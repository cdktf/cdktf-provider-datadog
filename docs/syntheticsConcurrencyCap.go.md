# `syntheticsConcurrencyCap` Submodule <a name="`syntheticsConcurrencyCap` Submodule" id="@cdktf/provider-datadog.syntheticsConcurrencyCap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsConcurrencyCap <a name="SyntheticsConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/synthetics_concurrency_cap datadog_synthetics_concurrency_cap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/syntheticsconcurrencycap"

syntheticsconcurrencycap.NewSyntheticsConcurrencyCap(scope Construct, id *string, config SyntheticsConcurrencyCapConfig) SyntheticsConcurrencyCap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig">SyntheticsConcurrencyCapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig">SyntheticsConcurrencyCapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsConcurrencyCap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/syntheticsconcurrencycap"

syntheticsconcurrencycap.SyntheticsConcurrencyCap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/syntheticsconcurrencycap"

syntheticsconcurrencycap.SyntheticsConcurrencyCap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/syntheticsconcurrencycap"

syntheticsconcurrencycap.SyntheticsConcurrencyCap_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/syntheticsconcurrencycap"

syntheticsconcurrencycap.SyntheticsConcurrencyCap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SyntheticsConcurrencyCap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SyntheticsConcurrencyCap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SyntheticsConcurrencyCap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/synthetics_concurrency_cap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsConcurrencyCap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCapInput">OnDemandConcurrencyCapInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCap">OnDemandConcurrencyCap</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnDemandConcurrencyCapInput`<sup>Optional</sup> <a name="OnDemandConcurrencyCapInput" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCapInput"></a>

```go
func OnDemandConcurrencyCapInput() *f64
```

- *Type:* *f64

---

##### `OnDemandConcurrencyCap`<sup>Required</sup> <a name="OnDemandConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.onDemandConcurrencyCap"></a>

```go
func OnDemandConcurrencyCap() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsConcurrencyCapConfig <a name="SyntheticsConcurrencyCapConfig" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/syntheticsconcurrencycap"

&syntheticsconcurrencycap.SyntheticsConcurrencyCapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OnDemandConcurrencyCap: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.onDemandConcurrencyCap">OnDemandConcurrencyCap</a></code> | <code>*f64</code> | Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OnDemandConcurrencyCap`<sup>Required</sup> <a name="OnDemandConcurrencyCap" id="@cdktf/provider-datadog.syntheticsConcurrencyCap.SyntheticsConcurrencyCapConfig.property.onDemandConcurrencyCap"></a>

```go
OnDemandConcurrencyCap *f64
```

- *Type:* *f64

Value of the on-demand concurrency cap, customizing the number of Synthetic tests run in parallel.

Value must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/synthetics_concurrency_cap#on_demand_concurrency_cap SyntheticsConcurrencyCap#on_demand_concurrency_cap}

---



