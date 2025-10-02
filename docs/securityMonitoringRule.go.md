# `securityMonitoringRule` Submodule <a name="`securityMonitoringRule` Submodule" id="@cdktf/provider-datadog.securityMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringRule <a name="SecurityMonitoringRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRule(scope Construct, id *string, config SecurityMonitoringRuleConfig) SecurityMonitoringRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig">SecurityMonitoringRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig">SecurityMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField">PutCalculatedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase">PutCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables">PutReferenceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions">PutSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery">PutSignalQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase">PutThirdPartyCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField">ResetCalculatedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase">ResetCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy">ResetGroupSignalsBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle">ResetHasExtendedTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables">ResetReferenceTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions">ResetSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery">ResetSignalQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase">ResetThirdPartyCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCalculatedField` <a name="PutCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField"></a>

```go
func PutCalculatedField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCase` <a name="PutCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase"></a>

```go
func PutCase(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions"></a>

```go
func PutOptions(value SecurityMonitoringRuleOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery"></a>

```go
func PutQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReferenceTables` <a name="PutReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables"></a>

```go
func PutReferenceTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedulingOptions` <a name="PutSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions"></a>

```go
func PutSchedulingOptions(value SecurityMonitoringRuleSchedulingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---

##### `PutSignalQuery` <a name="PutSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery"></a>

```go
func PutSignalQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThirdPartyCase` <a name="PutThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase"></a>

```go
func PutThirdPartyCase(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCalculatedField` <a name="ResetCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField"></a>

```go
func ResetCalculatedField()
```

##### `ResetCase` <a name="ResetCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase"></a>

```go
func ResetCase()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGroupSignalsBy` <a name="ResetGroupSignalsBy" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy"></a>

```go
func ResetGroupSignalsBy()
```

##### `ResetHasExtendedTitle` <a name="ResetHasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle"></a>

```go
func ResetHasExtendedTitle()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetId"></a>

```go
func ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetReferenceTables` <a name="ResetReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables"></a>

```go
func ResetReferenceTables()
```

##### `ResetSchedulingOptions` <a name="ResetSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions"></a>

```go
func ResetSchedulingOptions()
```

##### `ResetSignalQuery` <a name="ResetSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery"></a>

```go
func ResetSignalQuery()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThirdPartyCase` <a name="ResetThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase"></a>

```go
func ResetThirdPartyCase()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType"></a>

```go
func ResetType()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate"></a>

```go
func ResetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.SecurityMonitoringRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.SecurityMonitoringRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.SecurityMonitoringRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.SecurityMonitoringRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityMonitoringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField">CalculatedField</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case">Case</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query">Query</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables">ReferenceTables</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions">SchedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference">SecurityMonitoringRuleSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery">SignalQuery</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase">ThirdPartyCase</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput">CalculatedFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput">CaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput">GroupSignalsByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput">HasExtendedTitleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput">QueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput">ReferenceTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput">SchedulingOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput">SignalQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput">ThirdPartyCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput">ValidateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy">GroupSignalsBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle">HasExtendedTitle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate">Validate</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CalculatedField`<sup>Required</sup> <a name="CalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField"></a>

```go
func CalculatedField() SecurityMonitoringRuleCalculatedFieldList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a>

---

##### `Case`<sup>Required</sup> <a name="Case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case"></a>

```go
func Case() SecurityMonitoringRuleCaseList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter"></a>

```go
func Filter() SecurityMonitoringRuleFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options"></a>

```go
func Options() SecurityMonitoringRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference">SecurityMonitoringRuleOptionsOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query"></a>

```go
func Query() SecurityMonitoringRuleQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a>

---

##### `ReferenceTables`<sup>Required</sup> <a name="ReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables"></a>

```go
func ReferenceTables() SecurityMonitoringRuleReferenceTablesList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a>

---

##### `SchedulingOptions`<sup>Required</sup> <a name="SchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions"></a>

```go
func SchedulingOptions() SecurityMonitoringRuleSchedulingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference">SecurityMonitoringRuleSchedulingOptionsOutputReference</a>

---

##### `SignalQuery`<sup>Required</sup> <a name="SignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery"></a>

```go
func SignalQuery() SecurityMonitoringRuleSignalQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a>

---

##### `ThirdPartyCase`<sup>Required</sup> <a name="ThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase"></a>

```go
func ThirdPartyCase() SecurityMonitoringRuleThirdPartyCaseList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a>

---

##### `CalculatedFieldInput`<sup>Optional</sup> <a name="CalculatedFieldInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput"></a>

```go
func CalculatedFieldInput() interface{}
```

- *Type:* interface{}

---

##### `CaseInput`<sup>Optional</sup> <a name="CaseInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput"></a>

```go
func CaseInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GroupSignalsByInput`<sup>Optional</sup> <a name="GroupSignalsByInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput"></a>

```go
func GroupSignalsByInput() *[]*string
```

- *Type:* *[]*string

---

##### `HasExtendedTitleInput`<sup>Optional</sup> <a name="HasExtendedTitleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput"></a>

```go
func HasExtendedTitleInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput"></a>

```go
func OptionsInput() SecurityMonitoringRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput"></a>

```go
func QueryInput() interface{}
```

- *Type:* interface{}

---

##### `ReferenceTablesInput`<sup>Optional</sup> <a name="ReferenceTablesInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput"></a>

```go
func ReferenceTablesInput() interface{}
```

- *Type:* interface{}

---

##### `SchedulingOptionsInput`<sup>Optional</sup> <a name="SchedulingOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput"></a>

```go
func SchedulingOptionsInput() SecurityMonitoringRuleSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---

##### `SignalQueryInput`<sup>Optional</sup> <a name="SignalQueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput"></a>

```go
func SignalQueryInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ThirdPartyCaseInput`<sup>Optional</sup> <a name="ThirdPartyCaseInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput"></a>

```go
func ThirdPartyCaseInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput"></a>

```go
func ValidateInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GroupSignalsBy`<sup>Required</sup> <a name="GroupSignalsBy" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy"></a>

```go
func GroupSignalsBy() *[]*string
```

- *Type:* *[]*string

---

##### `HasExtendedTitle`<sup>Required</sup> <a name="HasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle"></a>

```go
func HasExtendedTitle() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate"></a>

```go
func Validate() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringRuleCalculatedField <a name="SecurityMonitoringRuleCalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleCalculatedField {
	Expression: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression">Expression</a></code> | <code>*string</code> | Expression. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name">Name</a></code> | <code>*string</code> | Field name. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleCase <a name="SecurityMonitoringRuleCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleCase {
	Status: *string,
	Action: interface{},
	Condition: *string,
	Name: *string,
	Notifications: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status">Status</a></code> | <code>*string</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition">Condition</a></code> | <code>*string</code> | A rule case contains logical operations (`>`,`>=`, `&&`, `\|\|`) to determine if a signal should be generated based on the event counts in the previously defined queries. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name">Name</a></code> | <code>*string</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications">Notifications</a></code> | <code>*[]*string</code> | Notification targets for each rule case. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status"></a>

```go
Status *string
```

- *Type:* *string

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications"></a>

```go
Notifications *[]*string
```

- *Type:* *[]*string

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

### SecurityMonitoringRuleCaseAction <a name="SecurityMonitoringRuleCaseAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleCaseAction {
	Type: *string,
	Options: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type">Type</a></code> | <code>*string</code> | Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | options block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options"></a>

```go
Options SecurityMonitoringRuleCaseActionOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

### SecurityMonitoringRuleCaseActionOptions <a name="SecurityMonitoringRuleCaseActionOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleCaseActionOptions {
	Duration: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration">Duration</a></code> | <code>*f64</code> | Duration of the action in seconds. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Duration of the action in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#duration SecurityMonitoringRule#duration}

---

### SecurityMonitoringRuleConfig <a name="SecurityMonitoringRuleConfig" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Message: *string,
	Name: *string,
	CalculatedField: interface{},
	Case: interface{},
	Enabled: interface{},
	Filter: interface{},
	GroupSignalsBy: *[]*string,
	HasExtendedTitle: interface{},
	Id: *string,
	Options: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityMonitoringRule.SecurityMonitoringRuleOptions,
	Query: interface{},
	ReferenceTables: interface{},
	SchedulingOptions: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions,
	SignalQuery: interface{},
	Tags: *[]*string,
	ThirdPartyCase: interface{},
	Type: *string,
	Validate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message">Message</a></code> | <code>*string</code> | Message for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField">CalculatedField</a></code> | <code>interface{}</code> | calculated_field block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case">Case</a></code> | <code>interface{}</code> | case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy">GroupSignalsBy</a></code> | <code>*[]*string</code> | Additional grouping to perform on top of the query grouping. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle">HasExtendedTitle</a></code> | <code>interface{}</code> | Whether the notifications include the triggering group-by values in their title. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query">Query</a></code> | <code>interface{}</code> | query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables">ReferenceTables</a></code> | <code>interface{}</code> | reference_tables block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions">SchedulingOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery">SignalQuery</a></code> | <code>interface{}</code> | signal_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags for generated signals. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase">ThirdPartyCase</a></code> | <code>interface{}</code> | third_party_case block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type">Type</a></code> | <code>*string</code> | The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate">Validate</a></code> | <code>interface{}</code> | Whether or not to validate the Rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `CalculatedField`<sup>Optional</sup> <a name="CalculatedField" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField"></a>

```go
CalculatedField interface{}
```

- *Type:* interface{}

calculated_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}

---

##### `Case`<sup>Optional</sup> <a name="Case" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case"></a>

```go
Case interface{}
```

- *Type:* interface{}

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `GroupSignalsBy`<sup>Optional</sup> <a name="GroupSignalsBy" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy"></a>

```go
GroupSignalsBy *[]*string
```

- *Type:* *[]*string

Additional grouping to perform on top of the query grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}

