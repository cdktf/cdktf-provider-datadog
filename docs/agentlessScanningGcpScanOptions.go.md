# `agentlessScanningGcpScanOptions` Submodule <a name="`agentlessScanningGcpScanOptions` Submodule" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningGcpScanOptions <a name="AgentlessScanningGcpScanOptions" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options datadog_agentless_scanning_gcp_scan_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/agentlessscanninggcpscanoptions"

agentlessscanninggcpscanoptions.NewAgentlessScanningGcpScanOptions(scope Construct, id *string, config AgentlessScanningGcpScanOptionsConfig) AgentlessScanningGcpScanOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig">AgentlessScanningGcpScanOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig">AgentlessScanningGcpScanOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/agentlessscanninggcpscanoptions"

agentlessscanninggcpscanoptions.AgentlessScanningGcpScanOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/agentlessscanninggcpscanoptions"

agentlessscanninggcpscanoptions.AgentlessScanningGcpScanOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/agentlessscanninggcpscanoptions"

agentlessscanninggcpscanoptions.AgentlessScanningGcpScanOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/agentlessscanninggcpscanoptions"

agentlessscanninggcpscanoptions.AgentlessScanningGcpScanOptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentlessScanningGcpScanOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentlessScanningGcpScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AgentlessScanningGcpScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput">GcpProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput">VulnContainersOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput">VulnHostOsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs">VulnContainersOs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs">VulnHostOs</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `GcpProjectIdInput`<sup>Optional</sup> <a name="GcpProjectIdInput" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput"></a>

```go
func GcpProjectIdInput() *string
```

- *Type:* *string

---

##### `VulnContainersOsInput`<sup>Optional</sup> <a name="VulnContainersOsInput" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput"></a>

```go
func VulnContainersOsInput() interface{}
```

- *Type:* interface{}

---

##### `VulnHostOsInput`<sup>Optional</sup> <a name="VulnHostOsInput" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput"></a>

```go
func VulnHostOsInput() interface{}
```

- *Type:* interface{}

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId"></a>

```go
func GcpProjectId() *string
```

- *Type:* *string

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs"></a>

```go
func VulnContainersOs() interface{}
```

- *Type:* interface{}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs"></a>

```go
func VulnHostOs() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningGcpScanOptionsConfig <a name="AgentlessScanningGcpScanOptionsConfig" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/agentlessscanninggcpscanoptions"

&agentlessscanninggcpscanoptions.AgentlessScanningGcpScanOptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GcpProjectId: *string,
	VulnContainersOs: interface{},
	VulnHostOs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId">GcpProjectId</a></code> | <code>*string</code> | The GCP project ID for which agentless scanning is configured. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs">VulnContainersOs</a></code> | <code>interface{}</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs">VulnHostOs</a></code> | <code>interface{}</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GcpProjectId`<sup>Required</sup> <a name="GcpProjectId" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId"></a>

```go
GcpProjectId *string
```

- *Type:* *string

The GCP project ID for which agentless scanning is configured.

Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}

---

##### `VulnContainersOs`<sup>Required</sup> <a name="VulnContainersOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs"></a>

```go
VulnContainersOs interface{}
```

- *Type:* interface{}

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}

---

##### `VulnHostOs`<sup>Required</sup> <a name="VulnHostOs" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs"></a>

```go
VulnHostOs interface{}
```

- *Type:* interface{}

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}

---



