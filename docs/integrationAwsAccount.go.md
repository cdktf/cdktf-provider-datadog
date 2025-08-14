# `integrationAwsAccount` Submodule <a name="`integrationAwsAccount` Submodule" id="@cdktf/provider-datadog.integrationAwsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccount <a name="IntegrationAwsAccount" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account datadog_integration_aws_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccount(scope Construct, id *string, config IntegrationAwsAccountConfig) IntegrationAwsAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig">IntegrationAwsAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig">IntegrationAwsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions">PutAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig">PutLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig">PutResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig">PutTracesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags">ResetAccountTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig">ResetLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig">ResetResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig">ResetTracesConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig"></a>

```go
func PutAuthConfig(value IntegrationAwsAccountAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---

##### `PutAwsRegions` <a name="PutAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions"></a>

```go
func PutAwsRegions(value IntegrationAwsAccountAwsRegions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---

##### `PutLogsConfig` <a name="PutLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig"></a>

```go
func PutLogsConfig(value IntegrationAwsAccountLogsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig"></a>

```go
func PutMetricsConfig(value IntegrationAwsAccountMetricsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---

##### `PutResourcesConfig` <a name="PutResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig"></a>

```go
func PutResourcesConfig(value IntegrationAwsAccountResourcesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---

##### `PutTracesConfig` <a name="PutTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig"></a>

```go
func PutTracesConfig(value IntegrationAwsAccountTracesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---

##### `ResetAccountTags` <a name="ResetAccountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags"></a>

```go
func ResetAccountTags()
```

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig"></a>

```go
func ResetAuthConfig()
```

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions"></a>

```go
func ResetAwsRegions()
```

##### `ResetLogsConfig` <a name="ResetLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig"></a>

```go
func ResetLogsConfig()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig"></a>

```go
func ResetMetricsConfig()
```

##### `ResetResourcesConfig` <a name="ResetResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig"></a>

```go
func ResetResourcesConfig()
```

##### `ResetTracesConfig` <a name="ResetTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig"></a>

```go
func ResetTracesConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.IntegrationAwsAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.IntegrationAwsAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.IntegrationAwsAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.IntegrationAwsAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationAwsAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationAwsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions">AwsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig">LogsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig">ResourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig">TracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput">AccountTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput">AuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput">AwsPartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput">LogsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput">ResourcesConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput">TracesConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags">AccountTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition">AwsPartition</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig"></a>

```go
func AuthConfig() IntegrationAwsAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a>

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions"></a>

```go
func AwsRegions() IntegrationAwsAccountAwsRegionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogsConfig`<sup>Required</sup> <a name="LogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig"></a>

```go
func LogsConfig() IntegrationAwsAccountLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a>

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig"></a>

```go
func MetricsConfig() IntegrationAwsAccountMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a>

---

##### `ResourcesConfig`<sup>Required</sup> <a name="ResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig"></a>

```go
func ResourcesConfig() IntegrationAwsAccountResourcesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a>

---

##### `TracesConfig`<sup>Required</sup> <a name="TracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig"></a>

```go
func TracesConfig() IntegrationAwsAccountTracesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a>

---

##### `AccountTagsInput`<sup>Optional</sup> <a name="AccountTagsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput"></a>

```go
func AccountTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput"></a>

```go
func AuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsPartitionInput`<sup>Optional</sup> <a name="AwsPartitionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput"></a>

```go
func AwsPartitionInput() *string
```

- *Type:* *string

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput"></a>

```go
func AwsRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `LogsConfigInput`<sup>Optional</sup> <a name="LogsConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput"></a>

```go
func LogsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput"></a>

```go
func MetricsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesConfigInput`<sup>Optional</sup> <a name="ResourcesConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput"></a>

```go
func ResourcesConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TracesConfigInput`<sup>Optional</sup> <a name="TracesConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput"></a>

```go
func TracesConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AccountTags`<sup>Required</sup> <a name="AccountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags"></a>

```go
func AccountTags() *[]*string
```

- *Type:* *[]*string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition"></a>

```go
func AwsPartition() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountAuthConfig <a name="IntegrationAwsAccountAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountAuthConfig {
	AwsAuthConfigKeys: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys,
	AwsAuthConfigRole: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys">AwsAuthConfigKeys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | aws_auth_config_keys block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole">AwsAuthConfigRole</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | aws_auth_config_role block. |

---

##### `AwsAuthConfigKeys`<sup>Optional</sup> <a name="AwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys"></a>

```go
AwsAuthConfigKeys IntegrationAwsAccountAuthConfigAwsAuthConfigKeys
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

aws_auth_config_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}

---

##### `AwsAuthConfigRole`<sup>Optional</sup> <a name="AwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole"></a>

```go
AwsAuthConfigRole IntegrationAwsAccountAuthConfigAwsAuthConfigRole
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

aws_auth_config_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeys <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys {
	AccessKeyId: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | AWS Access Key ID. Invalid access_key_id. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | AWS Secret Access Key. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

AWS Access Key ID. Invalid access_key_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

AWS Secret Access Key.

This value is write-only; changes made outside of Terraform will not be drift-detected. Secret_access_key must be non-empty and not contain whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigRole <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole {
	ExternalId: *string,
	RoleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId">ExternalId</a></code> | <code>*string</code> | AWS IAM External ID for associated role. If omitted, one will be generated. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName">RoleName</a></code> | <code>*string</code> | AWS IAM Role name. |

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

AWS IAM External ID for associated role. If omitted, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

AWS IAM Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}

---

### IntegrationAwsAccountAwsRegions <a name="IntegrationAwsAccountAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountAwsRegions {
	IncludeAll: interface{},
	IncludeOnly: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | Include all regions. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly">IncludeOnly</a></code> | <code>*[]*string</code> | Include only these regions. |

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll"></a>

```go
IncludeAll interface{}
```

- *Type:* interface{}

Include all regions. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `IncludeOnly`<sup>Optional</sup> <a name="IncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly"></a>

```go
IncludeOnly *[]*string
```

- *Type:* *[]*string

Include only these regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountConfig <a name="IntegrationAwsAccountConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountId: *string,
	AwsPartition: *string,
	AccountTags: *[]*string,
	AuthConfig: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountAuthConfig,
	AwsRegions: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountAwsRegions,
	LogsConfig: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountLogsConfig,
	MetricsConfig: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountMetricsConfig,
	ResourcesConfig: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountResourcesConfig,
	TracesConfig: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountTracesConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Your AWS Account ID without dashes. Invalid aws_account_id. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition">AwsPartition</a></code> | <code>*string</code> | AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags">AccountTags</a></code> | <code>*[]*string</code> | Tags to apply to all metrics in the account. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions">AwsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | aws_regions block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig">LogsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig">ResourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | resources_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig">TracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | traces_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Your AWS Account ID without dashes. Invalid aws_account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition"></a>

```go
AwsPartition *string
```

- *Type:* *string

AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}

---

##### `AccountTags`<sup>Optional</sup> <a name="AccountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags"></a>

```go
AccountTags *[]*string
```

- *Type:* *[]*string

Tags to apply to all metrics in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig"></a>

```go
AuthConfig IntegrationAwsAccountAuthConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions"></a>

```go
AwsRegions IntegrationAwsAccountAwsRegions
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

aws_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}

---

##### `LogsConfig`<sup>Optional</sup> <a name="LogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig"></a>

```go
LogsConfig IntegrationAwsAccountLogsConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig"></a>

```go
MetricsConfig IntegrationAwsAccountMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}

---

##### `ResourcesConfig`<sup>Optional</sup> <a name="ResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig"></a>

```go
ResourcesConfig IntegrationAwsAccountResourcesConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

resources_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}

---

##### `TracesConfig`<sup>Optional</sup> <a name="TracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig"></a>

```go
TracesConfig IntegrationAwsAccountTracesConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

traces_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}

---

### IntegrationAwsAccountLogsConfig <a name="IntegrationAwsAccountLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountLogsConfig {
	LambdaForwarder: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder">LambdaForwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | lambda_forwarder block. |

---

##### `LambdaForwarder`<sup>Optional</sup> <a name="LambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder"></a>

```go
LambdaForwarder IntegrationAwsAccountLogsConfigLambdaForwarder
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

lambda_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}

