# `integrationAzure` Submodule <a name="`integrationAzure` Submodule" id="@cdktf/provider-datadog.integrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAzure <a name="IntegrationAzure" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure datadog_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.NewIntegrationAzure(scope Construct, id *string, config IntegrationAzureConfig) IntegrationAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig">IntegrationAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig">IntegrationAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs">PutResourceProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters">ResetAppServicePlanFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute">ResetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters">ResetContainerAppFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled">ResetCspmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled">ResetCustomMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters">ResetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabledDefault">ResetMetricsEnabledDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceCollectionEnabled">ResetResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceProviderConfigs">ResetResourceProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetUsageMetricsEnabled">ResetUsageMetricsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceProviderConfigs` <a name="PutResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs"></a>

```go
func PutResourceProviderConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppServicePlanFilters` <a name="ResetAppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters"></a>

```go
func ResetAppServicePlanFilters()
```

##### `ResetAutomute` <a name="ResetAutomute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute"></a>

```go
func ResetAutomute()
```

##### `ResetContainerAppFilters` <a name="ResetContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters"></a>

```go
func ResetContainerAppFilters()
```

##### `ResetCspmEnabled` <a name="ResetCspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled"></a>

```go
func ResetCspmEnabled()
```

##### `ResetCustomMetricsEnabled` <a name="ResetCustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled"></a>

```go
func ResetCustomMetricsEnabled()
```

##### `ResetHostFilters` <a name="ResetHostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters"></a>

```go
func ResetHostFilters()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabled"></a>

```go
func ResetMetricsEnabled()
```

##### `ResetMetricsEnabledDefault` <a name="ResetMetricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabledDefault"></a>

```go
func ResetMetricsEnabledDefault()
```

##### `ResetResourceCollectionEnabled` <a name="ResetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceCollectionEnabled"></a>

```go
func ResetResourceCollectionEnabled()
```

##### `ResetResourceProviderConfigs` <a name="ResetResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceProviderConfigs"></a>

```go
func ResetResourceProviderConfigs()
```

##### `ResetUsageMetricsEnabled` <a name="ResetUsageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetUsageMetricsEnabled"></a>

```go
func ResetUsageMetricsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.IntegrationAzure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.IntegrationAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.IntegrationAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.IntegrationAzure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigs">ResourceProviderConfigs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList">IntegrationAzureResourceProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput">AppServicePlanFiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput">AutomuteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput">ContainerAppFiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput">CspmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput">CustomMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput">HostFiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefaultInput">MetricsEnabledDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabledInput">ResourceCollectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigsInput">ResourceProviderConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput">TenantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabledInput">UsageMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters">AppServicePlanFilters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute">Automute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters">ContainerAppFilters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled">CspmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled">CustomMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters">HostFilters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefault">MetricsEnabledDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabled">ResourceCollectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName">TenantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabled">UsageMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceProviderConfigs`<sup>Required</sup> <a name="ResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigs"></a>

```go
func ResourceProviderConfigs() IntegrationAzureResourceProviderConfigsList
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList">IntegrationAzureResourceProviderConfigsList</a>

---

##### `AppServicePlanFiltersInput`<sup>Optional</sup> <a name="AppServicePlanFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput"></a>

```go
func AppServicePlanFiltersInput() *string
```

- *Type:* *string

---

##### `AutomuteInput`<sup>Optional</sup> <a name="AutomuteInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput"></a>

```go
func AutomuteInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ContainerAppFiltersInput`<sup>Optional</sup> <a name="ContainerAppFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput"></a>

```go
func ContainerAppFiltersInput() *string
```

- *Type:* *string

---

##### `CspmEnabledInput`<sup>Optional</sup> <a name="CspmEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput"></a>

```go
func CspmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomMetricsEnabledInput`<sup>Optional</sup> <a name="CustomMetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput"></a>

```go
func CustomMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostFiltersInput`<sup>Optional</sup> <a name="HostFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput"></a>

```go
func HostFiltersInput() *string
```

- *Type:* *string

---

##### `MetricsEnabledDefaultInput`<sup>Optional</sup> <a name="MetricsEnabledDefaultInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefaultInput"></a>

```go
func MetricsEnabledDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledInput"></a>

```go
func MetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceCollectionEnabledInput`<sup>Optional</sup> <a name="ResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabledInput"></a>

```go
func ResourceCollectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceProviderConfigsInput`<sup>Optional</sup> <a name="ResourceProviderConfigsInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigsInput"></a>

```go
func ResourceProviderConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput"></a>

```go
func TenantNameInput() *string
```

- *Type:* *string

---

##### `UsageMetricsEnabledInput`<sup>Optional</sup> <a name="UsageMetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabledInput"></a>

```go
func UsageMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AppServicePlanFilters`<sup>Required</sup> <a name="AppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters"></a>

```go
func AppServicePlanFilters() *string
```

- *Type:* *string

---

##### `Automute`<sup>Required</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute"></a>

```go
func Automute() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ContainerAppFilters`<sup>Required</sup> <a name="ContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters"></a>

```go
func ContainerAppFilters() *string
```

- *Type:* *string

---

##### `CspmEnabled`<sup>Required</sup> <a name="CspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled"></a>

```go
func CspmEnabled() interface{}
```

- *Type:* interface{}

---

##### `CustomMetricsEnabled`<sup>Required</sup> <a name="CustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled"></a>

```go
func CustomMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `HostFilters`<sup>Required</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters"></a>

```go
func HostFilters() *string
```

- *Type:* *string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabled"></a>

```go
func MetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MetricsEnabledDefault`<sup>Required</sup> <a name="MetricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefault"></a>

```go
func MetricsEnabledDefault() interface{}
```

