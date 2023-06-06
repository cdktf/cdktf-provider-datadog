# `datadog_service_level_objective`

Refer to the Terraform Registory for docs: [`datadog_service_level_objective`](https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective).

# `serviceLevelObjective` Submodule <a name="`serviceLevelObjective` Submodule" id="@cdktf/provider-datadog.serviceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.NewServiceLevelObjective(scope Construct, id *string, config ServiceLevelObjectiveConfig) ServiceLevelObjective
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig">ServiceLevelObjectiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig">ServiceLevelObjectiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds">PutThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds">ResetMonitorIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold">ResetTargetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe">ResetTimeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold">ResetWarningThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery"></a>

```go
func PutQuery(value ServiceLevelObjectiveQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `PutThresholds` <a name="PutThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds"></a>

```go
func PutThresholds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.putThresholds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetId"></a>

```go
func ResetId()
```

##### `ResetMonitorIds` <a name="ResetMonitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetMonitorIds"></a>

```go
func ResetMonitorIds()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetThreshold` <a name="ResetTargetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTargetThreshold"></a>

```go
func ResetTargetThreshold()
```

##### `ResetTimeframe` <a name="ResetTimeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetTimeframe"></a>

```go
func ResetTimeframe()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetValidate"></a>

```go
func ResetValidate()
```

##### `ResetWarningThreshold` <a name="ResetWarningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.resetWarningThreshold"></a>

```go
func ResetWarningThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.ServiceLevelObjective_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.ServiceLevelObjective_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.ServiceLevelObjective_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds">Thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput">MonitorIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput">TargetThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput">ThresholdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput">TimeframeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput">ValidateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput">WarningThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds">MonitorIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold">TargetThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe">Timeframe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate">Validate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold">WarningThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.query"></a>

```go
func Query() ServiceLevelObjectiveQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference">ServiceLevelObjectiveQueryOutputReference</a>

---

##### `Thresholds`<sup>Required</sup> <a name="Thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholds"></a>

```go
func Thresholds() ServiceLevelObjectiveThresholdsList
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList">ServiceLevelObjectiveThresholdsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonitorIdsInput`<sup>Optional</sup> <a name="MonitorIdsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIdsInput"></a>

```go
func MonitorIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.queryInput"></a>

```go
func QueryInput() ServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetThresholdInput`<sup>Optional</sup> <a name="TargetThresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThresholdInput"></a>

```go
func TargetThresholdInput() *f64
```

- *Type:* *f64

---

##### `ThresholdsInput`<sup>Optional</sup> <a name="ThresholdsInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.thresholdsInput"></a>

```go
func ThresholdsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeframeInput`<sup>Optional</sup> <a name="TimeframeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframeInput"></a>

```go
func TimeframeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validateInput"></a>

```go
func ValidateInput() interface{}
```

- *Type:* interface{}

---

##### `WarningThresholdInput`<sup>Optional</sup> <a name="WarningThresholdInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThresholdInput"></a>

```go
func WarningThresholdInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorIds`<sup>Required</sup> <a name="MonitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.monitorIds"></a>

```go
func MonitorIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TargetThreshold`<sup>Required</sup> <a name="TargetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.targetThreshold"></a>

```go
func TargetThreshold() *f64
```

- *Type:* *f64

---

##### `Timeframe`<sup>Required</sup> <a name="Timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.timeframe"></a>

```go
func Timeframe() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.validate"></a>

```go
func Validate() interface{}
```

- *Type:* interface{}

---

##### `WarningThreshold`<sup>Required</sup> <a name="WarningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.warningThreshold"></a>

```go
func WarningThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjective.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelObjectiveConfig <a name="ServiceLevelObjectiveConfig" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