---

### IntegrationAwsAccountLogsConfigLambdaForwarder <a name="IntegrationAwsAccountLogsConfigLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountLogsConfigLambdaForwarder {
	Lambdas: *[]*string,
	Sources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas">Lambdas</a></code> | <code>*[]*string</code> | List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources">Sources</a></code> | <code>*[]*string</code> | List of service IDs set to enable automatic log collection. |

---

##### `Lambdas`<sup>Optional</sup> <a name="Lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas"></a>

```go
Lambdas *[]*string
```

- *Type:* *[]*string

List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources"></a>

```go
Sources *[]*string
```

- *Type:* *[]*string

List of service IDs set to enable automatic log collection.

Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) or [the AWS Logs Integration API](https://docs.datadoghq.com/api/latest/aws-logs-integration/?#get-list-of-aws-log-ready-services) to get allowed values. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}

---

### IntegrationAwsAccountMetricsConfig <a name="IntegrationAwsAccountMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountMetricsConfig {
	AutomuteEnabled: interface{},
	CollectCloudwatchAlarms: interface{},
	CollectCustomMetrics: interface{},
	Enabled: interface{},
	NamespaceFilters: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters,
	TagFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled">AutomuteEnabled</a></code> | <code>interface{}</code> | Enable EC2 automute for AWS metrics Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms">CollectCloudwatchAlarms</a></code> | <code>interface{}</code> | Enable CloudWatch alarms collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics">CollectCustomMetrics</a></code> | <code>interface{}</code> | Enable custom metrics collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable AWS metrics collection Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters">NamespaceFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | namespace_filters block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters">TagFilters</a></code> | <code>interface{}</code> | tag_filters block. |

---

##### `AutomuteEnabled`<sup>Optional</sup> <a name="AutomuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled"></a>

```go
AutomuteEnabled interface{}
```

- *Type:* interface{}

Enable EC2 automute for AWS metrics Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}

