# `datadog_integration_opsgenie_service_object`

Refer to the Terraform Registory for docs: [`datadog_integration_opsgenie_service_object`](https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object).

# `integrationOpsgenieServiceObject` Submodule <a name="`integrationOpsgenieServiceObject` Submodule" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOpsgenieServiceObject <a name="IntegrationOpsgenieServiceObject" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object datadog_integration_opsgenie_service_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.NewIntegrationOpsgenieServiceObject(scope Construct, id *string, config IntegrationOpsgenieServiceObjectConfig) IntegrationOpsgenieServiceObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig">IntegrationOpsgenieServiceObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig">IntegrationOpsgenieServiceObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl">ResetCustomUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCustomUrl` <a name="ResetCustomUrl" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl"></a>

```go
func ResetCustomUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput">CustomUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput">OpsgenieApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl">CustomUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey">OpsgenieApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomUrlInput`<sup>Optional</sup> <a name="CustomUrlInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput"></a>

```go
func CustomUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpsgenieApiKeyInput`<sup>Optional</sup> <a name="OpsgenieApiKeyInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput"></a>

```go
func OpsgenieApiKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CustomUrl`<sup>Required</sup> <a name="CustomUrl" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl"></a>

```go
func CustomUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpsgenieApiKey`<sup>Required</sup> <a name="OpsgenieApiKey" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey"></a>

```go
func OpsgenieApiKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOpsgenieServiceObjectConfig <a name="IntegrationOpsgenieServiceObjectConfig" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/integrationopsgenieserviceobject"

&integrationopsgenieserviceobject.IntegrationOpsgenieServiceObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OpsgenieApiKey: *string,
	Region: *string,
	CustomUrl: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name">Name</a></code> | <code>*string</code> | The name for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey">OpsgenieApiKey</a></code> | <code>*string</code> | The Opsgenie API key for the Opsgenie service. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region">Region</a></code> | <code>*string</code> | The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl">CustomUrl</a></code> | <code>*string</code> | The custom url for a custom region. |
| <code><a href="#@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the Opsgenie service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object#name IntegrationOpsgenieServiceObject#name}

---

##### `OpsgenieApiKey`<sup>Required</sup> <a name="OpsgenieApiKey" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey"></a>

```go
OpsgenieApiKey *string
```

- *Type:* *string

The Opsgenie API key for the Opsgenie service.

Note: Since the Datadog API never returns Opsgenie API keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object#opsgenie_api_key IntegrationOpsgenieServiceObject#opsgenie_api_key}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object#region IntegrationOpsgenieServiceObject#region}

---

##### `CustomUrl`<sup>Optional</sup> <a name="CustomUrl" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl"></a>

```go
CustomUrl *string
```

- *Type:* *string

The custom url for a custom region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object#custom_url IntegrationOpsgenieServiceObject#custom_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



