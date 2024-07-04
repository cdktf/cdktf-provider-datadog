# `integrationSlackChannel` Submodule <a name="`integrationSlackChannel` Submodule" id="@cdktf/provider-datadog.integrationSlackChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSlackChannel <a name="IntegrationSlackChannel" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel datadog_integration_slack_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

integrationslackchannel.NewIntegrationSlackChannel(scope Construct, id *string, config IntegrationSlackChannelConfig) IntegrationSlackChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig">IntegrationSlackChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig">IntegrationSlackChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay">PutDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisplay` <a name="PutDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay"></a>

```go
func PutDisplay(value IntegrationSlackChannelDisplay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.putDisplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

integrationslackchannel.IntegrationSlackChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

integrationslackchannel.IntegrationSlackChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

integrationslackchannel.IntegrationSlackChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

integrationslackchannel.IntegrationSlackChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationSlackChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationSlackChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationSlackChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationSlackChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display">Display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput">DisplayInput</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.display"></a>

```go
func Display() IntegrationSlackChannelDisplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference">IntegrationSlackChannelDisplayOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.displayInput"></a>

```go
func DisplayInput() IntegrationSlackChannelDisplay
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSlackChannelConfig <a name="IntegrationSlackChannelConfig" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

&integrationslackchannel.IntegrationSlackChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	ChannelName: *string,
	Display: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.integrationSlackChannel.IntegrationSlackChannelDisplay,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Slack account name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Slack channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display">Display</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | display block. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Slack account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#account_name IntegrationSlackChannel#account_name}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#channel_name IntegrationSlackChannel#channel_name}

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.display"></a>

```go
Display IntegrationSlackChannelDisplay
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

display block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#display IntegrationSlackChannel#display}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#id IntegrationSlackChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IntegrationSlackChannelDisplay <a name="IntegrationSlackChannelDisplay" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

&integrationslackchannel.IntegrationSlackChannelDisplay {
	Message: interface{},
	Notified: interface{},
	Snapshot: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message">Message</a></code> | <code>interface{}</code> | Show the main body of the alert event. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified">Notified</a></code> | <code>interface{}</code> | Show the list of. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot">Snapshot</a></code> | <code>interface{}</code> | Show the alert event's snapshot image. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags">Tags</a></code> | <code>interface{}</code> | Show the scopes on which the monitor alerted. Defaults to `true`. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.message"></a>

```go
Message interface{}
```

- *Type:* interface{}

Show the main body of the alert event. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#message IntegrationSlackChannel#message}

---

##### `Notified`<sup>Optional</sup> <a name="Notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.notified"></a>

```go
Notified interface{}
```

- *Type:* interface{}

Show the list of.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.snapshot"></a>

```go
Snapshot interface{}
```

- *Type:* interface{}

Show the alert event's snapshot image. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#snapshot IntegrationSlackChannel#snapshot}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Show the scopes on which the monitor alerted. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/integration_slack_channel#tags IntegrationSlackChannel#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSlackChannelDisplayOutputReference <a name="IntegrationSlackChannelDisplayOutputReference" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/integrationslackchannel"

integrationslackchannel.NewIntegrationSlackChannelDisplayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationSlackChannelDisplayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified">ResetNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetNotified` <a name="ResetNotified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetNotified"></a>

```go
func ResetNotified()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput">MessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput">NotifiedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message">Message</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified">Notified</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot">Snapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags">Tags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.messageInput"></a>

```go
func MessageInput() interface{}
```

- *Type:* interface{}

---

##### `NotifiedInput`<sup>Optional</sup> <a name="NotifiedInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notifiedInput"></a>

```go
func NotifiedInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshotInput"></a>

```go
func SnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.message"></a>

```go
func Message() interface{}
```

- *Type:* interface{}

---

##### `Notified`<sup>Required</sup> <a name="Notified" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.notified"></a>

```go
func Notified() interface{}
```

- *Type:* interface{}

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.snapshot"></a>

```go
func Snapshot() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.tags"></a>

```go
func Tags() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplayOutputReference.property.internalValue"></a>

```go
func InternalValue() IntegrationSlackChannelDisplay
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationSlackChannel.IntegrationSlackChannelDisplay">IntegrationSlackChannelDisplay</a>

---



