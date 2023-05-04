# `datadog_security_monitoring_filter`

Refer to the Terraform Registory for docs: [`datadog_security_monitoring_filter`](https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter).

# `securityMonitoringFilter` Submodule <a name="`securityMonitoringFilter` Submodule" id="@cdktf/provider-datadog.securityMonitoringFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringFilter <a name="SecurityMonitoringFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter datadog_security_monitoring_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

securitymonitoringfilter.NewSecurityMonitoringFilter(scope Construct, id *string, config SecurityMonitoringFilterConfig) SecurityMonitoringFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig">SecurityMonitoringFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig">SecurityMonitoringFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.putExclusionFilter">PutExclusionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetExclusionFilter">ResetExclusionFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetFilteredDataType">ResetFilteredDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExclusionFilter` <a name="PutExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.putExclusionFilter"></a>

```go
func PutExclusionFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.putExclusionFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusionFilter` <a name="ResetExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetExclusionFilter"></a>

```go
func ResetExclusionFilter()
```

##### `ResetFilteredDataType` <a name="ResetFilteredDataType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetFilteredDataType"></a>

```go
func ResetFilteredDataType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

securitymonitoringfilter.SecurityMonitoringFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

securitymonitoringfilter.SecurityMonitoringFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

securitymonitoringfilter.SecurityMonitoringFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilter">ExclusionFilter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList">SecurityMonitoringFilterExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilterInput">ExclusionFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataTypeInput">FilteredDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataType">FilteredDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.query">Query</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExclusionFilter`<sup>Required</sup> <a name="ExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilter"></a>

```go
func ExclusionFilter() SecurityMonitoringFilterExclusionFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList">SecurityMonitoringFilterExclusionFilterList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `ExclusionFilterInput`<sup>Optional</sup> <a name="ExclusionFilterInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.exclusionFilterInput"></a>

```go
func ExclusionFilterInput() interface{}
```

- *Type:* interface{}

---

##### `FilteredDataTypeInput`<sup>Optional</sup> <a name="FilteredDataTypeInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataTypeInput"></a>

```go
func FilteredDataTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `FilteredDataType`<sup>Required</sup> <a name="FilteredDataType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.filteredDataType"></a>

```go
func FilteredDataType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringFilterConfig <a name="SecurityMonitoringFilterConfig" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

&securitymonitoringfilter.SecurityMonitoringFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IsEnabled: interface{},
	Name: *string,
	Query: *string,
	ExclusionFilter: interface{},
	FilteredDataType: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Whether the security filter is enabled. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.name">Name</a></code> | <code>*string</code> | The name of the security filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.query">Query</a></code> | <code>*string</code> | The query of the security filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.exclusionFilter">ExclusionFilter</a></code> | <code>interface{}</code> | exclusion_filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.filteredDataType">FilteredDataType</a></code> | <code>*string</code> | The filtered data type. Valid values are `logs`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#id SecurityMonitoringFilter#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Whether the security filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#is_enabled SecurityMonitoringFilter#is_enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the security filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#name SecurityMonitoringFilter#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

The query of the security filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#query SecurityMonitoringFilter#query}

---

##### `ExclusionFilter`<sup>Optional</sup> <a name="ExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.exclusionFilter"></a>

```go
ExclusionFilter interface{}
```

- *Type:* interface{}

exclusion_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#exclusion_filter SecurityMonitoringFilter#exclusion_filter}

---

##### `FilteredDataType`<sup>Optional</sup> <a name="FilteredDataType" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.filteredDataType"></a>

```go
FilteredDataType *string
```

- *Type:* *string

The filtered data type. Valid values are `logs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#filtered_data_type SecurityMonitoringFilter#filtered_data_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#id SecurityMonitoringFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecurityMonitoringFilterExclusionFilter <a name="SecurityMonitoringFilterExclusionFilter" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

&securitymonitoringfilter.SecurityMonitoringFilterExclusionFilter {
	Name: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.name">Name</a></code> | <code>*string</code> | Exclusion filter name. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.query">Query</a></code> | <code>*string</code> | Exclusion filter query. Logs that match this query are excluded from the security filter. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Exclusion filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#name SecurityMonitoringFilter#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilter.property.query"></a>

```go
Query *string
```

- *Type:* *string

Exclusion filter query. Logs that match this query are excluded from the security filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.1/docs/resources/security_monitoring_filter#query SecurityMonitoringFilter#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringFilterExclusionFilterList <a name="SecurityMonitoringFilterExclusionFilterList" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

securitymonitoringfilter.NewSecurityMonitoringFilterExclusionFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringFilterExclusionFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.get"></a>

```go
func Get(index *f64) SecurityMonitoringFilterExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringFilterExclusionFilterOutputReference <a name="SecurityMonitoringFilterExclusionFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/securitymonitoringfilter"

securitymonitoringfilter.NewSecurityMonitoringFilterExclusionFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringFilterExclusionFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringFilter.SecurityMonitoringFilterExclusionFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



