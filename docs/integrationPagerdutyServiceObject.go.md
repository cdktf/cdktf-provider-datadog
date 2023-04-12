# `integrationPagerdutyServiceObject` Submodule <a name="`integrationPagerdutyServiceObject` Submodule" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPagerdutyServiceObject <a name="IntegrationPagerdutyServiceObject" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object datadog_integration_pagerduty_service_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/integrationpagerdutyserviceobject"

integrationpagerdutyserviceobject.NewIntegrationPagerdutyServiceObject(scope Construct, id *string, config IntegrationPagerdutyServiceObjectConfig) IntegrationPagerdutyServiceObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig">IntegrationPagerdutyServiceObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig">IntegrationPagerdutyServiceObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/integrationpagerdutyserviceobject"

integrationpagerdutyserviceobject.IntegrationPagerdutyServiceObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/integrationpagerdutyserviceobject"

integrationpagerdutyserviceobject.IntegrationPagerdutyServiceObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/integrationpagerdutyserviceobject"

integrationpagerdutyserviceobject.IntegrationPagerdutyServiceObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKeyInput"></a>

```go
func ServiceKeyInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPagerdutyServiceObjectConfig <a name="IntegrationPagerdutyServiceObjectConfig" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/integrationpagerdutyserviceobject"

&integrationpagerdutyserviceobject.IntegrationPagerdutyServiceObjectConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceKey: *string,
	ServiceName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | Your Service name associated service key in PagerDuty. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Your Service name in PagerDuty. |
| <code><a href="#@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object#id IntegrationPagerdutyServiceObject#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceKey"></a>

```go
ServiceKey *string
```

- *Type:* *string

Your Service name associated service key in PagerDuty.

Note: Since the Datadog API never returns service keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object#service_key IntegrationPagerdutyServiceObject#service_key}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Your Service name in PagerDuty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object#service_name IntegrationPagerdutyServiceObject#service_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationPagerdutyServiceObject.IntegrationPagerdutyServiceObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object#id IntegrationPagerdutyServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