---

##### `HasExtendedTitle`<sup>Optional</sup> <a name="HasExtendedTitle" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle"></a>

```go
HasExtendedTitle interface{}
```

- *Type:* interface{}

Whether the notifications include the triggering group-by values in their title. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#id SecurityMonitoringRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options"></a>

```go
Options SecurityMonitoringRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query"></a>

```go
Query interface{}
```

- *Type:* interface{}

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `ReferenceTables`<sup>Optional</sup> <a name="ReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables"></a>

```go
ReferenceTables interface{}
```

- *Type:* interface{}

reference_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}

---

##### `SchedulingOptions`<sup>Optional</sup> <a name="SchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions"></a>

```go
SchedulingOptions SecurityMonitoringRuleSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}

---

##### `SignalQuery`<sup>Optional</sup> <a name="SignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery"></a>

```go
SignalQuery interface{}
```

- *Type:* interface{}

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags for generated signals.

Note: if default tags are present at provider level, they will be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `ThirdPartyCase`<sup>Optional</sup> <a name="ThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase"></a>

```go
ThirdPartyCase interface{}
```

- *Type:* interface{}

third_party_case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate"></a>

```go
Validate interface{}
```

- *Type:* interface{}

Whether or not to validate the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}

---

### SecurityMonitoringRuleFilter <a name="SecurityMonitoringRuleFilter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleFilter {
	Action: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action">Action</a></code> | <code>*string</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query">Query</a></code> | <code>*string</code> | Query for selecting logs to apply the filtering action. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action"></a>