---

##### `CollectCloudwatchAlarms`<sup>Optional</sup> <a name="CollectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms"></a>

```go
CollectCloudwatchAlarms interface{}
```

- *Type:* interface{}

Enable CloudWatch alarms collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}

---

##### `CollectCustomMetrics`<sup>Optional</sup> <a name="CollectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics"></a>

```go
CollectCustomMetrics interface{}
```

- *Type:* interface{}

Enable custom metrics collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable AWS metrics collection Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}

---

##### `NamespaceFilters`<sup>Optional</sup> <a name="NamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters"></a>

```go
NamespaceFilters IntegrationAwsAccountMetricsConfigNamespaceFilters
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

namespace_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}

---

##### `TagFilters`<sup>Optional</sup> <a name="TagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters"></a>

```go
TagFilters interface{}
```

- *Type:* interface{}

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}

---

### IntegrationAwsAccountMetricsConfigNamespaceFilters <a name="IntegrationAwsAccountMetricsConfigNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountMetricsConfigNamespaceFilters {
	ExcludeOnly: *[]*string,
	IncludeOnly: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly">ExcludeOnly</a></code> | <code>*[]*string</code> | Exclude only these namespaces from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly">IncludeOnly</a></code> | <code>*[]*string</code> | Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. |

---

##### `ExcludeOnly`<sup>Optional</sup> <a name="ExcludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly"></a>

```go
ExcludeOnly *[]*string
```

- *Type:* *[]*string

Exclude only these namespaces from metrics collection.

Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`. `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}

---

##### `IncludeOnly`<sup>Optional</sup> <a name="IncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly"></a>

```go
IncludeOnly *[]*string
```

- *Type:* *[]*string

Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountMetricsConfigTagFilters <a name="IntegrationAwsAccountMetricsConfigTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountMetricsConfigTagFilters {
	Namespace: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace">Namespace</a></code> | <code>*string</code> | The AWS service for which the tag filters defined in `tags` will be applied. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags">Tags</a></code> | <code>*[]*string</code> | The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The AWS service for which the tag filters defined in `tags` will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}

---

### IntegrationAwsAccountResourcesConfig <a name="IntegrationAwsAccountResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountResourcesConfig {
	CloudSecurityPostureManagementCollection: interface{},
	ExtendedCollection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection">CloudSecurityPostureManagementCollection</a></code> | <code>interface{}</code> | Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection">ExtendedCollection</a></code> | <code>interface{}</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. |

---

##### `CloudSecurityPostureManagementCollection`<sup>Optional</sup> <a name="CloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection"></a>

```go
CloudSecurityPostureManagementCollection interface{}
```

- *Type:* interface{}

Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations.

Requires `extended_collection` to be set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}

---

##### `ExtendedCollection`<sup>Optional</sup> <a name="ExtendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection"></a>

```go
ExtendedCollection interface{}
```

- *Type:* interface{}

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account.

Required for `cloud_security_posture_management_collection`. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}

---

### IntegrationAwsAccountTracesConfig <a name="IntegrationAwsAccountTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountTracesConfig {
	XrayServices: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices">XrayServices</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | xray_services block. |

---

##### `XrayServices`<sup>Optional</sup> <a name="XrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices"></a>

```go
XrayServices IntegrationAwsAccountTracesConfigXrayServices
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