&servicelevelobjective.ServiceLevelObjectiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Thresholds: interface{},
	Type: *string,
	Description: *string,
	ForceDelete: interface{},
	Groups: *[]*string,
	Id: *string,
	MonitorIds: *[]*f64,
	Query: github.com/cdktf/cdktf-provider-datadog-go/datadog.serviceLevelObjective.ServiceLevelObjectiveQuery,
	Tags: *[]*string,
	TargetThreshold: *f64,
	Timeframe: *string,
	Validate: interface{},
	WarningThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name">Name</a></code> | <code>*string</code> | Name of Datadog service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds">Thresholds</a></code> | <code>interface{}</code> | thresholds block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type">Type</a></code> | <code>*string</code> | The type of the service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description">Description</a></code> | <code>*string</code> | A description of this service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards). |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups">Groups</a></code> | <code>*[]*string</code> | A static set of groups to filter monitor-based SLOs. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds">MonitorIds</a></code> | <code>*[]*f64</code> | A static set of monitor IDs to use as part of the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tags to associate with your service level objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold">TargetThreshold</a></code> | <code>*f64</code> | The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe">Timeframe</a></code> | <code>*string</code> | The primary time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate">Validate</a></code> | <code>interface{}</code> | Whether or not to validate the SLO. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold">WarningThreshold</a></code> | <code>*f64</code> | The objective's warning value in `(0,100)`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of Datadog service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#name ServiceLevelObjective#name}

---

##### `Thresholds`<sup>Required</sup> <a name="Thresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.thresholds"></a>

```go
Thresholds interface{}
```

- *Type:* interface{}

thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#thresholds ServiceLevelObjective#thresholds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the service level objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/service-level-objectives/#create-a-slo-object). Valid values are `metric`, `monitor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#type ServiceLevelObjective#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this service level objective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#description ServiceLevelObjective#description}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

A boolean indicating whether this monitor can be deleted even if it's referenced by other resources (for example, dashboards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#force_delete ServiceLevelObjective#force_delete}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

A static set of groups to filter monitor-based SLOs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#groups ServiceLevelObjective#groups}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#id ServiceLevelObjective#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitorIds`<sup>Optional</sup> <a name="MonitorIds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.monitorIds"></a>

```go
MonitorIds *[]*f64
```

- *Type:* *[]*f64

A static set of monitor IDs to use as part of the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#monitor_ids ServiceLevelObjective#monitor_ids}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.query"></a>

