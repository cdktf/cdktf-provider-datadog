# `datadog_downtime`

Refer to the Terraform Registory for docs: [`datadog_downtime`](https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime).

# `downtime` Submodule <a name="`downtime` Submodule" id="@cdktf/provider-datadog.downtime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Downtime <a name="Downtime" id="@cdktf/provider-datadog.downtime.Downtime"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime datadog_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.Downtime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

downtime.NewDowntime(scope Construct, id *string, config DowntimeConfig) Downtime
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig">DowntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeConfig">DowntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorId">ResetMonitorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags">ResetMonitorTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification">ResetMuteFirstRecoveryNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtime.Downtime.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.downtime.Downtime.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.downtime.Downtime.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.downtime.Downtime.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence"></a>

```go
func PutRecurrence(value DowntimeRecurrence)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-datadog.downtime.Downtime.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-datadog.downtime.Downtime.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.downtime.Downtime.resetId"></a>

```go
func ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.downtime.Downtime.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetMonitorId` <a name="ResetMonitorId" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorId"></a>

```go
func ResetMonitorId()
```

##### `ResetMonitorTags` <a name="ResetMonitorTags" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags"></a>

```go
func ResetMonitorTags()
```

##### `ResetMuteFirstRecoveryNotification` <a name="ResetMuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification"></a>

```go
func ResetMuteFirstRecoveryNotification()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-datadog.downtime.Downtime.resetRecurrence"></a>

```go
func ResetRecurrence()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-datadog.downtime.Downtime.resetStart"></a>

```go
func ResetStart()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktf/provider-datadog.downtime.Downtime.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-datadog.downtime.Downtime.resetTimezone"></a>

```go
func ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

downtime.Downtime_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

downtime.Downtime_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

downtime.Downtime_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.activeChildId">ActiveChildId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput">MonitorIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput">MonitorTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput">MuteFirstRecoveryNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scopeInput">ScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorId">MonitorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTags">MonitorTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification">MuteFirstRecoveryNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scope">Scope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.downtime.Downtime.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtime.Downtime.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.downtime.Downtime.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.downtime.Downtime.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.downtime.Downtime.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.downtime.Downtime.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtime.Downtime.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.downtime.Downtime.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-datadog.downtime.Downtime.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ActiveChildId`<sup>Required</sup> <a name="ActiveChildId" id="@cdktf/provider-datadog.downtime.Downtime.property.activeChildId"></a>

```go
func ActiveChildId() *f64
```

- *Type:* *f64

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-datadog.downtime.Downtime.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrence"></a>

```go
func Recurrence() DowntimeRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-datadog.downtime.Downtime.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.downtime.Downtime.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.downtime.Downtime.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput"></a>

```go
func MonitorIdInput() *f64
```

- *Type:* *f64

---

##### `MonitorTagsInput`<sup>Optional</sup> <a name="MonitorTagsInput" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput"></a>

```go
func MonitorTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MuteFirstRecoveryNotificationInput`<sup>Optional</sup> <a name="MuteFirstRecoveryNotificationInput" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput"></a>

```go
func MuteFirstRecoveryNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput"></a>

```go
func RecurrenceInput() DowntimeRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.downtime.Downtime.property.scopeInput"></a>

```go
func ScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.downtime.Downtime.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-datadog.downtime.Downtime.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-datadog.downtime.Downtime.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.downtime.Downtime.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.downtime.Downtime.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorId"></a>

```go
func MonitorId() *f64
```

- *Type:* *f64

---

##### `MonitorTags`<sup>Required</sup> <a name="MonitorTags" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTags"></a>

```go
func MonitorTags() *[]*string
```

- *Type:* *[]*string

---

##### `MuteFirstRecoveryNotification`<sup>Required</sup> <a name="MuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification"></a>