xray_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}

---

### IntegrationAwsAccountTracesConfigXrayServices <a name="IntegrationAwsAccountTracesConfigXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

&integrationawsaccount.IntegrationAwsAccountTracesConfigXrayServices {
	IncludeAll: interface{},
	IncludeOnly: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | Include all services. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly">IncludeOnly</a></code> | <code>*[]*string</code> | Include only these services. Defaults to `[]`. |

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll"></a>

```go
IncludeAll interface{}
```

- *Type:* interface{}

Include all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `IncludeOnly`<sup>Optional</sup> <a name="IncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly"></a>

```go
IncludeOnly *[]*string
```

- *Type:* *[]*string

Include only these services. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName">ResetRoleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName"></a>

```go
func ResetRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountAuthConfigOutputReference <a name="IntegrationAwsAccountAuthConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys">PutAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole">PutAwsAuthConfigRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys">ResetAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole">ResetAwsAuthConfigRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAuthConfigKeys` <a name="PutAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys"></a>

```go
func PutAwsAuthConfigKeys(value IntegrationAwsAccountAuthConfigAwsAuthConfigKeys)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---

##### `PutAwsAuthConfigRole` <a name="PutAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole"></a>

```go
func PutAwsAuthConfigRole(value IntegrationAwsAccountAuthConfigAwsAuthConfigRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---

##### `ResetAwsAuthConfigKeys` <a name="ResetAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys"></a>

```go
func ResetAwsAuthConfigKeys()
```

##### `ResetAwsAuthConfigRole` <a name="ResetAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole"></a>

```go
func ResetAwsAuthConfigRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys">AwsAuthConfigKeys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole">AwsAuthConfigRole</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput">AwsAuthConfigKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput">AwsAuthConfigRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAuthConfigKeys`<sup>Required</sup> <a name="AwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys"></a>

```go
func AwsAuthConfigKeys() IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a>

---

##### `AwsAuthConfigRole`<sup>Required</sup> <a name="AwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole"></a>

```go
func AwsAuthConfigRole() IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a>

---

##### `AwsAuthConfigKeysInput`<sup>Optional</sup> <a name="AwsAuthConfigKeysInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput"></a>

```go
func AwsAuthConfigKeysInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAuthConfigRoleInput`<sup>Optional</sup> <a name="AwsAuthConfigRoleInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput"></a>

```go
func AwsAuthConfigRoleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountAwsRegionsOutputReference <a name="IntegrationAwsAccountAwsRegionsOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountAwsRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountAwsRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly">ResetIncludeOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll"></a>

```go
func ResetIncludeAll()
```

##### `ResetIncludeOnly` <a name="ResetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly"></a>

```go
func ResetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput">IncludeOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly">IncludeOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput"></a>

```go
func IncludeAllInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeOnlyInput`<sup>Optional</sup> <a name="IncludeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput"></a>

```go
func IncludeOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll"></a>

```go
func IncludeAll() interface{}
```

- *Type:* interface{}

---

##### `IncludeOnly`<sup>Required</sup> <a name="IncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly"></a>

```go
func IncludeOnly() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference <a name="IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountLogsConfigLambdaForwarderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas">ResetLambdas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdas` <a name="ResetLambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas"></a>

```go
func ResetLambdas()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput">LambdasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas">Lambdas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources">Sources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdasInput`<sup>Optional</sup> <a name="LambdasInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput"></a>

```go
func LambdasInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Lambdas`<sup>Required</sup> <a name="Lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas"></a>

```go
func Lambdas() *[]*string
```

- *Type:* *[]*string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources"></a>

```go
func Sources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountLogsConfigOutputReference <a name="IntegrationAwsAccountLogsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountLogsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountLogsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder">PutLambdaForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder">ResetLambdaForwarder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaForwarder` <a name="PutLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder"></a>

```go
func PutLambdaForwarder(value IntegrationAwsAccountLogsConfigLambdaForwarder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---

##### `ResetLambdaForwarder` <a name="ResetLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder"></a>

```go
func ResetLambdaForwarder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder">LambdaForwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput">LambdaForwarderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaForwarder`<sup>Required</sup> <a name="LambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder"></a>

```go
func LambdaForwarder() IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a>

---

##### `LambdaForwarderInput`<sup>Optional</sup> <a name="LambdaForwarderInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput"></a>

```go
func LambdaForwarderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly">ResetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly">ResetIncludeOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeOnly` <a name="ResetExcludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly"></a>

```go
func ResetExcludeOnly()
```

##### `ResetIncludeOnly` <a name="ResetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly"></a>

```go
func ResetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput">ExcludeOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput">IncludeOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly">ExcludeOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly">IncludeOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeOnlyInput`<sup>Optional</sup> <a name="ExcludeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput"></a>

```go
func ExcludeOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeOnlyInput`<sup>Optional</sup> <a name="IncludeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput"></a>

```go
func IncludeOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeOnly`<sup>Required</sup> <a name="ExcludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly"></a>

```go
func ExcludeOnly() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeOnly`<sup>Required</sup> <a name="IncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly"></a>

```go
func IncludeOnly() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountMetricsConfigOutputReference <a name="IntegrationAwsAccountMetricsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters">PutNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters">PutTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled">ResetAutomuteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms">ResetCollectCloudwatchAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics">ResetCollectCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters">ResetNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters">ResetTagFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespaceFilters` <a name="PutNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters"></a>

```go
func PutNamespaceFilters(value IntegrationAwsAccountMetricsConfigNamespaceFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---

##### `PutTagFilters` <a name="PutTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters"></a>

```go
func PutTagFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomuteEnabled` <a name="ResetAutomuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled"></a>

```go
func ResetAutomuteEnabled()
```

##### `ResetCollectCloudwatchAlarms` <a name="ResetCollectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms"></a>

```go
func ResetCollectCloudwatchAlarms()
```

##### `ResetCollectCustomMetrics` <a name="ResetCollectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics"></a>

```go
func ResetCollectCustomMetrics()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetNamespaceFilters` <a name="ResetNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters"></a>

```go
func ResetNamespaceFilters()
```

##### `ResetTagFilters` <a name="ResetTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters"></a>

```go
func ResetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters">NamespaceFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters">TagFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput">AutomuteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput">CollectCloudwatchAlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput">CollectCustomMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput">NamespaceFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput">TagFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled">AutomuteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms">CollectCloudwatchAlarms</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics">CollectCustomMetrics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceFilters`<sup>Required</sup> <a name="NamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters"></a>

```go
func NamespaceFilters() IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a>

---

##### `TagFilters`<sup>Required</sup> <a name="TagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters"></a>

```go
func TagFilters() IntegrationAwsAccountMetricsConfigTagFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a>

---

##### `AutomuteEnabledInput`<sup>Optional</sup> <a name="AutomuteEnabledInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput"></a>

```go
func AutomuteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CollectCloudwatchAlarmsInput`<sup>Optional</sup> <a name="CollectCloudwatchAlarmsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput"></a>

```go
func CollectCloudwatchAlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectCustomMetricsInput`<sup>Optional</sup> <a name="CollectCustomMetricsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput"></a>

```go
func CollectCustomMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceFiltersInput`<sup>Optional</sup> <a name="NamespaceFiltersInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput"></a>

```go
func NamespaceFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `TagFiltersInput`<sup>Optional</sup> <a name="TagFiltersInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput"></a>

```go
func TagFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `AutomuteEnabled`<sup>Required</sup> <a name="AutomuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled"></a>

```go
func AutomuteEnabled() interface{}
```

- *Type:* interface{}

---

##### `CollectCloudwatchAlarms`<sup>Required</sup> <a name="CollectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms"></a>

```go
func CollectCloudwatchAlarms() interface{}
```

- *Type:* interface{}

---

##### `CollectCustomMetrics`<sup>Required</sup> <a name="CollectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics"></a>

```go
func CollectCustomMetrics() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountMetricsConfigTagFiltersList <a name="IntegrationAwsAccountMetricsConfigTagFiltersList" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountMetricsConfigTagFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IntegrationAwsAccountMetricsConfigTagFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get"></a>

```go
func Get(index *f64) IntegrationAwsAccountMetricsConfigTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountMetricsConfigTagFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigTagFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountMetricsConfigTagFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IntegrationAwsAccountMetricsConfigTagFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountResourcesConfigOutputReference <a name="IntegrationAwsAccountResourcesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountResourcesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountResourcesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection">ResetCloudSecurityPostureManagementCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection">ResetExtendedCollection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudSecurityPostureManagementCollection` <a name="ResetCloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection"></a>

```go
func ResetCloudSecurityPostureManagementCollection()
```

##### `ResetExtendedCollection` <a name="ResetExtendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection"></a>

```go
func ResetExtendedCollection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput">CloudSecurityPostureManagementCollectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput">ExtendedCollectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection">CloudSecurityPostureManagementCollection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection">ExtendedCollection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSecurityPostureManagementCollectionInput`<sup>Optional</sup> <a name="CloudSecurityPostureManagementCollectionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput"></a>

```go
func CloudSecurityPostureManagementCollectionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtendedCollectionInput`<sup>Optional</sup> <a name="ExtendedCollectionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput"></a>

```go
func ExtendedCollectionInput() interface{}
```

- *Type:* interface{}

---

##### `CloudSecurityPostureManagementCollection`<sup>Required</sup> <a name="CloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection"></a>

```go
func CloudSecurityPostureManagementCollection() interface{}
```

- *Type:* interface{}

---

##### `ExtendedCollection`<sup>Required</sup> <a name="ExtendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection"></a>

```go
func ExtendedCollection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountTracesConfigOutputReference <a name="IntegrationAwsAccountTracesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountTracesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountTracesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices">PutXrayServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices">ResetXrayServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXrayServices` <a name="PutXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices"></a>

```go
func PutXrayServices(value IntegrationAwsAccountTracesConfigXrayServices)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---

##### `ResetXrayServices` <a name="ResetXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices"></a>

```go
func ResetXrayServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices">XrayServices</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput">XrayServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XrayServices`<sup>Required</sup> <a name="XrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices"></a>

```go
func XrayServices() IntegrationAwsAccountTracesConfigXrayServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a>

---

##### `XrayServicesInput`<sup>Optional</sup> <a name="XrayServicesInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput"></a>

```go
func XrayServicesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IntegrationAwsAccountTracesConfigXrayServicesOutputReference <a name="IntegrationAwsAccountTracesConfigXrayServicesOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/integrationawsaccount"

integrationawsaccount.NewIntegrationAwsAccountTracesConfigXrayServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationAwsAccountTracesConfigXrayServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly">ResetIncludeOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll"></a>

```go
func ResetIncludeAll()
```

##### `ResetIncludeOnly` <a name="ResetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly"></a>

```go
func ResetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput">IncludeOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly">IncludeOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput"></a>

```go
func IncludeAllInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeOnlyInput`<sup>Optional</sup> <a name="IncludeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput"></a>

```go
func IncludeOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll"></a>

```go
func IncludeAll() interface{}
```

- *Type:* interface{}

---

##### `IncludeOnly`<sup>Required</sup> <a name="IncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly"></a>

```go
func IncludeOnly() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