```go
Query ServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#query ServiceLevelObjective#query}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tags to associate with your service level objective.

This can help you categorize and filter service level objectives in the service level objectives page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#tags ServiceLevelObjective#tags}

---

##### `TargetThreshold`<sup>Optional</sup> <a name="TargetThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.targetThreshold"></a>

```go
TargetThreshold *f64
```

- *Type:* *f64

The objective's target in `(0,100)`. This must match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#target_threshold ServiceLevelObjective#target_threshold}

---

##### `Timeframe`<sup>Optional</sup> <a name="Timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.timeframe"></a>

```go
Timeframe *string
```

- *Type:* *string

The primary time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.validate"></a>

```go
Validate interface{}
```

- *Type:* interface{}

Whether or not to validate the SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#validate ServiceLevelObjective#validate}

---

##### `WarningThreshold`<sup>Optional</sup> <a name="WarningThreshold" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveConfig.property.warningThreshold"></a>

```go
WarningThreshold *f64
```

- *Type:* *f64

The objective's warning value in `(0,100)`.

This must be greater than the target value and match the corresponding thresholds of the primary time frame.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#warning_threshold ServiceLevelObjective#warning_threshold}

---

### ServiceLevelObjectiveQuery <a name="ServiceLevelObjectiveQuery" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

&servicelevelobjective.ServiceLevelObjectiveQuery {
	Denominator: *string,
	Numerator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator">Denominator</a></code> | <code>*string</code> | The sum of the `total` events. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator">Numerator</a></code> | <code>*string</code> | The sum of all the `good` events. |

---

##### `Denominator`<sup>Required</sup> <a name="Denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.denominator"></a>

```go
Denominator *string
```

- *Type:* *string

The sum of the `total` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#denominator ServiceLevelObjective#denominator}

---

##### `Numerator`<sup>Required</sup> <a name="Numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery.property.numerator"></a>

```go
Numerator *string
```

- *Type:* *string

The sum of all the `good` events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#numerator ServiceLevelObjective#numerator}

---

### ServiceLevelObjectiveThresholds <a name="ServiceLevelObjectiveThresholds" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

&servicelevelobjective.ServiceLevelObjectiveThresholds {
	Target: *f64,
	Timeframe: *string,
	Warning: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target">Target</a></code> | <code>*f64</code> | The objective's target in `(0,100)`. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe">Timeframe</a></code> | <code>*string</code> | The time frame for the objective. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning">Warning</a></code> | <code>*f64</code> | The objective's warning value in `(0,100)`. This must be greater than the target value. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

The objective's target in `(0,100)`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#target ServiceLevelObjective#target}

---

##### `Timeframe`<sup>Required</sup> <a name="Timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.timeframe"></a>

```go
Timeframe *string
```

- *Type:* *string

The time frame for the objective.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API documentation page. Valid values are `7d`, `30d`, `90d`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#timeframe ServiceLevelObjective#timeframe}

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholds.property.warning"></a>

```go
Warning *f64
```

- *Type:* *f64

The objective's warning value in `(0,100)`. This must be greater than the target value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/service_level_objective#warning ServiceLevelObjective#warning}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelObjectiveQueryOutputReference <a name="ServiceLevelObjectiveQueryOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.NewServiceLevelObjectiveQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceLevelObjectiveQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput">DenominatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput">NumeratorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator">Denominator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator">Numerator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DenominatorInput`<sup>Optional</sup> <a name="DenominatorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominatorInput"></a>

```go
func DenominatorInput() *string
```

- *Type:* *string

---

##### `NumeratorInput`<sup>Optional</sup> <a name="NumeratorInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numeratorInput"></a>

```go
func NumeratorInput() *string
```

- *Type:* *string

---

##### `Denominator`<sup>Required</sup> <a name="Denominator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```go
func Denominator() *string
```

- *Type:* *string

---

##### `Numerator`<sup>Required</sup> <a name="Numerator" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```go
func Numerator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveQuery">ServiceLevelObjectiveQuery</a>

---


### ServiceLevelObjectiveThresholdsList <a name="ServiceLevelObjectiveThresholdsList" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.NewServiceLevelObjectiveThresholdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceLevelObjectiveThresholdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get"></a>

```go
func Get(index *f64) ServiceLevelObjectiveThresholdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceLevelObjectiveThresholdsOutputReference <a name="ServiceLevelObjectiveThresholdsOutputReference" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/servicelevelobjective"

servicelevelobjective.NewServiceLevelObjectiveThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceLevelObjectiveThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.resetWarning"></a>

```go
func ResetWarning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay">TargetDisplay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay">WarningDisplay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput">TimeframeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput">WarningInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe">Timeframe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning">Warning</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetDisplay`<sup>Required</sup> <a name="TargetDisplay" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetDisplay"></a>

```go
func TargetDisplay() *string
```

- *Type:* *string

---

##### `WarningDisplay`<sup>Required</sup> <a name="WarningDisplay" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningDisplay"></a>

```go
func WarningDisplay() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `TimeframeInput`<sup>Optional</sup> <a name="TimeframeInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframeInput"></a>

```go
func TimeframeInput() *string
```

- *Type:* *string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warningInput"></a>

```go
func WarningInput() *f64
```

- *Type:* *f64

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `Timeframe`<sup>Required</sup> <a name="Timeframe" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.timeframe"></a>

```go
func Timeframe() *string
```

- *Type:* *string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.warning"></a>

```go
func Warning() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.serviceLevelObjective.ServiceLevelObjectiveThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



