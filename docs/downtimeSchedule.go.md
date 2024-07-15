# `downtimeSchedule` Submodule <a name="`downtimeSchedule` Submodule" id="@cdktf/provider-datadog.downtimeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DowntimeSchedule <a name="DowntimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule datadog_downtime_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.NewDowntimeSchedule(scope Construct, id *string, config DowntimeScheduleConfig) DowntimeSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig">DowntimeScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig">DowntimeScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier">PutMonitorIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule">PutOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule">PutRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetDisplayTimezone">ResetDisplayTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMonitorIdentifier">ResetMonitorIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMuteFirstRecoveryNotification">ResetMuteFirstRecoveryNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndStates">ResetNotifyEndStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndTypes">ResetNotifyEndTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOneTimeSchedule">ResetOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetRecurringSchedule">ResetRecurringSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMonitorIdentifier` <a name="PutMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier"></a>

```go
func PutMonitorIdentifier(value DowntimeScheduleMonitorIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

---

##### `PutOneTimeSchedule` <a name="PutOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule"></a>

```go
func PutOneTimeSchedule(value DowntimeScheduleOneTimeSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

---

##### `PutRecurringSchedule` <a name="PutRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule"></a>

```go
func PutRecurringSchedule(value DowntimeScheduleRecurringSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

---

##### `ResetDisplayTimezone` <a name="ResetDisplayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetDisplayTimezone"></a>

```go
func ResetDisplayTimezone()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetMonitorIdentifier` <a name="ResetMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMonitorIdentifier"></a>

```go
func ResetMonitorIdentifier()
```

##### `ResetMuteFirstRecoveryNotification` <a name="ResetMuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMuteFirstRecoveryNotification"></a>

```go
func ResetMuteFirstRecoveryNotification()
```

##### `ResetNotifyEndStates` <a name="ResetNotifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndStates"></a>

```go
func ResetNotifyEndStates()
```

##### `ResetNotifyEndTypes` <a name="ResetNotifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndTypes"></a>

```go
func ResetNotifyEndTypes()
```

##### `ResetOneTimeSchedule` <a name="ResetOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOneTimeSchedule"></a>

```go
func ResetOneTimeSchedule()
```

##### `ResetRecurringSchedule` <a name="ResetRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetRecurringSchedule"></a>

```go
func ResetRecurringSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.DowntimeSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.DowntimeSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.DowntimeSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.DowntimeSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DowntimeSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DowntimeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DowntimeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifier">MonitorIdentifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference">DowntimeScheduleMonitorIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference">DowntimeScheduleOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference">DowntimeScheduleRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezoneInput">DisplayTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifierInput">MonitorIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotificationInput">MuteFirstRecoveryNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStatesInput">NotifyEndStatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypesInput">NotifyEndTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeScheduleInput">OneTimeScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringScheduleInput">RecurringScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezone">DisplayTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotification">MuteFirstRecoveryNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStates">NotifyEndStates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypes">NotifyEndTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorIdentifier`<sup>Required</sup> <a name="MonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifier"></a>

```go
func MonitorIdentifier() DowntimeScheduleMonitorIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference">DowntimeScheduleMonitorIdentifierOutputReference</a>

---

##### `OneTimeSchedule`<sup>Required</sup> <a name="OneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeSchedule"></a>

```go
func OneTimeSchedule() DowntimeScheduleOneTimeScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference">DowntimeScheduleOneTimeScheduleOutputReference</a>

---

##### `RecurringSchedule`<sup>Required</sup> <a name="RecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringSchedule"></a>

```go
func RecurringSchedule() DowntimeScheduleRecurringScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference">DowntimeScheduleRecurringScheduleOutputReference</a>

---

##### `DisplayTimezoneInput`<sup>Optional</sup> <a name="DisplayTimezoneInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezoneInput"></a>

```go
func DisplayTimezoneInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `MonitorIdentifierInput`<sup>Optional</sup> <a name="MonitorIdentifierInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifierInput"></a>

```go
func MonitorIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `MuteFirstRecoveryNotificationInput`<sup>Optional</sup> <a name="MuteFirstRecoveryNotificationInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotificationInput"></a>

```go
func MuteFirstRecoveryNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyEndStatesInput`<sup>Optional</sup> <a name="NotifyEndStatesInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStatesInput"></a>

```go
func NotifyEndStatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotifyEndTypesInput`<sup>Optional</sup> <a name="NotifyEndTypesInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypesInput"></a>

```go
func NotifyEndTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OneTimeScheduleInput`<sup>Optional</sup> <a name="OneTimeScheduleInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeScheduleInput"></a>

```go
func OneTimeScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `RecurringScheduleInput`<sup>Optional</sup> <a name="RecurringScheduleInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringScheduleInput"></a>

```go
func RecurringScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `DisplayTimezone`<sup>Required</sup> <a name="DisplayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezone"></a>

```go
func DisplayTimezone() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `MuteFirstRecoveryNotification`<sup>Required</sup> <a name="MuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotification"></a>

```go
func MuteFirstRecoveryNotification() interface{}
```

- *Type:* interface{}

---

##### `NotifyEndStates`<sup>Required</sup> <a name="NotifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStates"></a>

```go
func NotifyEndStates() *[]*string
```

- *Type:* *[]*string

---

##### `NotifyEndTypes`<sup>Required</sup> <a name="NotifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypes"></a>

```go
func NotifyEndTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeScheduleConfig <a name="DowntimeScheduleConfig" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

&downtimeschedule.DowntimeScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Scope: *string,
	DisplayTimezone: *string,
	Message: *string,
	MonitorIdentifier: github.com/cdktf/cdktf-provider-datadog-go/datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier,
	MuteFirstRecoveryNotification: interface{},
	NotifyEndStates: *[]*string,
	NotifyEndTypes: *[]*string,
	OneTimeSchedule: github.com/cdktf/cdktf-provider-datadog-go/datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule,
	RecurringSchedule: github.com/cdktf/cdktf-provider-datadog-go/datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.scope">Scope</a></code> | <code>*string</code> | The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.displayTimezone">DisplayTimezone</a></code> | <code>*string</code> | The timezone in which to display the downtime's start and end times in Datadog applications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.message">Message</a></code> | <code>*string</code> | A message to include with notifications for this downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.monitorIdentifier">MonitorIdentifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | monitor_identifier block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.muteFirstRecoveryNotification">MuteFirstRecoveryNotification</a></code> | <code>interface{}</code> | If the first recovery notification during a downtime should be muted. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndStates">NotifyEndStates</a></code> | <code>*[]*string</code> | States that will trigger a monitor notification when the `notify_end_types` action occurs. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndTypes">NotifyEndTypes</a></code> | <code>*[]*string</code> | Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.oneTimeSchedule">OneTimeSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.recurringSchedule">RecurringSchedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | recurring_schedule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#scope DowntimeSchedule#scope}

---

##### `DisplayTimezone`<sup>Optional</sup> <a name="DisplayTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.displayTimezone"></a>

```go
DisplayTimezone *string
```

- *Type:* *string

The timezone in which to display the downtime's start and end times in Datadog applications.

This is not used as an offset for scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#display_timezone DowntimeSchedule#display_timezone}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

A message to include with notifications for this downtime.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#message DowntimeSchedule#message}

---

##### `MonitorIdentifier`<sup>Optional</sup> <a name="MonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.monitorIdentifier"></a>

```go
MonitorIdentifier DowntimeScheduleMonitorIdentifier
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

monitor_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#monitor_identifier DowntimeSchedule#monitor_identifier}

---

##### `MuteFirstRecoveryNotification`<sup>Optional</sup> <a name="MuteFirstRecoveryNotification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.muteFirstRecoveryNotification"></a>

```go
MuteFirstRecoveryNotification interface{}
```

- *Type:* interface{}

If the first recovery notification during a downtime should be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#mute_first_recovery_notification DowntimeSchedule#mute_first_recovery_notification}

---

##### `NotifyEndStates`<sup>Optional</sup> <a name="NotifyEndStates" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndStates"></a>

```go
NotifyEndStates *[]*string
```

- *Type:* *[]*string

States that will trigger a monitor notification when the `notify_end_types` action occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#notify_end_states DowntimeSchedule#notify_end_states}

---

##### `NotifyEndTypes`<sup>Optional</sup> <a name="NotifyEndTypes" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndTypes"></a>

```go
NotifyEndTypes *[]*string
```

- *Type:* *[]*string

Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#notify_end_types DowntimeSchedule#notify_end_types}

---

##### `OneTimeSchedule`<sup>Optional</sup> <a name="OneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.oneTimeSchedule"></a>

```go
OneTimeSchedule DowntimeScheduleOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#one_time_schedule DowntimeSchedule#one_time_schedule}

---

##### `RecurringSchedule`<sup>Optional</sup> <a name="RecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.recurringSchedule"></a>

```go
RecurringSchedule DowntimeScheduleRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#recurring_schedule DowntimeSchedule#recurring_schedule}

---

### DowntimeScheduleMonitorIdentifier <a name="DowntimeScheduleMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

&downtimeschedule.DowntimeScheduleMonitorIdentifier {
	MonitorId: *f64,
	MonitorTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorId">MonitorId</a></code> | <code>*f64</code> | ID of the monitor to prevent notifications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorTags">MonitorTags</a></code> | <code>*[]*string</code> | A list of monitor tags. |

---

##### `MonitorId`<sup>Optional</sup> <a name="MonitorId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorId"></a>

```go
MonitorId *f64
```

- *Type:* *f64

ID of the monitor to prevent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#monitor_id DowntimeSchedule#monitor_id}

---

##### `MonitorTags`<sup>Optional</sup> <a name="MonitorTags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorTags"></a>

```go
MonitorTags *[]*string
```

- *Type:* *[]*string

A list of monitor tags.

For example, tags that are applied directly to monitors, not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies. The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags` to `[*]` configures the downtime to mute all monitors for the given scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#monitor_tags DowntimeSchedule#monitor_tags}

---

### DowntimeScheduleOneTimeSchedule <a name="DowntimeScheduleOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

&downtimeschedule.DowntimeScheduleOneTimeSchedule {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.end">End</a></code> | <code>*string</code> | ISO-8601 Datetime to end the downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.start">Start</a></code> | <code>*string</code> | ISO-8601 Datetime to start the downtime. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.end"></a>

```go
End *string
```

- *Type:* *string

ISO-8601 Datetime to end the downtime.

Must include a UTC offset of zero. If not provided, the downtime never ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#end DowntimeSchedule#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.start"></a>

```go
Start *string
```

- *Type:* *string

ISO-8601 Datetime to start the downtime.

Must include a UTC offset of zero. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

### DowntimeScheduleRecurringSchedule <a name="DowntimeScheduleRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

&downtimeschedule.DowntimeScheduleRecurringSchedule {
	Recurrence: interface{},
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.recurrence">Recurrence</a></code> | <code>interface{}</code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.timezone">Timezone</a></code> | <code>*string</code> | The timezone in which to schedule the downtime. |

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.recurrence"></a>

```go
Recurrence interface{}
```

- *Type:* interface{}

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#recurrence DowntimeSchedule#recurrence}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The timezone in which to schedule the downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#timezone DowntimeSchedule#timezone}

---

### DowntimeScheduleRecurringScheduleRecurrence <a name="DowntimeScheduleRecurringScheduleRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

&downtimeschedule.DowntimeScheduleRecurringScheduleRecurrence {
	Duration: *string,
	Rrule: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.duration">Duration</a></code> | <code>*string</code> | The length of the downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.rrule">Rrule</a></code> | <code>*string</code> | The `RRULE` standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.start">Start</a></code> | <code>*string</code> | ISO-8601 Datetime to start the downtime. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The length of the downtime.

Must begin with an integer and end with one of 'm', 'h', d', or 'w'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#duration DowntimeSchedule#duration}

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.rrule"></a>

```go
Rrule *string
```

- *Type:* *string

The `RRULE` standard for defining recurring events.

For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`. Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.  **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#rrule DowntimeSchedule#rrule}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.start"></a>

```go
Start *string
```

- *Type:* *string

ISO-8601 Datetime to start the downtime.

Must not include a UTC offset. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.40.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeScheduleMonitorIdentifierOutputReference <a name="DowntimeScheduleMonitorIdentifierOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.NewDowntimeScheduleMonitorIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DowntimeScheduleMonitorIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorId">ResetMonitorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorTags">ResetMonitorTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonitorId` <a name="ResetMonitorId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorId"></a>

```go
func ResetMonitorId()
```

##### `ResetMonitorTags` <a name="ResetMonitorTags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorTags"></a>

```go
func ResetMonitorTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorIdInput">MonitorIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTagsInput">MonitorTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorId">MonitorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTags">MonitorTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorIdInput"></a>

```go
func MonitorIdInput() *f64
```

- *Type:* *f64

---

##### `MonitorTagsInput`<sup>Optional</sup> <a name="MonitorTagsInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTagsInput"></a>

```go
func MonitorTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorId"></a>

```go
func MonitorId() *f64
```

- *Type:* *f64

---

##### `MonitorTags`<sup>Required</sup> <a name="MonitorTags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTags"></a>

```go
func MonitorTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DowntimeScheduleOneTimeScheduleOutputReference <a name="DowntimeScheduleOneTimeScheduleOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.NewDowntimeScheduleOneTimeScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DowntimeScheduleOneTimeScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DowntimeScheduleRecurringScheduleOutputReference <a name="DowntimeScheduleRecurringScheduleOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.NewDowntimeScheduleRecurringScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DowntimeScheduleRecurringScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence"></a>

```go
func PutRecurrence(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetRecurrence"></a>

```go
func ResetRecurrence()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList">DowntimeScheduleRecurringScheduleRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrence"></a>

```go
func Recurrence() DowntimeScheduleRecurringScheduleRecurrenceList
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList">DowntimeScheduleRecurringScheduleRecurrenceList</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DowntimeScheduleRecurringScheduleRecurrenceList <a name="DowntimeScheduleRecurringScheduleRecurrenceList" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.NewDowntimeScheduleRecurringScheduleRecurrenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DowntimeScheduleRecurringScheduleRecurrenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get"></a>

```go
func Get(index *f64) DowntimeScheduleRecurringScheduleRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DowntimeScheduleRecurringScheduleRecurrenceOutputReference <a name="DowntimeScheduleRecurringScheduleRecurrenceOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/downtimeschedule"

downtimeschedule.NewDowntimeScheduleRecurringScheduleRecurrenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DowntimeScheduleRecurringScheduleRecurrenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rruleInput">RruleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rrule">Rrule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rruleInput"></a>

```go
func RruleInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rrule"></a>

```go
func Rrule() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



