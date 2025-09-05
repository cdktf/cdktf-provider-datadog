# `dataDatadogMetricActiveTagsAndAggregations` Submodule <a name="`dataDatadogMetricActiveTagsAndAggregations` Submodule" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMetricActiveTagsAndAggregations <a name="DataDatadogMetricActiveTagsAndAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations datadog_metric_active_tags_and_aggregations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.NewDataDatadogMetricActiveTagsAndAggregations(scope Construct, id *string, config DataDatadogMetricActiveTagsAndAggregationsConfig) DataDatadogMetricActiveTagsAndAggregations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig">DataDatadogMetricActiveTagsAndAggregationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig">DataDatadogMetricActiveTagsAndAggregationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.resetWindow"></a>

```go
func ResetWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.DataDatadogMetricActiveTagsAndAggregations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.DataDatadogMetricActiveTagsAndAggregations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.DataDatadogMetricActiveTagsAndAggregations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.DataDatadogMetricActiveTagsAndAggregations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogMetricActiveTagsAndAggregations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogMetricActiveTagsAndAggregations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMetricActiveTagsAndAggregations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations">ActiveAggregations</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags">ActiveTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput">WindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window">Window</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActiveAggregations`<sup>Required</sup> <a name="ActiveAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeAggregations"></a>

```go
func ActiveAggregations() DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList">DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList</a>

---

##### `ActiveTags`<sup>Required</sup> <a name="ActiveTags" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.activeTags"></a>

```go
func ActiveTags() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.windowInput"></a>

```go
func WindowInput() *f64
```

- *Type:* *f64

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.window"></a>

```go
func Window() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregations <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregations" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

&datadatadogmetricactivetagsandaggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations {

}
```


### DataDatadogMetricActiveTagsAndAggregationsConfig <a name="DataDatadogMetricActiveTagsAndAggregationsConfig" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

&datadatadogmetricactivetagsandaggregations.DataDatadogMetricActiveTagsAndAggregationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metric: *string,
	Window: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric">Metric</a></code> | <code>*string</code> | The metric for which to fetch tags. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window">Window</a></code> | <code>*f64</code> | The number of seconds to look back from now. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The metric for which to fetch tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations#metric DataDatadogMetricActiveTagsAndAggregations#metric}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsConfig.property.window"></a>

```go
Window *f64
```

- *Type:* *f64

The number of seconds to look back from now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations#window DataDatadogMetricActiveTagsAndAggregations#window}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.NewDataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get"></a>

```go
func Get(index *f64) DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference <a name="DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogmetricactivetagsandaggregations"

datadatadogmetricactivetagsandaggregations.NewDataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space">Space</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.space"></a>

```go
func Space() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogMetricActiveTagsAndAggregationsActiveAggregations
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMetricActiveTagsAndAggregations.DataDatadogMetricActiveTagsAndAggregationsActiveAggregations">DataDatadogMetricActiveTagsAndAggregationsActiveAggregations</a>

---



