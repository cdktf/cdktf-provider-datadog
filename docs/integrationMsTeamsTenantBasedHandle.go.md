# `integrationMsTeamsTenantBasedHandle` Submodule <a name="`integrationMsTeamsTenantBasedHandle` Submodule" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMsTeamsTenantBasedHandle <a name="IntegrationMsTeamsTenantBasedHandle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_ms_teams_tenant_based_handle datadog_integration_ms_teams_tenant_based_handle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationmsteamstenantbasedhandle"

integrationmsteamstenantbasedhandle.NewIntegrationMsTeamsTenantBasedHandle(scope Construct, id *string, config IntegrationMsTeamsTenantBasedHandleConfig) IntegrationMsTeamsTenantBasedHandle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig">IntegrationMsTeamsTenantBasedHandleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig">IntegrationMsTeamsTenantBasedHandleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationmsteamstenantbasedhandle"

integrationmsteamstenantbasedhandle.IntegrationMsTeamsTenantBasedHandle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationmsteamstenantbasedhandle"

integrationmsteamstenantbasedhandle.IntegrationMsTeamsTenantBasedHandle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationmsteamstenantbasedhandle"

integrationmsteamstenantbasedhandle.IntegrationMsTeamsTenantBasedHandle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationmsteamstenantbasedhandle"

integrationmsteamstenantbasedhandle.IntegrationMsTeamsTenantBasedHandle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationMsTeamsTenantBasedHandle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationMsTeamsTenantBasedHandle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationMsTeamsTenantBasedHandle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_ms_teams_tenant_based_handle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMsTeamsTenantBasedHandle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput">TeamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput">TenantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName">TenantName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamNameInput"></a>

```go
func TeamNameInput() *string
```

- *Type:* *string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantNameInput"></a>

```go
func TenantNameInput() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tenantName"></a>

```go
func TenantName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMsTeamsTenantBasedHandleConfig <a name="IntegrationMsTeamsTenantBasedHandleConfig" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationmsteamstenantbasedhandle"

&integrationmsteamstenantbasedhandle.IntegrationMsTeamsTenantBasedHandleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelName: *string,
	Name: *string,
	TeamName: *string,
	TenantName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Your channel name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name">Name</a></code> | <code>*string</code> | Your tenant-based handle name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName">TeamName</a></code> | <code>*string</code> | Your team name. |
| <code><a href="#@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName">TenantName</a></code> | <code>*string</code> | Your tenant name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Your channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_ms_teams_tenant_based_handle#channel_name IntegrationMsTeamsTenantBasedHandle#channel_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Your tenant-based handle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_ms_teams_tenant_based_handle#name IntegrationMsTeamsTenantBasedHandle#name}

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.teamName"></a>

```go
TeamName *string
```

- *Type:* *string

Your team name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_ms_teams_tenant_based_handle#team_name IntegrationMsTeamsTenantBasedHandle#team_name}

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationMsTeamsTenantBasedHandle.IntegrationMsTeamsTenantBasedHandleConfig.property.tenantName"></a>

```go
TenantName *string
```

- *Type:* *string

Your tenant name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_ms_teams_tenant_based_handle#tenant_name IntegrationMsTeamsTenantBasedHandle#tenant_name}

---