- *Type:* interface{}

---

##### `ResourceCollectionEnabled`<sup>Required</sup> <a name="ResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabled"></a>

```go
func ResourceCollectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName"></a>

```go
func TenantName() *string
```

- *Type:* *string

---

##### `UsageMetricsEnabled`<sup>Required</sup> <a name="UsageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabled"></a>

```go
func UsageMetricsEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAzureConfig <a name="IntegrationAzureConfig" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

&integrationazure.IntegrationAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	ClientSecret: *string,
	TenantName: *string,
	AppServicePlanFilters: *string,
	Automute: interface{},
	ContainerAppFilters: *string,
	CspmEnabled: interface{},
	CustomMetricsEnabled: interface{},
	HostFilters: *string,
	MetricsEnabled: interface{},
	MetricsEnabledDefault: interface{},
	ResourceCollectionEnabled: interface{},
	ResourceProviderConfigs: interface{},
	UsageMetricsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Your Azure web application ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | (Required for Initial Creation) Your Azure web application secret key. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName">TenantName</a></code> | <code>*string</code> | Your Azure Active Directory ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters">AppServicePlanFilters</a></code> | <code>*string</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute">Automute</a></code> | <code>interface{}</code> | Silence monitors for expected Azure VM shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters">ContainerAppFilters</a></code> | <code>*string</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled">CspmEnabled</a></code> | <code>interface{}</code> | When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled">CustomMetricsEnabled</a></code> | <code>interface{}</code> | Enable custom metrics for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters">HostFilters</a></code> | <code>*string</code> | String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | Enable Azure metrics for your organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabledDefault">MetricsEnabledDefault</a></code> | <code>interface{}</code> | Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceCollectionEnabled">ResourceCollectionEnabled</a></code> | <code>interface{}</code> | When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceProviderConfigs">ResourceProviderConfigs</a></code> | <code>interface{}</code> | Configuration settings applied to resources from the specified Azure resource providers. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.usageMetricsEnabled">UsageMetricsEnabled</a></code> | <code>interface{}</code> | Enable azure.usage metrics for your organization. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Your Azure web application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

(Required for Initial Creation) Your Azure web application secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName"></a>

```go
TenantName *string
```

- *Type:* *string

Your Azure Active Directory ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}

---

##### `AppServicePlanFilters`<sup>Optional</sup> <a name="AppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters"></a>

```go
AppServicePlanFilters *string
```

- *Type:* *string

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans.

Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s). Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}

---

##### `Automute`<sup>Optional</sup> <a name="Automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute"></a>

```go
Automute interface{}
```

- *Type:* interface{}

Silence monitors for expected Azure VM shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#automute IntegrationAzure#automute}

---

##### `ContainerAppFilters`<sup>Optional</sup> <a name="ContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters"></a>

```go
ContainerAppFilters *string
```

- *Type:* *string

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps.

Only Container Apps that match one of the defined tags are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}

---

##### `CspmEnabled`<sup>Optional</sup> <a name="CspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled"></a>

```go
CspmEnabled interface{}
```

- *Type:* interface{}

When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.

Note: This requires `resource_collection_enabled` to be set to true. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}

---

##### `CustomMetricsEnabled`<sup>Optional</sup> <a name="CustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled"></a>

```go
CustomMetricsEnabled interface{}
```

- *Type:* interface{}

Enable custom metrics for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}

---

##### `HostFilters`<sup>Optional</sup> <a name="HostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters"></a>

```go
HostFilters *string
```

- *Type:* *string

String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure.

Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red` Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabled"></a>

```go
MetricsEnabled interface{}
```

- *Type:* interface{}

Enable Azure metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}

---

##### `MetricsEnabledDefault`<sup>Optional</sup> <a name="MetricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabledDefault"></a>

```go
MetricsEnabledDefault interface{}
```

- *Type:* interface{}

Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#metrics_enabled_default IntegrationAzure#metrics_enabled_default}

---

##### `ResourceCollectionEnabled`<sup>Optional</sup> <a name="ResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceCollectionEnabled"></a>

```go
ResourceCollectionEnabled interface{}
```

- *Type:* interface{}

When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#resource_collection_enabled IntegrationAzure#resource_collection_enabled}

---

##### `ResourceProviderConfigs`<sup>Optional</sup> <a name="ResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceProviderConfigs"></a>

```go
ResourceProviderConfigs interface{}
```

- *Type:* interface{}

Configuration settings applied to resources from the specified Azure resource providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#resource_provider_configs IntegrationAzure#resource_provider_configs}

---

##### `UsageMetricsEnabled`<sup>Optional</sup> <a name="UsageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.usageMetricsEnabled"></a>

```go
UsageMetricsEnabled interface{}
```

- *Type:* interface{}

Enable azure.usage metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#usage_metrics_enabled IntegrationAzure#usage_metrics_enabled}

---

### IntegrationAzureResourceProviderConfigs <a name="IntegrationAzureResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

&integrationazure.IntegrationAzureResourceProviderConfigs {
	MetricsEnabled: interface{},
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}. |

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.metricsEnabled"></a>

```go
MetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAzureResourceProviderConfigsList <a name="IntegrationAzureResourceProviderConfigsList" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.NewIntegrationAzureResourceProviderConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IntegrationAzureResourceProviderConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get"></a>

```go
func Get(index *f64) IntegrationAzureResourceProviderConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAzureResourceProviderConfigsOutputReference <a name="IntegrationAzureResourceProviderConfigsOutputReference" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationazure"

integrationazure.NewIntegrationAzureResourceProviderConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IntegrationAzureResourceProviderConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetMetricsEnabled"></a>

```go
func ResetMetricsEnabled()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabledInput"></a>

```go
func MetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabled"></a>

```go
func MetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