```go
Action *string
```

- *Type:* *string

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query"></a>

```go
Query *string
```

- *Type:* *string

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

### SecurityMonitoringRuleOptions <a name="SecurityMonitoringRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleOptions {
	DecreaseCriticalityBasedOnEnv: interface{},
	DetectionMethod: *string,
	EvaluationWindow: *f64,
	ImpossibleTravelOptions: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions,
	KeepAlive: *f64,
	MaxSignalDuration: *f64,
	NewValueOptions: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions,
	ThirdPartyRuleOptions: github.com/cdktf/cdktf-provider-datadog-go/datadog/v12.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv">DecreaseCriticalityBasedOnEnv</a></code> | <code>interface{}</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod">DetectionMethod</a></code> | <code>*string</code> | The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow">EvaluationWindow</a></code> | <code>*f64</code> | A time window is specified to match when at least one of the cases matches true. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions">ImpossibleTravelOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | impossible_travel_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive">KeepAlive</a></code> | <code>*f64</code> | Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration">MaxSignalDuration</a></code> | <code>*f64</code> | A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds). |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions">NewValueOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | new_value_options block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions">ThirdPartyRuleOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | third_party_rule_options block. |

---

##### `DecreaseCriticalityBasedOnEnv`<sup>Optional</sup> <a name="DecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```go
DecreaseCriticalityBasedOnEnv interface{}
```

- *Type:* interface{}

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}

---

##### `DetectionMethod`<sup>Optional</sup> <a name="DetectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod"></a>

```go
DetectionMethod *string
```

- *Type:* *string

The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}

---

##### `EvaluationWindow`<sup>Optional</sup> <a name="EvaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow"></a>

```go
EvaluationWindow *f64
```

- *Type:* *f64

A time window is specified to match when at least one of the cases matches true.

This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

##### `ImpossibleTravelOptions`<sup>Optional</sup> <a name="ImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions"></a>

```go
ImpossibleTravelOptions SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

impossible_travel_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}

---

##### `KeepAlive`<sup>Optional</sup> <a name="KeepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive"></a>

```go
KeepAlive *f64
```

- *Type:* *f64

Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window (in seconds).

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}

---

##### `MaxSignalDuration`<sup>Optional</sup> <a name="MaxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration"></a>

```go
MaxSignalDuration *f64
```

- *Type:* *f64

A signal will “close” regardless of the query being matched once the time exceeds the maximum duration (in seconds).

This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}

---

##### `NewValueOptions`<sup>Optional</sup> <a name="NewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions"></a>

```go
NewValueOptions SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

new_value_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}

---

##### `ThirdPartyRuleOptions`<sup>Optional</sup> <a name="ThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions"></a>

```go
ThirdPartyRuleOptions SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

third_party_rule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}

---

### SecurityMonitoringRuleOptionsImpossibleTravelOptions <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleOptionsImpossibleTravelOptions {
	BaselineUserLocations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations">BaselineUserLocations</a></code> | <code>interface{}</code> | If true, signals are suppressed for the first 24 hours. |

---

##### `BaselineUserLocations`<sup>Optional</sup> <a name="BaselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations"></a>

```go
BaselineUserLocations interface{}
```

- *Type:* interface{}

If true, signals are suppressed for the first 24 hours.

During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}

---

### SecurityMonitoringRuleOptionsNewValueOptions <a name="SecurityMonitoringRuleOptionsNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleOptionsNewValueOptions {
	ForgetAfter: *f64,
	LearningDuration: *f64,
	LearningMethod: *string,
	LearningThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter">ForgetAfter</a></code> | <code>*f64</code> | The duration in days after which a learned value is forgotten. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration">LearningDuration</a></code> | <code>*f64</code> | The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod">LearningMethod</a></code> | <code>*string</code> | The learning method used to determine when signals should be generated for values that weren't learned. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold">LearningThreshold</a></code> | <code>*f64</code> | A number of occurrences after which signals are generated for values that weren't learned. |

---

##### `ForgetAfter`<sup>Required</sup> <a name="ForgetAfter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter"></a>

```go
ForgetAfter *f64
```

- *Type:* *f64

The duration in days after which a learned value is forgotten.

Valid values are `1`, `2`, `7`, `14`, `21`, `28`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}

---

##### `LearningDuration`<sup>Optional</sup> <a name="LearningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration"></a>

```go
LearningDuration *f64
```

- *Type:* *f64

The duration in days during which values are learned, and after which signals will be generated for values that weren't learned.

If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

##### `LearningMethod`<sup>Optional</sup> <a name="LearningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod"></a>

```go
LearningMethod *string
```

- *Type:* *string

The learning method used to determine when signals should be generated for values that weren't learned.

