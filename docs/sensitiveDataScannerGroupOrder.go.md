# `datadog_sensitive_data_scanner_group_order`

Refer to the Terraform Registory for docs: [`datadog_sensitive_data_scanner_group_order`](https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group_order).

# `sensitiveDataScannerGroupOrder` Submodule <a name="`sensitiveDataScannerGroupOrder` Submodule" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerGroupOrder <a name="SensitiveDataScannerGroupOrder" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannergrouporder"

sensitivedatascannergrouporder.NewSensitiveDataScannerGroupOrder(scope Construct, id *string, config SensitiveDataScannerGroupOrderConfig) SensitiveDataScannerGroupOrder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig">SensitiveDataScannerGroupOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig">SensitiveDataScannerGroupOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannergrouporder"

sensitivedatascannergrouporder.SensitiveDataScannerGroupOrder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannergrouporder"

sensitivedatascannergrouporder.SensitiveDataScannerGroupOrder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannergrouporder"

sensitivedatascannergrouporder.SensitiveDataScannerGroupOrder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIdsInput">GroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIds">GroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `GroupIdsInput`<sup>Optional</sup> <a name="GroupIdsInput" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIdsInput"></a>

```go
func GroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.groupIds"></a>

```go
func GroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerGroupOrderConfig <a name="SensitiveDataScannerGroupOrderConfig" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannergrouporder"

&sensitivedatascannergrouporder.SensitiveDataScannerGroupOrderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.groupIds">GroupIds</a></code> | <code>*[]*string</code> | The list of Sensitive Data Scanner group IDs, in order. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-datadog.sensitiveDataScannerGroupOrder.SensitiveDataScannerGroupOrderConfig.property.groupIds"></a>

```go
GroupIds *[]*string
```

- *Type:* *[]*string

The list of Sensitive Data Scanner group IDs, in order.

Logs are tested against the query filter of each index one by one following the order of the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.25.0/docs/resources/sensitive_data_scanner_group_order#group_ids SensitiveDataScannerGroupOrder#group_ids}

---


