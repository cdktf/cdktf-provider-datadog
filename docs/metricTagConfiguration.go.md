# `metricTagConfiguration` Submodule <a name="`metricTagConfiguration` Submodule" id="@cdktf/provider-datadog.metricTagConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricTagConfiguration <a name="MetricTagConfiguration" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration datadog_metric_tag_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.NewMetricTagConfiguration(scope Construct, id *string, config MetricTagConfigurationConfig) MetricTagConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig">MetricTagConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig">MetricTagConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations">PutAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations">ResetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode">ResetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles">ResetIncludePercentiles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregations` <a name="PutAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations"></a>

```go
func PutAggregations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.putAggregations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAggregations` <a name="ResetAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetAggregations"></a>

```go
func ResetAggregations()
```

##### `ResetExcludeTagsMode` <a name="ResetExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetExcludeTagsMode"></a>

```go
func ResetExcludeTagsMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludePercentiles` <a name="ResetIncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.resetIncludePercentiles"></a>

```go
func ResetIncludePercentiles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.MetricTagConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.MetricTagConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.MetricTagConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.MetricTagConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MetricTagConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MetricTagConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MetricTagConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations">Aggregations</a></code> | <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput">AggregationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput">ExcludeTagsModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput">IncludePercentilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles">IncludePercentiles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aggregations`<sup>Required</sup> <a name="Aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregations"></a>

```go
func Aggregations() MetricTagConfigurationAggregationsList
```

- *Type:* <a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList">MetricTagConfigurationAggregationsList</a>

---

##### `AggregationsInput`<sup>Optional</sup> <a name="AggregationsInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.aggregationsInput"></a>

```go
func AggregationsInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeTagsModeInput`<sup>Optional</sup> <a name="ExcludeTagsModeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsModeInput"></a>

```go
func ExcludeTagsModeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludePercentilesInput`<sup>Optional</sup> <a name="IncludePercentilesInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentilesInput"></a>

```go
func IncludePercentilesInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeTagsMode`<sup>Required</sup> <a name="ExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.excludeTagsMode"></a>

```go
func ExcludeTagsMode() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludePercentiles`<sup>Required</sup> <a name="IncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.includePercentiles"></a>

```go
func IncludePercentiles() interface{}
```

- *Type:* interface{}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MetricTagConfigurationAggregations <a name="MetricTagConfigurationAggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

&metrictagconfiguration.MetricTagConfigurationAggregations {
	Space: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space">Space</a></code> | <code>*string</code> | A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time">Time</a></code> | <code>*string</code> | A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`. |

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.space"></a>

```go
Space *string
```

- *Type:* *string

A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#space MetricTagConfiguration#space}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregations.property.time"></a>

```go
Time *string
```

- *Type:* *string

A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#time MetricTagConfiguration#time}

---

### MetricTagConfigurationConfig <a name="MetricTagConfigurationConfig" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

&metrictagconfiguration.MetricTagConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MetricName: *string,
	MetricType: *string,
	Tags: *[]*string,
	Aggregations: interface{},
	ExcludeTagsMode: interface{},
	Id: *string,
	IncludePercentiles: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName">MetricName</a></code> | <code>*string</code> | The metric name for this resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType">MetricType</a></code> | <code>*string</code> | The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tag keys that will be queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations">Aggregations</a></code> | <code>interface{}</code> | aggregations block. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode">ExcludeTagsMode</a></code> | <code>interface{}</code> | Toggle to include/exclude tags as queryable for your metric. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles">IncludePercentiles</a></code> | <code>interface{}</code> | Toggle to include/exclude percentiles for a distribution metric. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

The metric name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tag keys that will be queryable for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}

---

##### `Aggregations`<sup>Optional</sup> <a name="Aggregations" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.aggregations"></a>

```go
Aggregations interface{}
```

- *Type:* interface{}

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}

---

##### `ExcludeTagsMode`<sup>Optional</sup> <a name="ExcludeTagsMode" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.excludeTagsMode"></a>

```go
ExcludeTagsMode interface{}
```

- *Type:* interface{}

Toggle to include/exclude tags as queryable for your metric.

Can only be applied to metrics that have one or more tags configured. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePercentiles`<sup>Optional</sup> <a name="IncludePercentiles" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationConfig.property.includePercentiles"></a>

```go
IncludePercentiles interface{}
```

- *Type:* interface{}

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricTagConfigurationAggregationsList <a name="MetricTagConfigurationAggregationsList" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.NewMetricTagConfigurationAggregationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MetricTagConfigurationAggregationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get"></a>

```go
func Get(index *f64) MetricTagConfigurationAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MetricTagConfigurationAggregationsOutputReference <a name="MetricTagConfigurationAggregationsOutputReference" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v11/metrictagconfiguration"

metrictagconfiguration.NewMetricTagConfigurationAggregationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MetricTagConfigurationAggregationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput">SpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space">Space</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.spaceInput"></a>

```go
func SpaceInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.space"></a>

```go
func Space() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.metricTagConfiguration.MetricTagConfigurationAggregationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