Valid values are `duration`, `threshold`. Defaults to `"duration"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}

---

##### `LearningThreshold`<sup>Optional</sup> <a name="LearningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold"></a>

```go
LearningThreshold *f64
```

- *Type:* *f64

A number of occurrences after which signals are generated for values that weren't learned.

Valid values are `0`, `1`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptions <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions {
	DefaultStatus: *string,
	RootQuery: interface{},
	DefaultNotifications: *[]*string,
	SignalTitleTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus">DefaultStatus</a></code> | <code>*string</code> | Severity of the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery">RootQuery</a></code> | <code>interface{}</code> | root_query block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications">DefaultNotifications</a></code> | <code>*[]*string</code> | Notification targets for the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate">SignalTitleTemplate</a></code> | <code>*string</code> | A template for the signal title; if omitted, the title is generated based on the case name. |

---

##### `DefaultStatus`<sup>Required</sup> <a name="DefaultStatus" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus"></a>

```go
DefaultStatus *string
```

- *Type:* *string

Severity of the default rule case, when none of the third-party cases match.

Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}

---

##### `RootQuery`<sup>Required</sup> <a name="RootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery"></a>

```go
RootQuery interface{}
```

- *Type:* interface{}

root_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}

---

##### `DefaultNotifications`<sup>Optional</sup> <a name="DefaultNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications"></a>

```go
DefaultNotifications *[]*string
```

- *Type:* *[]*string

Notification targets for the default rule case, when none of the third-party cases match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}

---

##### `SignalTitleTemplate`<sup>Optional</sup> <a name="SignalTitleTemplate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate"></a>

```go
SignalTitleTemplate *string
```

- *Type:* *string

A template for the signal title; if omitted, the title is generated based on the case name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery {
	Query: *string,
	GroupByFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query">Query</a></code> | <code>*string</code> | Query to filter logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields">GroupByFields</a></code> | <code>*[]*string</code> | Fields to group by. If empty, each log triggers a signal. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

Query to filter logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields"></a>

```go
GroupByFields *[]*string
```

- *Type:* *[]*string

Fields to group by. If empty, each log triggers a signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

### SecurityMonitoringRuleQuery <a name="SecurityMonitoringRuleQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleQuery {
	Query: *string,
	AgentRule: interface{},
	Aggregation: *string,
	DataSource: *string,
	DistinctFields: *[]*string,
	GroupByFields: *[]*string,
	HasOptionalGroupByFields: interface{},
	Indexes: *[]*string,
	Metric: *string,
	Metrics: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query">Query</a></code> | <code>*string</code> | Query to run on logs. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule">AgentRule</a></code> | <code>interface{}</code> | agent_rule block. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation">Aggregation</a></code> | <code>*string</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource">DataSource</a></code> | <code>*string</code> | Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. Defaults to `"logs"`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields">DistinctFields</a></code> | <code>*[]*string</code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields">GroupByFields</a></code> | <code>*[]*string</code> | Fields to group by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields">HasOptionalGroupByFields</a></code> | <code>interface{}</code> | When false, events without a group-by value are ignored by the rule. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes">Indexes</a></code> | <code>*[]*string</code> | List of indexes to run the query on when the data source is `logs`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric">Metric</a></code> | <code>*string</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics">Metrics</a></code> | <code>*[]*string</code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name">Name</a></code> | <code>*string</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query"></a>

```go
Query *string
```

- *Type:* *string

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `AgentRule`<sup>Optional</sup> <a name="AgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule"></a>

```go
AgentRule interface{}
```

- *Type:* interface{}

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`. Defaults to `"logs"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#data_source SecurityMonitoringRule#data_source}

---

##### `DistinctFields`<sup>Optional</sup> <a name="DistinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields"></a>

```go
DistinctFields *[]*string
```

- *Type:* *[]*string

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields"></a>

```go
GroupByFields *[]*string
```

- *Type:* *[]*string

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

##### `HasOptionalGroupByFields`<sup>Optional</sup> <a name="HasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields"></a>

```go
HasOptionalGroupByFields interface{}
```

- *Type:* interface{}

When false, events without a group-by value are ignored by the rule.

When true, events with missing group-by fields are processed with `N/A`, replacing the missing values. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#has_optional_group_by_fields SecurityMonitoringRule#has_optional_group_by_fields}

---

##### `Indexes`<sup>Optional</sup> <a name="Indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes"></a>

```go
Indexes *[]*string
```

- *Type:* *[]*string

List of indexes to run the query on when the data source is `logs`.

Supports only one element. Used only for scheduled rules (in other words, when `scheduling_options` is defined).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#indexes SecurityMonitoringRule#indexes}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

**Deprecated.** Configure `metrics` instead. This attribute will be removed in the next major version of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics"></a>

```go
Metrics *[]*string
```

- *Type:* *[]*string

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleQueryAgentRule <a name="SecurityMonitoringRuleQueryAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleQueryAgentRule {
	AgentRuleId: *string,
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId">AgentRuleId</a></code> | <code>*string</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression">Expression</a></code> | <code>*string</code> | **Deprecated**. It won't be applied anymore. |

---

##### `AgentRuleId`<sup>Required</sup> <a name="AgentRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId"></a>

```go
AgentRuleId *string
```

- *Type:* *string

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

### SecurityMonitoringRuleReferenceTables <a name="SecurityMonitoringRuleReferenceTables" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleReferenceTables {
	CheckPresence: interface{},
	ColumnName: *string,
	LogFieldPath: *string,
	RuleQueryName: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence">CheckPresence</a></code> | <code>interface{}</code> | Whether to include or exclude logs that match the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName">ColumnName</a></code> | <code>*string</code> | The name of the column in the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath">LogFieldPath</a></code> | <code>*string</code> | The field in the log that should be matched against the reference table. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName">RuleQueryName</a></code> | <code>*string</code> | The name of the query to filter. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName">TableName</a></code> | <code>*string</code> | The name of the reference table. |

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence"></a>

```go
CheckPresence interface{}
```

- *Type:* interface{}

Whether to include or exclude logs that match the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#check_presence SecurityMonitoringRule#check_presence}

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

The name of the column in the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#column_name SecurityMonitoringRule#column_name}

---

##### `LogFieldPath`<sup>Required</sup> <a name="LogFieldPath" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath"></a>

```go
LogFieldPath *string
```

- *Type:* *string

The field in the log that should be matched against the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#log_field_path SecurityMonitoringRule#log_field_path}

---

##### `RuleQueryName`<sup>Required</sup> <a name="RuleQueryName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName"></a>

```go
RuleQueryName *string
```

- *Type:* *string

The name of the query to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rule_query_name SecurityMonitoringRule#rule_query_name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#table_name SecurityMonitoringRule#table_name}

---

### SecurityMonitoringRuleSchedulingOptions <a name="SecurityMonitoringRuleSchedulingOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleSchedulingOptions {
	Rrule: *string,
	Start: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule">Rrule</a></code> | <code>*string</code> | Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start">Start</a></code> | <code>*string</code> | Start date for the schedule, in ISO 8601 format without timezone. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone">Timezone</a></code> | <code>*string</code> | Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. |

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule"></a>

```go
Rrule *string
```

- *Type:* *string

Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rrule SecurityMonitoringRule#rrule}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start"></a>

```go
Start *string
```

- *Type:* *string

Start date for the schedule, in ISO 8601 format without timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#start SecurityMonitoringRule#start}

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#timezone SecurityMonitoringRule#timezone}

---

### SecurityMonitoringRuleSignalQuery <a name="SecurityMonitoringRuleSignalQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleSignalQuery {
	RuleId: *string,
	Aggregation: *string,
	CorrelatedByFields: *[]*string,
	CorrelatedQueryIndex: *string,
	DefaultRuleId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId">RuleId</a></code> | <code>*string</code> | Rule ID of the signal to correlate. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation">Aggregation</a></code> | <code>*string</code> | The aggregation type. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields">CorrelatedByFields</a></code> | <code>*[]*string</code> | Fields to correlate by. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex">CorrelatedQueryIndex</a></code> | <code>*string</code> | Index of the rule query used to retrieve the correlated field. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId">DefaultRuleId</a></code> | <code>*string</code> | Default Rule ID of the signal to correlate. This value is READ-ONLY. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name">Name</a></code> | <code>*string</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Rule ID of the signal to correlate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"event_count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `CorrelatedByFields`<sup>Optional</sup> <a name="CorrelatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields"></a>

```go
CorrelatedByFields *[]*string
```

- *Type:* *[]*string

Fields to correlate by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}

---

##### `CorrelatedQueryIndex`<sup>Optional</sup> <a name="CorrelatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex"></a>

```go
CorrelatedQueryIndex *string
```

- *Type:* *string

Index of the rule query used to retrieve the correlated field.

An empty string applies correlation on the non-projected per query attributes of the rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}

---

##### `DefaultRuleId`<sup>Optional</sup> <a name="DefaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.defaultRuleId"></a>

```go
DefaultRuleId *string
```

- *Type:* *string

Default Rule ID of the signal to correlate. This value is READ-ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#default_rule_id SecurityMonitoringRule#default_rule_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleThirdPartyCase <a name="SecurityMonitoringRuleThirdPartyCase" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

&securitymonitoringrule.SecurityMonitoringRuleThirdPartyCase {
	Status: *string,
	Name: *string,
	Notifications: *[]*string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status">Status</a></code> | <code>*string</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name">Name</a></code> | <code>*string</code> | Name of the case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications">Notifications</a></code> | <code>*[]*string</code> | Notification targets for each rule case. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query">Query</a></code> | <code>*string</code> | A query to associate a third-party event to this case. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status"></a>

```go
Status *string
```

- *Type:* *string

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications"></a>

```go
Notifications *[]*string
```

- *Type:* *[]*string

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query"></a>

```go
Query *string
```

- *Type:* *string

A query to associate a third-party event to this case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringRuleCalculatedFieldList <a name="SecurityMonitoringRuleCalculatedFieldList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCalculatedFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleCalculatedFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleCalculatedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleCalculatedFieldOutputReference <a name="SecurityMonitoringRuleCalculatedFieldOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCalculatedFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleCalculatedFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleCaseActionList <a name="SecurityMonitoringRuleCaseActionList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCaseActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleCaseActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleCaseActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleCaseActionOptionsOutputReference <a name="SecurityMonitoringRuleCaseActionOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCaseActionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityMonitoringRuleCaseActionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityMonitoringRuleCaseActionOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---


### SecurityMonitoringRuleCaseActionOutputReference <a name="SecurityMonitoringRuleCaseActionOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCaseActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleCaseActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions"></a>

```go
func PutOptions(value SecurityMonitoringRuleCaseActionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions"></a>

```go
func ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference">SecurityMonitoringRuleCaseActionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options"></a>

```go
func Options() SecurityMonitoringRuleCaseActionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference">SecurityMonitoringRuleCaseActionOptionsOutputReference</a>

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput"></a>

```go
func OptionsInput() SecurityMonitoringRuleCaseActionOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleCaseList <a name="SecurityMonitoringRuleCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleCaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleCaseOutputReference <a name="SecurityMonitoringRuleCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleCaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleCaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications">ResetNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications"></a>

```go
func ResetNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput">NotificationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications">Notifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action"></a>

```go
func Action() SecurityMonitoringRuleCaseActionList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput"></a>

```go
func NotificationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications"></a>

```go
func Notifications() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleFilterList <a name="SecurityMonitoringRuleFilterList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleFilterOutputReference <a name="SecurityMonitoringRuleFilterOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations">ResetBaselineUserLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaselineUserLocations` <a name="ResetBaselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations"></a>

```go
func ResetBaselineUserLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput">BaselineUserLocationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations">BaselineUserLocations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaselineUserLocationsInput`<sup>Optional</sup> <a name="BaselineUserLocationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput"></a>

```go
func BaselineUserLocationsInput() interface{}
```

- *Type:* interface{}

---

##### `BaselineUserLocations`<sup>Required</sup> <a name="BaselineUserLocations" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations"></a>

```go
func BaselineUserLocations() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---


### SecurityMonitoringRuleOptionsNewValueOptionsOutputReference <a name="SecurityMonitoringRuleOptionsNewValueOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleOptionsNewValueOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityMonitoringRuleOptionsNewValueOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration">ResetLearningDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod">ResetLearningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold">ResetLearningThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLearningDuration` <a name="ResetLearningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration"></a>

```go
func ResetLearningDuration()
```

##### `ResetLearningMethod` <a name="ResetLearningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod"></a>

```go
func ResetLearningMethod()
```

##### `ResetLearningThreshold` <a name="ResetLearningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold"></a>

```go
func ResetLearningThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput">ForgetAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput">LearningDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput">LearningMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput">LearningThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter">ForgetAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration">LearningDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod">LearningMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold">LearningThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForgetAfterInput`<sup>Optional</sup> <a name="ForgetAfterInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput"></a>

```go
func ForgetAfterInput() *f64
```

- *Type:* *f64

---

##### `LearningDurationInput`<sup>Optional</sup> <a name="LearningDurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput"></a>

```go
func LearningDurationInput() *f64
```

- *Type:* *f64

---

##### `LearningMethodInput`<sup>Optional</sup> <a name="LearningMethodInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput"></a>

```go
func LearningMethodInput() *string
```

- *Type:* *string

---

##### `LearningThresholdInput`<sup>Optional</sup> <a name="LearningThresholdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput"></a>

```go
func LearningThresholdInput() *f64
```

- *Type:* *f64

---

##### `ForgetAfter`<sup>Required</sup> <a name="ForgetAfter" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter"></a>

```go
func ForgetAfter() *f64
```

- *Type:* *f64

---

##### `LearningDuration`<sup>Required</sup> <a name="LearningDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration"></a>

```go
func LearningDuration() *f64
```

- *Type:* *f64

---

##### `LearningMethod`<sup>Required</sup> <a name="LearningMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod"></a>

```go
func LearningMethod() *string
```

- *Type:* *string

---

##### `LearningThreshold`<sup>Required</sup> <a name="LearningThreshold" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold"></a>

```go
func LearningThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---


### SecurityMonitoringRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityMonitoringRuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions">PutImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions">PutNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions">PutThirdPartyRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">ResetDecreaseCriticalityBasedOnEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod">ResetDetectionMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow">ResetEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions">ResetImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive">ResetKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration">ResetMaxSignalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions">ResetNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions">ResetThirdPartyRuleOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImpossibleTravelOptions` <a name="PutImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions"></a>

```go
func PutImpossibleTravelOptions(value SecurityMonitoringRuleOptionsImpossibleTravelOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `PutNewValueOptions` <a name="PutNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions"></a>

```go
func PutNewValueOptions(value SecurityMonitoringRuleOptionsNewValueOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `PutThirdPartyRuleOptions` <a name="PutThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions"></a>

```go
func PutThirdPartyRuleOptions(value SecurityMonitoringRuleOptionsThirdPartyRuleOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---

##### `ResetDecreaseCriticalityBasedOnEnv` <a name="ResetDecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```go
func ResetDecreaseCriticalityBasedOnEnv()
```

##### `ResetDetectionMethod` <a name="ResetDetectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod"></a>

```go
func ResetDetectionMethod()
```

##### `ResetEvaluationWindow` <a name="ResetEvaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow"></a>

```go
func ResetEvaluationWindow()
```

##### `ResetImpossibleTravelOptions` <a name="ResetImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions"></a>

```go
func ResetImpossibleTravelOptions()
```

##### `ResetKeepAlive` <a name="ResetKeepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive"></a>

```go
func ResetKeepAlive()
```

##### `ResetMaxSignalDuration` <a name="ResetMaxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration"></a>

```go
func ResetMaxSignalDuration()
```

##### `ResetNewValueOptions` <a name="ResetNewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions"></a>

```go
func ResetNewValueOptions()
```

##### `ResetThirdPartyRuleOptions` <a name="ResetThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions"></a>

```go
func ResetThirdPartyRuleOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions">ImpossibleTravelOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions">NewValueOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions">ThirdPartyRuleOptions</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">DecreaseCriticalityBasedOnEnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput">DetectionMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput">EvaluationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput">ImpossibleTravelOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput">KeepAliveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput">MaxSignalDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput">NewValueOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput">ThirdPartyRuleOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">DecreaseCriticalityBasedOnEnv</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod">DetectionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow">EvaluationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive">KeepAlive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration">MaxSignalDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImpossibleTravelOptions`<sup>Required</sup> <a name="ImpossibleTravelOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions"></a>

```go
func ImpossibleTravelOptions() SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference">SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference</a>

---

##### `NewValueOptions`<sup>Required</sup> <a name="NewValueOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions"></a>

```go
func NewValueOptions() SecurityMonitoringRuleOptionsNewValueOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference">SecurityMonitoringRuleOptionsNewValueOptionsOutputReference</a>

---

##### `ThirdPartyRuleOptions`<sup>Required</sup> <a name="ThirdPartyRuleOptions" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions"></a>

```go
func ThirdPartyRuleOptions() SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference</a>

---

##### `DecreaseCriticalityBasedOnEnvInput`<sup>Optional</sup> <a name="DecreaseCriticalityBasedOnEnvInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```go
func DecreaseCriticalityBasedOnEnvInput() interface{}
```

- *Type:* interface{}

---

##### `DetectionMethodInput`<sup>Optional</sup> <a name="DetectionMethodInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput"></a>

```go
func DetectionMethodInput() *string
```

- *Type:* *string

---

##### `EvaluationWindowInput`<sup>Optional</sup> <a name="EvaluationWindowInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput"></a>

```go
func EvaluationWindowInput() *f64
```

- *Type:* *f64

---

##### `ImpossibleTravelOptionsInput`<sup>Optional</sup> <a name="ImpossibleTravelOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput"></a>

```go
func ImpossibleTravelOptionsInput() SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---

##### `KeepAliveInput`<sup>Optional</sup> <a name="KeepAliveInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput"></a>

```go
func KeepAliveInput() *f64
```

- *Type:* *f64

---

##### `MaxSignalDurationInput`<sup>Optional</sup> <a name="MaxSignalDurationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput"></a>

```go
func MaxSignalDurationInput() *f64
```

- *Type:* *f64

---

##### `NewValueOptionsInput`<sup>Optional</sup> <a name="NewValueOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput"></a>

```go
func NewValueOptionsInput() SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---

##### `ThirdPartyRuleOptionsInput`<sup>Optional</sup> <a name="ThirdPartyRuleOptionsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput"></a>

```go
func ThirdPartyRuleOptionsInput() SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---

##### `DecreaseCriticalityBasedOnEnv`<sup>Required</sup> <a name="DecreaseCriticalityBasedOnEnv" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```go
func DecreaseCriticalityBasedOnEnv() interface{}
```

- *Type:* interface{}

---

##### `DetectionMethod`<sup>Required</sup> <a name="DetectionMethod" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod"></a>

```go
func DetectionMethod() *string
```

- *Type:* *string

---

##### `EvaluationWindow`<sup>Required</sup> <a name="EvaluationWindow" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow"></a>

```go
func EvaluationWindow() *f64
```

- *Type:* *f64

---

##### `KeepAlive`<sup>Required</sup> <a name="KeepAlive" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive"></a>

```go
func KeepAlive() *f64
```

- *Type:* *f64

---

##### `MaxSignalDuration`<sup>Required</sup> <a name="MaxSignalDuration" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration"></a>

```go
func MaxSignalDuration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityMonitoringRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery">PutRootQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications">ResetDefaultNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate">ResetSignalTitleTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRootQuery` <a name="PutRootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery"></a>

```go
func PutRootQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultNotifications` <a name="ResetDefaultNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications"></a>

```go
func ResetDefaultNotifications()
```

##### `ResetSignalTitleTemplate` <a name="ResetSignalTitleTemplate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate"></a>

```go
func ResetSignalTitleTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery">RootQuery</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput">DefaultNotificationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput">DefaultStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput">RootQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput">SignalTitleTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications">DefaultNotifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus">DefaultStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate">SignalTitleTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootQuery`<sup>Required</sup> <a name="RootQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery"></a>

```go
func RootQuery() SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a>

---

##### `DefaultNotificationsInput`<sup>Optional</sup> <a name="DefaultNotificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput"></a>

```go
func DefaultNotificationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultStatusInput`<sup>Optional</sup> <a name="DefaultStatusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput"></a>

```go
func DefaultStatusInput() *string
```

- *Type:* *string

---

##### `RootQueryInput`<sup>Optional</sup> <a name="RootQueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput"></a>

```go
func RootQueryInput() interface{}
```

- *Type:* interface{}

---

##### `SignalTitleTemplateInput`<sup>Optional</sup> <a name="SignalTitleTemplateInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput"></a>

```go
func SignalTitleTemplateInput() *string
```

- *Type:* *string

---

##### `DefaultNotifications`<sup>Required</sup> <a name="DefaultNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications"></a>

```go
func DefaultNotifications() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultStatus`<sup>Required</sup> <a name="DefaultStatus" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus"></a>

```go
func DefaultStatus() *string
```

- *Type:* *string

---

##### `SignalTitleTemplate`<sup>Required</sup> <a name="SignalTitleTemplate" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate"></a>

```go
func SignalTitleTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields"></a>

```go
func ResetGroupByFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields">GroupByFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput"></a>

```go
func GroupByFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields"></a>

```go
func GroupByFields() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleQueryAgentRuleList <a name="SecurityMonitoringRuleQueryAgentRuleList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleQueryAgentRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleQueryAgentRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleQueryAgentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringRuleQueryAgentRuleOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleQueryAgentRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleQueryAgentRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">AgentRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId">AgentRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentRuleIdInput`<sup>Optional</sup> <a name="AgentRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```go
func AgentRuleIdInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `AgentRuleId`<sup>Required</sup> <a name="AgentRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```go
func AgentRuleId() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleQueryList <a name="SecurityMonitoringRuleQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleQueryOutputReference <a name="SecurityMonitoringRuleQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule">PutAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule">ResetAgentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields">ResetDistinctFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields">ResetHasOptionalGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes">ResetIndexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentRule` <a name="PutAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule"></a>

```go
func PutAgentRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgentRule` <a name="ResetAgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule"></a>

```go
func ResetAgentRule()
```

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource"></a>

```go
func ResetDataSource()
```

##### `ResetDistinctFields` <a name="ResetDistinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields"></a>

```go
func ResetDistinctFields()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields"></a>

```go
func ResetGroupByFields()
```

##### `ResetHasOptionalGroupByFields` <a name="ResetHasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields"></a>

```go
func ResetHasOptionalGroupByFields()
```

##### `ResetIndexes` <a name="ResetIndexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes"></a>

```go
func ResetIndexes()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics"></a>

```go
func ResetMetrics()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule">AgentRule</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput">AgentRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput">DistinctFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput">HasOptionalGroupByFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput">IndexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput">MetricsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields">DistinctFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields">GroupByFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields">HasOptionalGroupByFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes">Indexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics">Metrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentRule`<sup>Required</sup> <a name="AgentRule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule"></a>

```go
func AgentRule() SecurityMonitoringRuleQueryAgentRuleList
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a>

---

##### `AgentRuleInput`<sup>Optional</sup> <a name="AgentRuleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput"></a>

```go
func AgentRuleInput() interface{}
```

- *Type:* interface{}

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `DistinctFieldsInput`<sup>Optional</sup> <a name="DistinctFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput"></a>

```go
func DistinctFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput"></a>

```go
func GroupByFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HasOptionalGroupByFieldsInput`<sup>Optional</sup> <a name="HasOptionalGroupByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput"></a>

```go
func HasOptionalGroupByFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `IndexesInput`<sup>Optional</sup> <a name="IndexesInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput"></a>

```go
func IndexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput"></a>

```go
func MetricsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `DistinctFields`<sup>Required</sup> <a name="DistinctFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields"></a>

```go
func DistinctFields() *[]*string
```

- *Type:* *[]*string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields"></a>

```go
func GroupByFields() *[]*string
```

- *Type:* *[]*string

---

##### `HasOptionalGroupByFields`<sup>Required</sup> <a name="HasOptionalGroupByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields"></a>

```go
func HasOptionalGroupByFields() interface{}
```

- *Type:* interface{}

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes"></a>

```go
func Indexes() *[]*string
```

- *Type:* *[]*string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics"></a>

```go
func Metrics() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleReferenceTablesList <a name="SecurityMonitoringRuleReferenceTablesList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleReferenceTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleReferenceTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleReferenceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleReferenceTablesOutputReference <a name="SecurityMonitoringRuleReferenceTablesOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleReferenceTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleReferenceTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput">CheckPresenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput">LogFieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput">RuleQueryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence">CheckPresence</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath">LogFieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName">RuleQueryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresenceInput`<sup>Optional</sup> <a name="CheckPresenceInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput"></a>

```go
func CheckPresenceInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `LogFieldPathInput`<sup>Optional</sup> <a name="LogFieldPathInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput"></a>

```go
func LogFieldPathInput() *string
```

- *Type:* *string

---

##### `RuleQueryNameInput`<sup>Optional</sup> <a name="RuleQueryNameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput"></a>

```go
func RuleQueryNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence"></a>

```go
func CheckPresence() interface{}
```

- *Type:* interface{}

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `LogFieldPath`<sup>Required</sup> <a name="LogFieldPath" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath"></a>

```go
func LogFieldPath() *string
```

- *Type:* *string

---

##### `RuleQueryName`<sup>Required</sup> <a name="RuleQueryName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName"></a>

```go
func RuleQueryName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleSchedulingOptionsOutputReference <a name="SecurityMonitoringRuleSchedulingOptionsOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleSchedulingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityMonitoringRuleSchedulingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput">RruleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule">Rrule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RruleInput`<sup>Optional</sup> <a name="RruleInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput"></a>

```go
func RruleInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Rrule`<sup>Required</sup> <a name="Rrule" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule"></a>

```go
func Rrule() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityMonitoringRuleSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---


### SecurityMonitoringRuleSignalQueryList <a name="SecurityMonitoringRuleSignalQueryList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleSignalQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleSignalQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleSignalQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleSignalQueryOutputReference <a name="SecurityMonitoringRuleSignalQueryOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleSignalQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleSignalQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields">ResetCorrelatedByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex">ResetCorrelatedQueryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId">ResetDefaultRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetCorrelatedByFields` <a name="ResetCorrelatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields"></a>

```go
func ResetCorrelatedByFields()
```

##### `ResetCorrelatedQueryIndex` <a name="ResetCorrelatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex"></a>

```go
func ResetCorrelatedQueryIndex()
```

##### `ResetDefaultRuleId` <a name="ResetDefaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetDefaultRuleId"></a>

```go
func ResetDefaultRuleId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput">CorrelatedByFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput">CorrelatedQueryIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput">DefaultRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields">CorrelatedByFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex">CorrelatedQueryIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId">DefaultRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `CorrelatedByFieldsInput`<sup>Optional</sup> <a name="CorrelatedByFieldsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput"></a>

```go
func CorrelatedByFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CorrelatedQueryIndexInput`<sup>Optional</sup> <a name="CorrelatedQueryIndexInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput"></a>

```go
func CorrelatedQueryIndexInput() *string
```

- *Type:* *string

---

##### `DefaultRuleIdInput`<sup>Optional</sup> <a name="DefaultRuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleIdInput"></a>

```go
func DefaultRuleIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `CorrelatedByFields`<sup>Required</sup> <a name="CorrelatedByFields" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields"></a>

```go
func CorrelatedByFields() *[]*string
```

- *Type:* *[]*string

---

##### `CorrelatedQueryIndex`<sup>Required</sup> <a name="CorrelatedQueryIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex"></a>

```go
func CorrelatedQueryIndex() *string
```

- *Type:* *string

---

##### `DefaultRuleId`<sup>Required</sup> <a name="DefaultRuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId"></a>

```go
func DefaultRuleId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleThirdPartyCaseList <a name="SecurityMonitoringRuleThirdPartyCaseList" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleThirdPartyCaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityMonitoringRuleThirdPartyCaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get"></a>

```go
func Get(index *f64) SecurityMonitoringRuleThirdPartyCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityMonitoringRuleThirdPartyCaseOutputReference <a name="SecurityMonitoringRuleThirdPartyCaseOutputReference" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/securitymonitoringrule"

securitymonitoringrule.NewSecurityMonitoringRuleThirdPartyCaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityMonitoringRuleThirdPartyCaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications"></a>

```go
func ResetNotifications()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput">NotificationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications">Notifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput"></a>

```go
func NotificationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications"></a>

```go
func Notifications() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