```go
func MuteFirstRecoveryNotification() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtime.Downtime.property.scope"></a>

```go
func Scope() *[]*string
```

- *Type:* *[]*string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.downtime.Downtime.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-datadog.downtime.Downtime.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.downtime.Downtime.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeConfig <a name="DowntimeConfig" id="@cdktf/provider-datadog.downtime.DowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

&downtime.DowntimeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Scope: *[]*string,
	End: *f64,
	EndDate: *string,
	Id: *string,
	Message: *string,
	MonitorId: *f64,
	MonitorTags: *[]*string,
	MuteFirstRecoveryNotification: interface{},
	Recurrence: github.com/cdktf/cdktf-provider-datadog-go/datadog.downtime.DowntimeRecurrence,
	Start: *f64,
	StartDate: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope">Scope</a></code> | <code>*[]*string</code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.end">End</a></code> | <code>*f64</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate">EndDate</a></code> | <code>*string</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.message">Message</a></code> | <code>*string</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId">MonitorId</a></code> | <code>*f64</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags">MonitorTags</a></code> | <code>*[]*string</code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification">MuteFirstRecoveryNotification</a></code> | <code>interface{}</code> | When true the first recovery notification during the downtime will be muted. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.start">Start</a></code> | <code>*f64</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate">StartDate</a></code> | <code>*string</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone">Timezone</a></code> | <code>*string</code> | The timezone for the downtime, default UTC. Follows IANA timezone database identifiers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope"></a>

```go
Scope *[]*string
```

- *Type:* *[]*string

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#scope Downtime#scope}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.end"></a>

```go
End *f64
```

- *Type:* *f64

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#end Downtime#end}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#message Downtime#message}

---

##### `MonitorId`<sup>Optional</sup> <a name="MonitorId" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId"></a>

```go
MonitorId *f64
```

- *Type:* *f64

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `MonitorTags`<sup>Optional</sup> <a name="MonitorTags" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags"></a>

```go
MonitorTags *[]*string
```

- *Type:* *[]*string

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `MuteFirstRecoveryNotification`<sup>Optional</sup> <a name="MuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification"></a>

```go
MuteFirstRecoveryNotification interface{}
```

- *Type:* interface{}

When true the first recovery notification during the downtime will be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence"></a>

```go
Recurrence DowntimeRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#start Downtime#start}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The timezone for the downtime, default UTC. Follows IANA timezone database identifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#timezone Downtime#timezone}

---

### DowntimeRecurrence <a name="DowntimeRecurrence" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

&downtime.DowntimeRecurrence {
	Type: *string,
	Period: *f64,
	Rrule: *string,
	UntilDate: *f64,
	UntilOccurrences: *f64,
	WeekDays: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type">Type</a></code> | <code>*string</code> | One of `days`, `weeks`, `months`, `years`, or `rrule`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period">Period</a></code> | <code>*f64</code> | How often to repeat as an integer. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule">Rrule</a></code> | <code>*string</code> | The RRULE standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate">UntilDate</a></code> | <code>*f64</code> | The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences">UntilOccurrences</a></code> | <code>*f64</code> | How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays">WeekDays</a></code> | <code>*[]*string</code> | A list of week days to repeat on. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type"></a>

```go
Type *string
```

- *Type:* *string

One of `days`, `weeks`, `months`, `years`, or `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#type Downtime#type}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

How often to repeat as an integer.

For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#period Downtime#period}

---

##### `Rrule`<sup>Optional</sup> <a name="Rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule"></a>

```go
Rrule *string
```

- *Type:* *string

The RRULE standard for defining recurring events.

For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#rrule Downtime#rrule}

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate"></a>

```go
UntilDate *f64
```

- *Type:* *f64

The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#until_date Downtime#until_date}

---

##### `UntilOccurrences`<sup>Optional</sup> <a name="UntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences"></a>

```go
UntilOccurrences *f64
```

- *Type:* *f64

How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}

---

##### `WeekDays`<sup>Optional</sup> <a name="WeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays"></a>

```go
WeekDays *[]*string
```

- *Type:* *[]*string

A list of week days to repeat on.

Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.28.0/docs/resources/downtime#week_days Downtime#week_days}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeRecurrenceOutputReference <a name="DowntimeRecurrenceOutputReference" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtime"

downtime.NewDowntimeRecurrenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DowntimeRecurrenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule">ResetRrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences">ResetUntilOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays">ResetWeekDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetRrule` <a name="ResetRrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule"></a>

```go
func ResetRrule()
```

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate"></a>

```go
func ResetUntilDate()
```

##### `ResetUntilOccurrences` <a name="ResetUntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences"></a>

```go
func ResetUntilOccurrences()
```

##### `ResetWeekDays` <a name="ResetWeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays"></a>

```go
func ResetWeekDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput">RruleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput">UntilOccurrencesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput">WeekDaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule">Rrule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate">UntilDate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences">UntilOccurrences</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays">WeekDays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput"></a>

```go
func RruleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput"></a>

```go
func UntilDateInput() *f64
```

- *Type:* *f64

---

##### `UntilOccurrencesInput`<sup>Optional</sup> <a name="UntilOccurrencesInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput"></a>

```go
func UntilOccurrencesInput() *f64
```

- *Type:* *f64

---

##### `WeekDaysInput`<sup>Optional</sup> <a name="WeekDaysInput" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput"></a>

```go
func WeekDaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule"></a>

```go
func Rrule() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate"></a>

```go
func UntilDate() *f64
```

- *Type:* *f64

---

##### `UntilOccurrences`<sup>Required</sup> <a name="UntilOccurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences"></a>

```go
func UntilOccurrences() *f64
```

- *Type:* *f64

---

##### `WeekDays`<sup>Required</sup> <a name="WeekDays" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays"></a>

```go
func WeekDays() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DowntimeRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---



