# `cloudConfigurationRule` Submodule <a name="`cloudConfigurationRule` Submodule" id="@cdktf/provider-datadog.cloudConfigurationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigurationRule <a name="CloudConfigurationRule" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule datadog_cloud_configuration_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudconfigurationrule"

cloudconfigurationrule.NewCloudConfigurationRule(scope Construct, id *string, config CloudConfigurationRuleConfig) CloudConfigurationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig">CloudConfigurationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig">CloudConfigurationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes">ResetRelatedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetNotifications"></a>

```go
func ResetNotifications()
```

##### `ResetRelatedResourceTypes` <a name="ResetRelatedResourceTypes" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetRelatedResourceTypes"></a>

```go
func ResetRelatedResourceTypes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudconfigurationrule"

cloudconfigurationrule.CloudConfigurationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudconfigurationrule"

cloudconfigurationrule.CloudConfigurationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudconfigurationrule"

cloudconfigurationrule.CloudConfigurationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput">NotificationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput">RelatedResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications">Notifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes">RelatedResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notificationsInput"></a>

```go
func NotificationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RelatedResourceTypesInput`<sup>Optional</sup> <a name="RelatedResourceTypesInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypesInput"></a>

```go
func RelatedResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.notifications"></a>

```go
func Notifications() *[]*string
```

- *Type:* *[]*string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `RelatedResourceTypes`<sup>Required</sup> <a name="RelatedResourceTypes" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.relatedResourceTypes"></a>

```go
func RelatedResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigurationRuleConfig <a name="CloudConfigurationRuleConfig" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/cloudconfigurationrule"

&cloudconfigurationrule.CloudConfigurationRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Message: *string,
	Name: *string,
	Policy: *string,
	ResourceType: *string,
	Severity: *string,
	GroupBy: *[]*string,
	Id: *string,
	Notifications: *[]*string,
	RelatedResourceTypes: *[]*string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the cloud configuration rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message">Message</a></code> | <code>*string</code> | The message associated to the rule that will be shown in findings and signals. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the cloud configuration rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy">Policy</a></code> | <code>*string</code> | Policy written in Rego format. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Main resource type to be checked by the rule. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity">Severity</a></code> | <code>*string</code> | Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Fields to group by when generating signals, e.g. @resource. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#id CloudConfigurationRule#id}. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications">Notifications</a></code> | <code>*[]*string</code> | Notification targets for signals. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes">RelatedResourceTypes</a></code> | <code>*[]*string</code> | Related resource types to be checked by the rule. Defaults to empty list. |
| <code><a href="#@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags of the rule, propagated to findings and signals. Defaults to empty list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the cloud configuration rule is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#enabled CloudConfigurationRule#enabled}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

The message associated to the rule that will be shown in findings and signals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#message CloudConfigurationRule#message}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the cloud configuration rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#name CloudConfigurationRule#name}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Policy written in Rego format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#policy CloudConfigurationRule#policy}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Main resource type to be checked by the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#resource_type CloudConfigurationRule#resource_type}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Severity of the rule and associated signals. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#severity CloudConfigurationRule#severity}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Fields to group by when generating signals, e.g. @resource. Defaults to empty list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#group_by CloudConfigurationRule#group_by}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#id CloudConfigurationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.notifications"></a>

```go
Notifications *[]*string
```

- *Type:* *[]*string

Notification targets for signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#notifications CloudConfigurationRule#notifications}

---

##### `RelatedResourceTypes`<sup>Optional</sup> <a name="RelatedResourceTypes" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.relatedResourceTypes"></a>

```go
RelatedResourceTypes *[]*string
```

- *Type:* *[]*string

Related resource types to be checked by the rule. Defaults to empty list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#related_resource_types CloudConfigurationRule#related_resource_types}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.cloudConfigurationRule.CloudConfigurationRuleConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags of the rule, propagated to findings and signals. Defaults to empty list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/cloud_configuration_rule#tags CloudConfigurationRule#tags}

---



