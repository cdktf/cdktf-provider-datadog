# `datadog_integration_gcp`

Refer to the Terraform Registory for docs: [`datadog_integration_gcp`](https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp).

# `integrationGcp` Submodule <a name="`integrationGcp` Submodule" id="@cdktf/provider-datadog.integrationGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcp <a name="IntegrationGcp" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp datadog_integration_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/integrationgcp"

integrationgcp.NewIntegrationGcp(scope Construct, id *string, config IntegrationGcpConfig) IntegrationGcp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig">IntegrationGcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig">IntegrationGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute">ResetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled">ResetCspmResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters">ResetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAutomute` <a name="ResetAutomute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute"></a>

```go
func ResetAutomute()
```

##### `ResetCspmResourceCollectionEnabled` <a name="ResetCspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled"></a>

```go
func ResetCspmResourceCollectionEnabled()
```

##### `ResetHostFilters` <a name="ResetHostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters"></a>

```go
func ResetHostFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/integrationgcp"

integrationgcp.IntegrationGcp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/integrationgcp"

integrationgcp.IntegrationGcp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/integrationgcp"

integrationgcp.IntegrationGcp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/integrationgcp"

integrationgcp.IntegrationGcp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput">AutomuteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput">ClientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput">CspmResourceCollectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput">HostFiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute">Automute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled">CspmResourceCollectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters">HostFilters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomuteInput`<sup>Optional</sup> <a name="AutomuteInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput"></a>

```go
func AutomuteInput() interface{}
```

- *Type:* interface{}

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput"></a>

```go
func ClientEmailInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `CspmResourceCollectionEnabledInput`<sup>Optional</sup> <a name="CspmResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput"></a>

```go
func CspmResourceCollectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostFiltersInput`<sup>Optional</sup> <a name="HostFiltersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput"></a>

```go
func HostFiltersInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Automute`<sup>Required</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute"></a>

```go
func Automute() interface{}
```

- *Type:* interface{}

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail"></a>

```go
func ClientEmail() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `CspmResourceCollectionEnabled`<sup>Required</sup> <a name="CspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled"></a>

```go
func CspmResourceCollectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `HostFilters`<sup>Required</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters"></a>

```go
func HostFilters() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpConfig <a name="IntegrationGcpConfig" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v10/integrationgcp"

&integrationgcp.IntegrationGcpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientEmail: *string,
	ClientId: *string,
	PrivateKey: *string,
	PrivateKeyId: *string,
	ProjectId: *string,
	Automute: interface{},
	CspmResourceCollectionEnabled: interface{},
	HostFilters: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail">ClientEmail</a></code> | <code>*string</code> | Your email found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Your ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Your private key name found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | Your private key ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Your Google Cloud project ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute">Automute</a></code> | <code>interface{}</code> | Silence monitors for expected GCE instance shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled">CspmResourceCollectionEnabled</a></code> | <code>interface{}</code> | Whether Datadog collects cloud security posture management resources from your GCP project. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters">HostFilters</a></code> | <code>*string</code> | Limit the GCE instances that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#id IntegrationGcp#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail"></a>

```go
ClientEmail *string
```

- *Type:* *string

Your email found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Your ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Your private key name found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

Your private key ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Your Google Cloud project ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}

---

##### `Automute`<sup>Optional</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute"></a>

```go
Automute interface{}
```

- *Type:* interface{}

Silence monitors for expected GCE instance shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}

---

##### `CspmResourceCollectionEnabled`<sup>Optional</sup> <a name="CspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled"></a>

```go
CspmResourceCollectionEnabled interface{}
```

- *Type:* interface{}

Whether Datadog collects cloud security posture management resources from your GCP project. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}

---

##### `HostFilters`<sup>Optional</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters"></a>

```go
HostFilters *string
```

- *Type:* *string

Limit the GCE instances that are pulled into Datadog by using tags.

Only hosts that match one of the defined tags are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/resources/integration_gcp#id IntegrationGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



