# `datadog_cloud_workload_security_agent_rule`

Refer to the Terraform Registory for docs: [`datadog_cloud_workload_security_agent_rule`](https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule).

# `cloudWorkloadSecurityAgentRule` Submodule <a name="`cloudWorkloadSecurityAgentRule` Submodule" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudWorkloadSecurityAgentRule <a name="CloudWorkloadSecurityAgentRule" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule datadog_cloud_workload_security_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudworkloadsecurityagentrule"

cloudworkloadsecurityagentrule.NewCloudWorkloadSecurityAgentRule(scope Construct, id *string, config CloudWorkloadSecurityAgentRuleConfig) CloudWorkloadSecurityAgentRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig">CloudWorkloadSecurityAgentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig">CloudWorkloadSecurityAgentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudworkloadsecurityagentrule"

cloudworkloadsecurityagentrule.CloudWorkloadSecurityAgentRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudworkloadsecurityagentrule"

cloudworkloadsecurityagentrule.CloudWorkloadSecurityAgentRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudworkloadsecurityagentrule"

cloudworkloadsecurityagentrule.CloudWorkloadSecurityAgentRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudWorkloadSecurityAgentRuleConfig <a name="CloudWorkloadSecurityAgentRuleConfig" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudworkloadsecurityagentrule"

&cloudworkloadsecurityagentrule.CloudWorkloadSecurityAgentRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Expression: *string,
	Name: *string,
	Description: *string,
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression">Expression</a></code> | <code>*string</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the Agent rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule#expression CloudWorkloadSecurityAgentRule#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule#name CloudWorkloadSecurityAgentRule#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule#description CloudWorkloadSecurityAgentRule#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the Agent rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule#enabled CloudWorkloadSecurityAgentRule#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



