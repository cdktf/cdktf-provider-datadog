# `monitorConfigPolicy` Submodule <a name="`monitorConfigPolicy` Submodule" id="@cdktf/provider-datadog.monitorConfigPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorConfigPolicy <a name="MonitorConfigPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy datadog_monitor_config_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

monitorconfigpolicy.NewMonitorConfigPolicy(scope Construct, id *string, config MonitorConfigPolicyConfig) MonitorConfigPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig">MonitorConfigPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig">MonitorConfigPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy">PutTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy">ResetTagPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTagPolicy` <a name="PutTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy"></a>

```go
func PutTagPolicy(value MonitorConfigPolicyTagPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTagPolicy` <a name="ResetTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy"></a>

```go
func ResetTagPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorConfigPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

monitorconfigpolicy.MonitorConfigPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

monitorconfigpolicy.MonitorConfigPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

monitorconfigpolicy.MonitorConfigPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

monitorconfigpolicy.MonitorConfigPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorConfigPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorConfigPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorConfigPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorConfigPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy">TagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput">TagPolicyInput</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TagPolicy`<sup>Required</sup> <a name="TagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy"></a>

```go
func TagPolicy() MonitorConfigPolicyTagPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `TagPolicyInput`<sup>Optional</sup> <a name="TagPolicyInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput"></a>

```go
func TagPolicyInput() MonitorConfigPolicyTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfigPolicyConfig <a name="MonitorConfigPolicyConfig" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

&monitorconfigpolicy.MonitorConfigPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyType: *string,
	Id: *string,
	TagPolicy: github.com/cdktf/cdktf-provider-datadog-go/datadog/v11.monitorConfigPolicy.MonitorConfigPolicyTagPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType">PolicyType</a></code> | <code>*string</code> | The monitor config policy type Valid values are `tag`. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy">TagPolicy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | tag_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

The monitor config policy type Valid values are `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TagPolicy`<sup>Optional</sup> <a name="TagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy"></a>

```go
TagPolicy MonitorConfigPolicyTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

tag_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}

---

### MonitorConfigPolicyTagPolicy <a name="MonitorConfigPolicyTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

&monitorconfigpolicy.MonitorConfigPolicyTagPolicy {
	TagKey: *string,
	TagKeyRequired: interface{},
	ValidTagValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey">TagKey</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired">TagKeyRequired</a></code> | <code>interface{}</code> | If a tag key is required for monitor creation. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues">ValidTagValues</a></code> | <code>*[]*string</code> | Valid values for the tag. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#tag_key MonitorConfigPolicy#tag_key}

---

##### `TagKeyRequired`<sup>Required</sup> <a name="TagKeyRequired" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired"></a>

```go
TagKeyRequired interface{}
```

- *Type:* interface{}

If a tag key is required for monitor creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#tag_key_required MonitorConfigPolicy#tag_key_required}

---

##### `ValidTagValues`<sup>Required</sup> <a name="ValidTagValues" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues"></a>

```go
ValidTagValues *[]*string
```

- *Type:* *[]*string

Valid values for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/resources/monitor_config_policy#valid_tag_values MonitorConfigPolicy#valid_tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorConfigPolicyTagPolicyOutputReference <a name="MonitorConfigPolicyTagPolicyOutputReference" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/monitorconfigpolicy"

monitorconfigpolicy.NewMonitorConfigPolicyTagPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorConfigPolicyTagPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput">TagKeyRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput">ValidTagValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired">TagKeyRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues">ValidTagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagKeyRequiredInput`<sup>Optional</sup> <a name="TagKeyRequiredInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput"></a>

```go
func TagKeyRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ValidTagValuesInput`<sup>Optional</sup> <a name="ValidTagValuesInput" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput"></a>

```go
func ValidTagValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagKeyRequired`<sup>Required</sup> <a name="TagKeyRequired" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired"></a>

```go
func TagKeyRequired() interface{}
```

- *Type:* interface{}

---

##### `ValidTagValues`<sup>Required</sup> <a name="ValidTagValues" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues"></a>

```go
func ValidTagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorConfigPolicyTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---



