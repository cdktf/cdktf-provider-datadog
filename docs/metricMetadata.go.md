# `metricMetadata` Submodule <a name="`metricMetadata` Submodule" id="@cdktf/provider-datadog.metricMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetricMetadata <a name="MetricMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata datadog_metric_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/metricmetadata"

metricmetadata.NewMetricMetadata(scope Construct, id *string, config MetricMetadataConfig) MetricMetadata
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig">MetricMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig">MetricMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit">ResetPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval">ResetStatsdInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetId"></a>

```go
func ResetId()
```

##### `ResetPerUnit` <a name="ResetPerUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetPerUnit"></a>

```go
func ResetPerUnit()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetShortName"></a>

```go
func ResetShortName()
```

##### `ResetStatsdInterval` <a name="ResetStatsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetStatsdInterval"></a>

```go
func ResetStatsdInterval()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetType"></a>

```go
func ResetType()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.resetUnit"></a>

```go
func ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/metricmetadata"

metricmetadata.MetricMetadata_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/metricmetadata"

metricmetadata.MetricMetadata_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/metricmetadata"

metricmetadata.MetricMetadata_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput">PerUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput">ShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput">StatsdIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnit">PerUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval">StatsdInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `PerUnitInput`<sup>Optional</sup> <a name="PerUnitInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnitInput"></a>

```go
func PerUnitInput() *string
```

- *Type:* *string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortNameInput"></a>

```go
func ShortNameInput() *string
```

- *Type:* *string

---

##### `StatsdIntervalInput`<sup>Optional</sup> <a name="StatsdIntervalInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdIntervalInput"></a>

```go
func StatsdIntervalInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `PerUnit`<sup>Required</sup> <a name="PerUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.perUnit"></a>

```go
func PerUnit() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `StatsdInterval`<sup>Required</sup> <a name="StatsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.statsdInterval"></a>

```go
func StatsdInterval() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.metricMetadata.MetricMetadata.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MetricMetadataConfig <a name="MetricMetadataConfig" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/metricmetadata"

&metricmetadata.MetricMetadataConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metric: *string,
	Description: *string,
	Id: *string,
	PerUnit: *string,
	ShortName: *string,
	StatsdInterval: *f64,
	Type: *string,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric">Metric</a></code> | <code>*string</code> | The name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.description">Description</a></code> | <code>*string</code> | A description of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#id MetricMetadata#id}. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit">PerUnit</a></code> | <code>*string</code> | Per unit of the metric such as `second` in `bytes per second`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName">ShortName</a></code> | <code>*string</code> | A short name of the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval">StatsdInterval</a></code> | <code>*f64</code> | If applicable, statsd flush interval in seconds for the metric. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.type">Type</a></code> | <code>*string</code> | Metric type such as `gauge` or `rate`. |
| <code><a href="#@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit">Unit</a></code> | <code>*string</code> | Primary unit of the metric such as `byte` or `operation`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The name of the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#metric MetricMetadata#metric}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#description MetricMetadata#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#id MetricMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PerUnit`<sup>Optional</sup> <a name="PerUnit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.perUnit"></a>

```go
PerUnit *string
```

- *Type:* *string

Per unit of the metric such as `second` in `bytes per second`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#per_unit MetricMetadata#per_unit}

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.shortName"></a>

```go
ShortName *string
```

- *Type:* *string

A short name of the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#short_name MetricMetadata#short_name}

---

##### `StatsdInterval`<sup>Optional</sup> <a name="StatsdInterval" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.statsdInterval"></a>

```go
StatsdInterval *f64
```

- *Type:* *f64

If applicable, statsd flush interval in seconds for the metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#statsd_interval MetricMetadata#statsd_interval}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Metric type such as `gauge` or `rate`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#type MetricMetadata#type}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-datadog.metricMetadata.MetricMetadataConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Primary unit of the metric such as `byte` or `operation`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata#unit MetricMetadata#unit}

---



