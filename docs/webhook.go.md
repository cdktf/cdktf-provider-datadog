# `webhook` Submodule <a name="`webhook` Submodule" id="@cdktf/provider-datadog.webhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Webhook <a name="Webhook" id="@cdktf/provider-datadog.webhook.Webhook"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook datadog_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.webhook.Webhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/webhook"

webhook.NewWebhook(scope Construct, id *string, config WebhookConfig) Webhook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig">WebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.webhook.Webhook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.webhook.Webhook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.webhook.Webhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.webhook.WebhookConfig">WebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.resetEncodeAs">ResetEncodeAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.resetPayload">ResetPayload</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.webhook.Webhook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.webhook.Webhook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.webhook.Webhook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.webhook.Webhook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.webhook.Webhook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.webhook.Webhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.webhook.Webhook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.webhook.Webhook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.webhook.Webhook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.webhook.Webhook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.webhook.Webhook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.webhook.Webhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.webhook.Webhook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.webhook.Webhook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.webhook.Webhook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.webhook.Webhook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.webhook.Webhook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.webhook.Webhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.webhook.Webhook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.webhook.Webhook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.webhook.Webhook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.webhook.Webhook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.webhook.Webhook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.webhook.Webhook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.webhook.Webhook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktf/provider-datadog.webhook.Webhook.resetCustomHeaders"></a>

```go
func ResetCustomHeaders()
```

##### `ResetEncodeAs` <a name="ResetEncodeAs" id="@cdktf/provider-datadog.webhook.Webhook.resetEncodeAs"></a>

```go
func ResetEncodeAs()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktf/provider-datadog.webhook.Webhook.resetPayload"></a>

```go
func ResetPayload()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.webhook.Webhook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/webhook"

webhook.Webhook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.webhook.Webhook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.webhook.Webhook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/webhook"

webhook.Webhook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.webhook.Webhook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.webhook.Webhook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/webhook"

webhook.Webhook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.webhook.Webhook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.webhook.Webhook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/webhook"

webhook.Webhook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Webhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.webhook.Webhook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.webhook.Webhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Webhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.webhook.Webhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Webhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.webhook.Webhook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Webhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.customHeadersInput">CustomHeadersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.encodeAsInput">EncodeAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.customHeaders">CustomHeaders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.encodeAs">EncodeAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.webhook.Webhook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.webhook.Webhook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.webhook.Webhook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.webhook.Webhook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.webhook.Webhook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.webhook.Webhook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.webhook.Webhook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.webhook.Webhook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.webhook.Webhook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.webhook.Webhook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.webhook.Webhook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.webhook.Webhook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.webhook.Webhook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.webhook.Webhook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.webhook.Webhook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktf/provider-datadog.webhook.Webhook.property.customHeadersInput"></a>

```go
func CustomHeadersInput() *string
```

- *Type:* *string

---

##### `EncodeAsInput`<sup>Optional</sup> <a name="EncodeAsInput" id="@cdktf/provider-datadog.webhook.Webhook.property.encodeAsInput"></a>

```go
func EncodeAsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.webhook.Webhook.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktf/provider-datadog.webhook.Webhook.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.webhook.Webhook.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktf/provider-datadog.webhook.Webhook.property.customHeaders"></a>

```go
func CustomHeaders() *string
```

- *Type:* *string

---

##### `EncodeAs`<sup>Required</sup> <a name="EncodeAs" id="@cdktf/provider-datadog.webhook.Webhook.property.encodeAs"></a>

```go
func EncodeAs() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.webhook.Webhook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-datadog.webhook.Webhook.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.webhook.Webhook.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.webhook.Webhook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.webhook.Webhook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookConfig <a name="WebhookConfig" id="@cdktf/provider-datadog.webhook.WebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.webhook.WebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/webhook"

&webhook.WebhookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Url: *string,
	CustomHeaders: *string,
	EncodeAs: *string,
	Payload: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.name">Name</a></code> | <code>*string</code> | The name of the webhook. It corresponds with `<WEBHOOK_NAME>`. |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.url">Url</a></code> | <code>*string</code> | The URL of the webhook. |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.customHeaders">CustomHeaders</a></code> | <code>*string</code> | The headers attached to the webhook. |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.encodeAs">EncodeAs</a></code> | <code>*string</code> | Encoding type. Valid values are `json`, `form`. |
| <code><a href="#@cdktf/provider-datadog.webhook.WebhookConfig.property.payload">Payload</a></code> | <code>*string</code> | The payload of the webhook. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the webhook. It corresponds with `<WEBHOOK_NAME>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook#name Webhook#name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook#url Webhook#url}

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.customHeaders"></a>

```go
CustomHeaders *string
```

- *Type:* *string

The headers attached to the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook#custom_headers Webhook#custom_headers}

---

##### `EncodeAs`<sup>Optional</sup> <a name="EncodeAs" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.encodeAs"></a>

```go
EncodeAs *string
```

- *Type:* *string

Encoding type. Valid values are `json`, `form`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook#encode_as Webhook#encode_as}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktf/provider-datadog.webhook.WebhookConfig.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

The payload of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook#payload Webhook#payload}

---



