# `dataDatadogIncidentNotificationRule` Submodule <a name="`dataDatadogIncidentNotificationRule` Submodule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIncidentNotificationRule <a name="DataDatadogIncidentNotificationRule" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/incident_notification_rule datadog_incident_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.NewDataDatadogIncidentNotificationRule(scope Construct, id *string, config DataDatadogIncidentNotificationRuleConfig) DataDatadogIncidentNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig">DataDatadogIncidentNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig">DataDatadogIncidentNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions">ResetConditions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.resetConditions"></a>

```go
func ResetConditions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.DataDatadogIncidentNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.DataDatadogIncidentNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.DataDatadogIncidentNotificationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.DataDatadogIncidentNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogIncidentNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogIncidentNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogIncidentNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/incident_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogIncidentNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles">Handles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType">IncidentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate">NotificationTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn">RenotifyOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditions"></a>

```go
func Conditions() DataDatadogIncidentNotificationRuleConditionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList">DataDatadogIncidentNotificationRuleConditionsList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Handles`<sup>Required</sup> <a name="Handles" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.handles"></a>

```go
func Handles() *[]*string
```

- *Type:* *[]*string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.incidentType"></a>

```go
func IncidentType() *string
```

- *Type:* *string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `NotificationTemplate`<sup>Required</sup> <a name="NotificationTemplate" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.notificationTemplate"></a>

```go
func NotificationTemplate() *string
```

- *Type:* *string

---

##### `RenotifyOn`<sup>Required</sup> <a name="RenotifyOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.renotifyOn"></a>

```go
func RenotifyOn() *[]*string
```

- *Type:* *[]*string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIncidentNotificationRuleConditions <a name="DataDatadogIncidentNotificationRuleConditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

&datadatadogincidentnotificationrule.DataDatadogIncidentNotificationRuleConditions {

}
```


### DataDatadogIncidentNotificationRuleConfig <a name="DataDatadogIncidentNotificationRuleConfig" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

&datadatadogincidentnotificationrule.DataDatadogIncidentNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Conditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the incident notification rule. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the incident notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/incident_notification_rule#id DataDatadogIncidentNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConfig.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/data-sources/incident_notification_rule#conditions DataDatadogIncidentNotificationRule#conditions}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIncidentNotificationRuleConditionsList <a name="DataDatadogIncidentNotificationRuleConditionsList" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.NewDataDatadogIncidentNotificationRuleConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogIncidentNotificationRuleConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get"></a>

```go
func Get(index *f64) DataDatadogIncidentNotificationRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogIncidentNotificationRuleConditionsOutputReference <a name="DataDatadogIncidentNotificationRuleConditionsOutputReference" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogincidentnotificationrule"

datadatadogincidentnotificationrule.NewDataDatadogIncidentNotificationRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogIncidentNotificationRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogIncidentNotificationRule.DataDatadogIncidentNotificationRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



