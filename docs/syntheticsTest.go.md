# `syntheticsTest` Submodule <a name="`syntheticsTest` Submodule" id="@cdktf/provider-datadog.syntheticsTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsTest <a name="SyntheticsTest" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test datadog_synthetics_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTest(scope Construct, id *string, config SyntheticsTestConfig) SyntheticsTest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig">SyntheticsTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig">SyntheticsTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep">PutApiStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion">PutAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep">PutBrowserStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable">PutBrowserVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable">PutConfigVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList">PutOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth">PutRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate">PutRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition">PutRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy">PutRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetApiStep">ResetApiStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetAssertion">ResetAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserStep">ResetBrowserStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserVariable">ResetBrowserVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetConfigVariable">ResetConfigVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetDeviceIds">ResetDeviceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOptionsList">ResetOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestBasicauth">ResetRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestClientCertificate">ResetRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestDefinition">ResetRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestProxy">ResetRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestQuery">ResetRequestQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSetCookie">ResetSetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSubtype">ResetSubtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApiStep` <a name="PutApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep"></a>

```go
func PutApiStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAssertion` <a name="PutAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion"></a>

```go
func PutAssertion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBrowserStep` <a name="PutBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep"></a>

```go
func PutBrowserStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBrowserVariable` <a name="PutBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable"></a>

```go
func PutBrowserVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConfigVariable` <a name="PutConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable"></a>

```go
func PutConfigVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOptionsList` <a name="PutOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList"></a>

```go
func PutOptionsList(value SyntheticsTestOptionsList)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---

##### `PutRequestBasicauth` <a name="PutRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth"></a>

```go
func PutRequestBasicauth(value SyntheticsTestRequestBasicauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---

##### `PutRequestClientCertificate` <a name="PutRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate"></a>

```go
func PutRequestClientCertificate(value SyntheticsTestRequestClientCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---

##### `PutRequestDefinition` <a name="PutRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition"></a>

```go
func PutRequestDefinition(value SyntheticsTestRequestDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---

##### `PutRequestProxy` <a name="PutRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy"></a>

```go
func PutRequestProxy(value SyntheticsTestRequestProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---

##### `ResetApiStep` <a name="ResetApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetApiStep"></a>

```go
func ResetApiStep()
```

##### `ResetAssertion` <a name="ResetAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetAssertion"></a>

```go
func ResetAssertion()
```

##### `ResetBrowserStep` <a name="ResetBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserStep"></a>

```go
func ResetBrowserStep()
```

##### `ResetBrowserVariable` <a name="ResetBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserVariable"></a>

```go
func ResetBrowserVariable()
```

##### `ResetConfigVariable` <a name="ResetConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetConfigVariable"></a>

```go
func ResetConfigVariable()
```

##### `ResetDeviceIds` <a name="ResetDeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetDeviceIds"></a>

```go
func ResetDeviceIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetId"></a>

```go
func ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetOptionsList` <a name="ResetOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOptionsList"></a>

```go
func ResetOptionsList()
```

##### `ResetRequestBasicauth` <a name="ResetRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestBasicauth"></a>

```go
func ResetRequestBasicauth()
```

##### `ResetRequestClientCertificate` <a name="ResetRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestClientCertificate"></a>

```go
func ResetRequestClientCertificate()
```

##### `ResetRequestDefinition` <a name="ResetRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestDefinition"></a>

```go
func ResetRequestDefinition()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetRequestProxy` <a name="ResetRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestProxy"></a>

```go
func ResetRequestProxy()
```

##### `ResetRequestQuery` <a name="ResetRequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestQuery"></a>

```go
func ResetRequestQuery()
```

##### `ResetSetCookie` <a name="ResetSetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSetCookie"></a>

```go
func ResetSetCookie()
```

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSubtype"></a>

```go
func ResetSubtype()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.SyntheticsTest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.SyntheticsTest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.SyntheticsTest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStep">ApiStep</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList">SyntheticsTestApiStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertion">Assertion</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList">SyntheticsTestAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStep">BrowserStep</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList">SyntheticsTestBrowserStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariable">BrowserVariable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList">SyntheticsTestBrowserVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariable">ConfigVariable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList">SyntheticsTestConfigVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.monitorId">MonitorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsList">OptionsList</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference">SyntheticsTestOptionsListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference">SyntheticsTestRequestBasicauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference">SyntheticsTestRequestClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference">SyntheticsTestRequestDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference">SyntheticsTestRequestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStepInput">ApiStepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertionInput">AssertionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStepInput">BrowserStepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariableInput">BrowserVariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariableInput">ConfigVariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIdsInput">DeviceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsListInput">OptionsListInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauthInput">RequestBasicauthInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificateInput">RequestClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinitionInput">RequestDefinitionInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxyInput">RequestProxyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQueryInput">RequestQueryInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookieInput">SetCookieInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtypeInput">SubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIds">DeviceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQuery">RequestQuery</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookie">SetCookie</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiStep`<sup>Required</sup> <a name="ApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStep"></a>

```go
func ApiStep() SyntheticsTestApiStepList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList">SyntheticsTestApiStepList</a>

---

##### `Assertion`<sup>Required</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertion"></a>

```go
func Assertion() SyntheticsTestAssertionList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList">SyntheticsTestAssertionList</a>

---

##### `BrowserStep`<sup>Required</sup> <a name="BrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStep"></a>

```go
func BrowserStep() SyntheticsTestBrowserStepList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList">SyntheticsTestBrowserStepList</a>

---

##### `BrowserVariable`<sup>Required</sup> <a name="BrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariable"></a>

```go
func BrowserVariable() SyntheticsTestBrowserVariableList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList">SyntheticsTestBrowserVariableList</a>

---

##### `ConfigVariable`<sup>Required</sup> <a name="ConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariable"></a>

```go
func ConfigVariable() SyntheticsTestConfigVariableList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList">SyntheticsTestConfigVariableList</a>

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.monitorId"></a>

```go
func MonitorId() *f64
```

- *Type:* *f64

---

##### `OptionsList`<sup>Required</sup> <a name="OptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsList"></a>

```go
func OptionsList() SyntheticsTestOptionsListOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference">SyntheticsTestOptionsListOutputReference</a>

---

##### `RequestBasicauth`<sup>Required</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauth"></a>

```go
func RequestBasicauth() SyntheticsTestRequestBasicauthOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference">SyntheticsTestRequestBasicauthOutputReference</a>

---

##### `RequestClientCertificate`<sup>Required</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificate"></a>

```go
func RequestClientCertificate() SyntheticsTestRequestClientCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference">SyntheticsTestRequestClientCertificateOutputReference</a>

---

##### `RequestDefinition`<sup>Required</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinition"></a>

```go
func RequestDefinition() SyntheticsTestRequestDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference">SyntheticsTestRequestDefinitionOutputReference</a>

---

##### `RequestProxy`<sup>Required</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxy"></a>

```go
func RequestProxy() SyntheticsTestRequestProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference">SyntheticsTestRequestProxyOutputReference</a>

---

##### `ApiStepInput`<sup>Optional</sup> <a name="ApiStepInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStepInput"></a>

```go
func ApiStepInput() interface{}
```

- *Type:* interface{}

---

##### `AssertionInput`<sup>Optional</sup> <a name="AssertionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertionInput"></a>

```go
func AssertionInput() interface{}
```

- *Type:* interface{}

---

##### `BrowserStepInput`<sup>Optional</sup> <a name="BrowserStepInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStepInput"></a>

```go
func BrowserStepInput() interface{}
```

- *Type:* interface{}

---

##### `BrowserVariableInput`<sup>Optional</sup> <a name="BrowserVariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariableInput"></a>

```go
func BrowserVariableInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigVariableInput`<sup>Optional</sup> <a name="ConfigVariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariableInput"></a>

```go
func ConfigVariableInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIdsInput`<sup>Optional</sup> <a name="DeviceIdsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIdsInput"></a>

```go
func DeviceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsListInput`<sup>Optional</sup> <a name="OptionsListInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsListInput"></a>

```go
func OptionsListInput() SyntheticsTestOptionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---

##### `RequestBasicauthInput`<sup>Optional</sup> <a name="RequestBasicauthInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauthInput"></a>

```go
func RequestBasicauthInput() SyntheticsTestRequestBasicauth
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---

##### `RequestClientCertificateInput`<sup>Optional</sup> <a name="RequestClientCertificateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificateInput"></a>

```go
func RequestClientCertificateInput() SyntheticsTestRequestClientCertificate
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---

##### `RequestDefinitionInput`<sup>Optional</sup> <a name="RequestDefinitionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinitionInput"></a>

```go
func RequestDefinitionInput() SyntheticsTestRequestDefinition
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestProxyInput`<sup>Optional</sup> <a name="RequestProxyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxyInput"></a>

```go
func RequestProxyInput() SyntheticsTestRequestProxy
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---

##### `RequestQueryInput`<sup>Optional</sup> <a name="RequestQueryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQueryInput"></a>

```go
func RequestQueryInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SetCookieInput`<sup>Optional</sup> <a name="SetCookieInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookieInput"></a>

```go
func SetCookieInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtypeInput"></a>

```go
func SubtypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DeviceIds`<sup>Required</sup> <a name="DeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIds"></a>

```go
func DeviceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestQuery`<sup>Required</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQuery"></a>

```go
func RequestQuery() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SetCookie`<sup>Required</sup> <a name="SetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookie"></a>

```go
func SetCookie() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsTestApiStep <a name="SyntheticsTestApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStep {
	Name: *string,
	AllowFailure: interface{},
	Assertion: interface{},
	ExtractedValue: interface{},
	IsCritical: interface{},
	RequestBasicauth: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth,
	RequestClientCertificate: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate,
	RequestDefinition: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition,
	RequestHeaders: *map[string]*string,
	RequestProxy: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy,
	RequestQuery: *map[string]*string,
	Retry: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRetry,
	Subtype: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.name">Name</a></code> | <code>*string</code> | The name of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.allowFailure">AllowFailure</a></code> | <code>interface{}</code> | Determines whether or not to continue with test if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.assertion">Assertion</a></code> | <code>interface{}</code> | assertion block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.extractedValue">ExtractedValue</a></code> | <code>interface{}</code> | extracted_value block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.isCritical">IsCritical</a></code> | <code>interface{}</code> | Determines whether or not to consider the entire test as failed if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | request_basicauth block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | request_client_certificate block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | request_definition block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | Header name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | request_proxy block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestQuery">RequestQuery</a></code> | <code>*map[string]*string</code> | Query arguments name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.subtype">Subtype</a></code> | <code>*string</code> | The subtype of the Synthetic multistep API test step. Valid values are `http`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `AllowFailure`<sup>Optional</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.allowFailure"></a>

```go
AllowFailure interface{}
```

- *Type:* interface{}

Determines whether or not to continue with test if this step fails.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_failure SyntheticsTest#allow_failure}

---

##### `Assertion`<sup>Optional</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.assertion"></a>

```go
Assertion interface{}
```

- *Type:* interface{}

assertion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#assertion SyntheticsTest#assertion}

---

##### `ExtractedValue`<sup>Optional</sup> <a name="ExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.extractedValue"></a>

```go
ExtractedValue interface{}
```

- *Type:* interface{}

extracted_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#extracted_value SyntheticsTest#extracted_value}

---

##### `IsCritical`<sup>Optional</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.isCritical"></a>

```go
IsCritical interface{}
```

- *Type:* interface{}

Determines whether or not to consider the entire test as failed if this step fails.

Can be used only if `allow_failure` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_critical SyntheticsTest#is_critical}

---

##### `RequestBasicauth`<sup>Optional</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestBasicauth"></a>

```go
RequestBasicauth SyntheticsTestApiStepRequestBasicauth
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

request_basicauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}

---

##### `RequestClientCertificate`<sup>Optional</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestClientCertificate"></a>

```go
RequestClientCertificate SyntheticsTestApiStepRequestClientCertificate
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

request_client_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}

---

##### `RequestDefinition`<sup>Optional</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestDefinition"></a>

```go
RequestDefinition SyntheticsTestApiStepRequestDefinition
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

request_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_definition SyntheticsTest#request_definition}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_headers SyntheticsTest#request_headers}

---

##### `RequestProxy`<sup>Optional</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestProxy"></a>

```go
RequestProxy SyntheticsTestApiStepRequestProxy
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

request_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_proxy SyntheticsTest#request_proxy}

---

##### `RequestQuery`<sup>Optional</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestQuery"></a>

```go
RequestQuery *map[string]*string
```

- *Type:* *map[string]*string

Query arguments name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_query SyntheticsTest#request_query}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.retry"></a>

```go
Retry SyntheticsTestApiStepRetry
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#retry SyntheticsTest#retry}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.subtype"></a>

```go
Subtype *string
```

- *Type:* *string

The subtype of the Synthetic multistep API test step. Valid values are `http`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtype SyntheticsTest#subtype}

---

### SyntheticsTestApiStepAssertion <a name="SyntheticsTestApiStepAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepAssertion {
	Operator: *string,
	Type: *string,
	Property: *string,
	Target: *string,
	Targetjsonpath: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath,
	Targetxpath: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.operator">Operator</a></code> | <code>*string</code> | Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.type">Type</a></code> | <code>*string</code> | Type of assertion. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.property">Property</a></code> | <code>*string</code> | If assertion type is `header`, this is the header name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.target">Target</a></code> | <code>*string</code> | Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | targetjsonpath block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | targetxpath block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of assertion.

**Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `connection`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.property"></a>

```go
Property *string
```

- *Type:* *string

If assertion type is `header`, this is the header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#property SyntheticsTest#property}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.target"></a>

```go
Target *string
```

- *Type:* *string

Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#target SyntheticsTest#target}

---

##### `Targetjsonpath`<sup>Optional</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetjsonpath"></a>

```go
Targetjsonpath SyntheticsTestApiStepAssertionTargetjsonpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

targetjsonpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}

---

##### `Targetxpath`<sup>Optional</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetxpath"></a>

```go
Targetxpath SyntheticsTestApiStepAssertionTargetxpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

targetxpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetxpath SyntheticsTest#targetxpath}

---

### SyntheticsTestApiStepAssertionTargetjsonpath <a name="SyntheticsTestApiStepAssertionTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepAssertionTargetjsonpath {
	Jsonpath: *string,
	Operator: *string,
	Targetvalue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.jsonpath">Jsonpath</a></code> | <code>*string</code> | The JSON path to assert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.operator">Operator</a></code> | <code>*string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | Expected matching value. |

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.jsonpath"></a>

```go
Jsonpath *string
```

- *Type:* *string

The JSON path to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#jsonpath SyntheticsTest#jsonpath}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.targetvalue"></a>

```go
Targetvalue *string
```

- *Type:* *string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

### SyntheticsTestApiStepAssertionTargetxpath <a name="SyntheticsTestApiStepAssertionTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepAssertionTargetxpath {
	Operator: *string,
	Targetvalue: *string,
	Xpath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.operator">Operator</a></code> | <code>*string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | Expected matching value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.xpath">Xpath</a></code> | <code>*string</code> | The xpath to assert. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.targetvalue"></a>

```go
Targetvalue *string
```

- *Type:* *string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.xpath"></a>

```go
Xpath *string
```

- *Type:* *string

The xpath to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#xpath SyntheticsTest#xpath}

---

### SyntheticsTestApiStepExtractedValue <a name="SyntheticsTestApiStepExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepExtractedValue {
	Name: *string,
	Parser: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser,
	Type: *string,
	Field: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.parser">Parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | parser block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.type">Type</a></code> | <code>*string</code> | Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`, `local_variable`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.field">Field</a></code> | <code>*string</code> | When type is `http_header`, name of the header to use to extract the value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}.

---

##### `Parser`<sup>Required</sup> <a name="Parser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.parser"></a>

```go
Parser SyntheticsTestApiStepExtractedValueParser
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

parser block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#parser SyntheticsTest#parser}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.type"></a>

```go
Type *string
```

- *Type:* *string

Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`, `local_variable`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.field"></a>

```go
Field *string
```

- *Type:* *string

When type is `http_header`, name of the header to use to extract the value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#field SyntheticsTest#field}

---

### SyntheticsTestApiStepExtractedValueParser <a name="SyntheticsTestApiStepExtractedValueParser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepExtractedValueParser {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.type">Type</a></code> | <code>*string</code> | Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.value">Value</a></code> | <code>*string</code> | Regex or JSON path used for the parser. Not used with type `raw`. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.value"></a>

```go
Value *string
```

- *Type:* *string

Regex or JSON path used for the parser. Not used with type `raw`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

### SyntheticsTestApiStepRequestBasicauth <a name="SyntheticsTestApiStepRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRequestBasicauth {
	AccessKey: *string,
	AccessTokenUrl: *string,
	Audience: *string,
	ClientId: *string,
	ClientSecret: *string,
	Domain: *string,
	Password: *string,
	Region: *string,
	Resource: *string,
	Scope: *string,
	SecretKey: *string,
	ServiceName: *string,
	SessionToken: *string,
	TokenApiAuthentication: *string,
	Type: *string,
	Username: *string,
	Workstation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessKey">AccessKey</a></code> | <code>*string</code> | Access key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | Access token url for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.audience">Audience</a></code> | <code>*string</code> | Audience for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Client secret for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.domain">Domain</a></code> | <code>*string</code> | Domain for `ntlm` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.password">Password</a></code> | <code>*string</code> | Password for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.region">Region</a></code> | <code>*string</code> | Region for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.resource">Resource</a></code> | <code>*string</code> | Resource for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.scope">Scope</a></code> | <code>*string</code> | Scope for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.secretKey">SecretKey</a></code> | <code>*string</code> | Secret key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.serviceName">ServiceName</a></code> | <code>*string</code> | Service name for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.sessionToken">SessionToken</a></code> | <code>*string</code> | Session token for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>*string</code> | Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.type">Type</a></code> | <code>*string</code> | Type of basic authentication to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.username">Username</a></code> | <code>*string</code> | Username for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.workstation">Workstation</a></code> | <code>*string</code> | Workstation for `ntlm` authentication. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

Access key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_key SyntheticsTest#access_key}

---

##### `AccessTokenUrl`<sup>Optional</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessTokenUrl"></a>

```go
AccessTokenUrl *string
```

- *Type:* *string

Access token url for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_token_url SyntheticsTest#access_token_url}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#audience SyntheticsTest#audience}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_id SyntheticsTest#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Client secret for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_secret SyntheticsTest#client_secret}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#domain SyntheticsTest#domain}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#password SyntheticsTest#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#region SyntheticsTest#region}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Resource for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#resource SyntheticsTest#resource}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Scope for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#scope SyntheticsTest#scope}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

Secret key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secret_key SyntheticsTest#secret_key}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Service name for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service_name SyntheticsTest#service_name}

---

##### `SessionToken`<sup>Optional</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.sessionToken"></a>

```go
SessionToken *string
```

- *Type:* *string

Session token for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#session_token SyntheticsTest#session_token}

---

##### `TokenApiAuthentication`<sup>Optional</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.tokenApiAuthentication"></a>

```go
TokenApiAuthentication *string
```

- *Type:* *string

Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of basic authentication to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#username SyntheticsTest#username}

---

##### `Workstation`<sup>Optional</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.workstation"></a>

```go
Workstation *string
```

- *Type:* *string

Workstation for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#workstation SyntheticsTest#workstation}

---

### SyntheticsTestApiStepRequestClientCertificate <a name="SyntheticsTestApiStepRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRequestClientCertificate {
	Cert: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert,
	Key: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | cert block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | key block. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.cert"></a>

```go
Cert SyntheticsTestApiStepRequestClientCertificateCert
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

cert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#cert SyntheticsTest#cert}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.key"></a>

```go
Key SyntheticsTestApiStepRequestClientCertificateKey
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#key SyntheticsTest#key}

---

### SyntheticsTestApiStepRequestClientCertificateCert <a name="SyntheticsTestApiStepRequestClientCertificateCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRequestClientCertificateCert {
	Content: *string,
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.content">Content</a></code> | <code>*string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.filename">Filename</a></code> | <code>*string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.content"></a>

```go
Content *string
```

- *Type:* *string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestApiStepRequestClientCertificateKey <a name="SyntheticsTestApiStepRequestClientCertificateKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRequestClientCertificateKey {
	Content: *string,
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.content">Content</a></code> | <code>*string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.filename">Filename</a></code> | <code>*string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.content"></a>

```go
Content *string
```

- *Type:* *string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestApiStepRequestDefinition <a name="SyntheticsTestApiStepRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRequestDefinition {
	AllowInsecure: interface{},
	Body: *string,
	BodyType: *string,
	CallType: *string,
	CertificateDomains: *[]*string,
	DnsServer: *string,
	DnsServerPort: *f64,
	FollowRedirects: interface{},
	Host: *string,
	Message: *string,
	Method: *string,
	NoSavingResponseBody: interface{},
	NumberOfPackets: *f64,
	Port: *f64,
	Servername: *string,
	Service: *string,
	ShouldTrackHops: interface{},
	Timeout: *f64,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Allows loading insecure content for an HTTP test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.body">Body</a></code> | <code>*string</code> | The request body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.bodyType">BodyType</a></code> | <code>*string</code> | Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.callType">CallType</a></code> | <code>*string</code> | The type of gRPC call to perform. Valid values are `healthcheck`, `unary`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.certificateDomains">CertificateDomains</a></code> | <code>*[]*string</code> | By default, the client certificate is applied on the domain of the starting URL for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServer">DnsServer</a></code> | <code>*string</code> | DNS server to use for DNS tests (`subtype = "dns"`). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServerPort">DnsServerPort</a></code> | <code>*f64</code> | DNS server port to use for DNS tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | Determines whether or not the API HTTP test should follow redirects. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.host">Host</a></code> | <code>*string</code> | Host name to perform the test with. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.message">Message</a></code> | <code>*string</code> | For UDP and websocket tests, message to send with the request. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.method">Method</a></code> | <code>*string</code> | Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>interface{}</code> | Determines whether or not to save the response body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.numberOfPackets">NumberOfPackets</a></code> | <code>*f64</code> | Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.port">Port</a></code> | <code>*f64</code> | Port to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.servername">Servername</a></code> | <code>*string</code> | For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.service">Service</a></code> | <code>*string</code> | The gRPC service on which you want to perform the gRPC call. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>interface{}</code> | This will turn on a traceroute probe to discover all gateways along the path to the host destination. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.timeout">Timeout</a></code> | <code>*f64</code> | Timeout in seconds for the test. Defaults to `60`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.url">Url</a></code> | <code>*string</code> | The URL to send the request to. |

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Allows loading insecure content for an HTTP test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.body"></a>

```go
Body *string
```

- *Type:* *string

The request body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body SyntheticsTest#body}

---

##### `BodyType`<sup>Optional</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.bodyType"></a>

```go
BodyType *string
```

- *Type:* *string

Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body_type SyntheticsTest#body_type}

---

##### `CallType`<sup>Optional</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.callType"></a>

```go
CallType *string
```

- *Type:* *string

The type of gRPC call to perform. Valid values are `healthcheck`, `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#call_type SyntheticsTest#call_type}

---

##### `CertificateDomains`<sup>Optional</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.certificateDomains"></a>

```go
CertificateDomains *[]*string
```

- *Type:* *[]*string

By default, the client certificate is applied on the domain of the starting URL for browser tests.

If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServer"></a>

```go
DnsServer *string
```

- *Type:* *string

DNS server to use for DNS tests (`subtype = "dns"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server SyntheticsTest#dns_server}

---

##### `DnsServerPort`<sup>Optional</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServerPort"></a>

```go
DnsServerPort *f64
```

- *Type:* *f64

DNS server port to use for DNS tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.followRedirects"></a>

```go
FollowRedirects interface{}
```

- *Type:* interface{}

Determines whether or not the API HTTP test should follow redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host name to perform the test with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#host SyntheticsTest#host}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.message"></a>

```go
Message *string
```

- *Type:* *string

For UDP and websocket tests, message to send with the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.method"></a>

```go
Method *string
```

- *Type:* *string

Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field.

Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#method SyntheticsTest#method}

---

##### `NoSavingResponseBody`<sup>Optional</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.noSavingResponseBody"></a>

```go
NoSavingResponseBody interface{}
```

- *Type:* interface{}

Determines whether or not to save the response body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}

---

##### `NumberOfPackets`<sup>Optional</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.numberOfPackets"></a>

```go
NumberOfPackets *f64
```

- *Type:* *f64

Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#port SyntheticsTest#port}

---

##### `Servername`<sup>Optional</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.servername"></a>

```go
Servername *string
```

- *Type:* *string

For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#servername SyntheticsTest#servername}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.service"></a>

```go
Service *string
```

- *Type:* *string

The gRPC service on which you want to perform the gRPC call.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service SyntheticsTest#service}

---

##### `ShouldTrackHops`<sup>Optional</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.shouldTrackHops"></a>

```go
ShouldTrackHops interface{}
```

- *Type:* interface{}

This will turn on a traceroute probe to discover all gateways along the path to the host destination.

For ICMP tests (`subtype = "icmp"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Timeout in seconds for the test. Defaults to `60`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL to send the request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

### SyntheticsTestApiStepRequestProxy <a name="SyntheticsTestApiStepRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRequestProxy {
	Url: *string,
	Headers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.url">Url</a></code> | <code>*string</code> | URL of the proxy to perform the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.headers">Headers</a></code> | <code>*map[string]*string</code> | Header name and value map. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL of the proxy to perform the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#headers SyntheticsTest#headers}

---

### SyntheticsTestApiStepRetry <a name="SyntheticsTestApiStepRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestApiStepRetry {
	Count: *f64,
	Interval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.count">Count</a></code> | <code>*f64</code> | Number of retries needed to consider a location as failed before sending a notification alert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.interval">Interval</a></code> | <code>*f64</code> | Interval between a failed test and the next retry in milliseconds. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of retries needed to consider a location as failed before sending a notification alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#count SyntheticsTest#count}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Interval between a failed test and the next retry in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#interval SyntheticsTest#interval}

---

### SyntheticsTestAssertion <a name="SyntheticsTestAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestAssertion {
	Operator: *string,
	Type: *string,
	Property: *string,
	Target: *string,
	Targetjsonpath: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath,
	Targetxpath: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.operator">Operator</a></code> | <code>*string</code> | Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.type">Type</a></code> | <code>*string</code> | Type of assertion. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.property">Property</a></code> | <code>*string</code> | If assertion type is `header`, this is the header name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.target">Target</a></code> | <code>*string</code> | Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | targetjsonpath block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | targetxpath block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of assertion.

**Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `connection`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.property"></a>

```go
Property *string
```

- *Type:* *string

If assertion type is `header`, this is the header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#property SyntheticsTest#property}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.target"></a>

```go
Target *string
```

- *Type:* *string

Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#target SyntheticsTest#target}

---

##### `Targetjsonpath`<sup>Optional</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetjsonpath"></a>

```go
Targetjsonpath SyntheticsTestAssertionTargetjsonpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

targetjsonpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}

---

##### `Targetxpath`<sup>Optional</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetxpath"></a>

```go
Targetxpath SyntheticsTestAssertionTargetxpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

targetxpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetxpath SyntheticsTest#targetxpath}

---

### SyntheticsTestAssertionTargetjsonpath <a name="SyntheticsTestAssertionTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestAssertionTargetjsonpath {
	Jsonpath: *string,
	Operator: *string,
	Targetvalue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.jsonpath">Jsonpath</a></code> | <code>*string</code> | The JSON path to assert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.operator">Operator</a></code> | <code>*string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | Expected matching value. |

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.jsonpath"></a>

```go
Jsonpath *string
```

- *Type:* *string

The JSON path to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#jsonpath SyntheticsTest#jsonpath}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.targetvalue"></a>

```go
Targetvalue *string
```

- *Type:* *string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

### SyntheticsTestAssertionTargetxpath <a name="SyntheticsTestAssertionTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestAssertionTargetxpath {
	Operator: *string,
	Targetvalue: *string,
	Xpath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.operator">Operator</a></code> | <code>*string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | Expected matching value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.xpath">Xpath</a></code> | <code>*string</code> | The xpath to assert. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.targetvalue"></a>

```go
Targetvalue *string
```

- *Type:* *string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.xpath"></a>

```go
Xpath *string
```

- *Type:* *string

The xpath to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#xpath SyntheticsTest#xpath}

---

### SyntheticsTestBrowserStep <a name="SyntheticsTestBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestBrowserStep {
	Name: *string,
	Params: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestBrowserStepParams,
	Type: *string,
	AllowFailure: interface{},
	ForceElementUpdate: interface{},
	IsCritical: interface{},
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.name">Name</a></code> | <code>*string</code> | Name of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.params">Params</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.type">Type</a></code> | <code>*string</code> | Type of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.allowFailure">AllowFailure</a></code> | <code>interface{}</code> | Determines if the step should be allowed to fail. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.forceElementUpdate">ForceElementUpdate</a></code> | <code>interface{}</code> | Force update of the "element" parameter for the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.isCritical">IsCritical</a></code> | <code>interface{}</code> | Determines whether or not to consider the entire test as failed if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.timeout">Timeout</a></code> | <code>*f64</code> | Used to override the default timeout of a step. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.params"></a>

```go
Params SyntheticsTestBrowserStepParams
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

params block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#params SyntheticsTest#params}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the step.

Valid values are `assertCurrentUrl`, `assertElementAttribute`, `assertElementContent`, `assertElementPresent`, `assertEmail`, `assertFileDownload`, `assertFromJavascript`, `assertPageContains`, `assertPageLacks`, `click`, `extractFromJavascript`, `extractVariable`, `goToEmailLink`, `goToUrl`, `goToUrlAndMeasureTti`, `hover`, `playSubTest`, `pressKey`, `refresh`, `runApiTest`, `scroll`, `selectOption`, `typeText`, `uploadFiles`, `wait`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `AllowFailure`<sup>Optional</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.allowFailure"></a>

```go
AllowFailure interface{}
```

- *Type:* interface{}

Determines if the step should be allowed to fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_failure SyntheticsTest#allow_failure}

---

##### `ForceElementUpdate`<sup>Optional</sup> <a name="ForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.forceElementUpdate"></a>

```go
ForceElementUpdate interface{}
```

- *Type:* interface{}

Force update of the "element" parameter for the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#force_element_update SyntheticsTest#force_element_update}

---

##### `IsCritical`<sup>Optional</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.isCritical"></a>

```go
IsCritical interface{}
```

- *Type:* interface{}

Determines whether or not to consider the entire test as failed if this step fails.

Can be used only if `allow_failure` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_critical SyntheticsTest#is_critical}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Used to override the default timeout of a step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

### SyntheticsTestBrowserStepParams <a name="SyntheticsTestBrowserStepParams" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestBrowserStepParams {
	Attribute: *string,
	Check: *string,
	ClickType: *string,
	Code: *string,
	Delay: *f64,
	Element: *string,
	ElementUserLocator: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator,
	Email: *string,
	File: *string,
	Files: *string,
	Modifiers: *[]*string,
	PlayingTabId: *string,
	Request: *string,
	SubtestPublicId: *string,
	Value: *string,
	Variable: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable,
	WithClick: interface{},
	X: *f64,
	Y: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.attribute">Attribute</a></code> | <code>*string</code> | Name of the attribute to use for an "assert attribute" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.check">Check</a></code> | <code>*string</code> | Check type to use for an assertion step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.clickType">ClickType</a></code> | <code>*string</code> | Type of click to use for a "click" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.code">Code</a></code> | <code>*string</code> | Javascript code to use for the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.delay">Delay</a></code> | <code>*f64</code> | Delay between each key stroke for a "type test" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.element">Element</a></code> | <code>*string</code> | Element to use for the step, json encoded string. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.elementUserLocator">ElementUserLocator</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | element_user_locator block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.email">Email</a></code> | <code>*string</code> | Details of the email for an "assert email" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.file">File</a></code> | <code>*string</code> | For an "assert download" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.files">Files</a></code> | <code>*string</code> | Details of the files for an "upload files" step, json encoded string. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.modifiers">Modifiers</a></code> | <code>*[]*string</code> | Modifier to use for a "press key" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.playingTabId">PlayingTabId</a></code> | <code>*string</code> | ID of the tab to play the subtest. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.request">Request</a></code> | <code>*string</code> | Request for an API step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.subtestPublicId">SubtestPublicId</a></code> | <code>*string</code> | ID of the Synthetics test to use as subtest. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.value">Value</a></code> | <code>*string</code> | Value of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.withClick">WithClick</a></code> | <code>interface{}</code> | For "file upload" steps. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.x">X</a></code> | <code>*f64</code> | X coordinates for a "scroll step". |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.y">Y</a></code> | <code>*f64</code> | Y coordinates for a "scroll step". |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Name of the attribute to use for an "assert attribute" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#attribute SyntheticsTest#attribute}

---

##### `Check`<sup>Optional</sup> <a name="Check" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.check"></a>

```go
Check *string
```

- *Type:* *string

Check type to use for an assertion step.

Valid values are `equals`, `notEquals`, `contains`, `notContains`, `startsWith`, `notStartsWith`, `greater`, `lower`, `greaterEquals`, `lowerEquals`, `matchRegex`, `between`, `isEmpty`, `notIsEmpty`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#check SyntheticsTest#check}

---

##### `ClickType`<sup>Optional</sup> <a name="ClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.clickType"></a>

```go
ClickType *string
```

- *Type:* *string

Type of click to use for a "click" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#click_type SyntheticsTest#click_type}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.code"></a>

```go
Code *string
```

- *Type:* *string

Javascript code to use for the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#code SyntheticsTest#code}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.delay"></a>

```go
Delay *f64
```

- *Type:* *f64

Delay between each key stroke for a "type test" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#delay SyntheticsTest#delay}

---

##### `Element`<sup>Optional</sup> <a name="Element" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.element"></a>

```go
Element *string
```

- *Type:* *string

Element to use for the step, json encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#element SyntheticsTest#element}

---

##### `ElementUserLocator`<sup>Optional</sup> <a name="ElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.elementUserLocator"></a>

```go
ElementUserLocator SyntheticsTestBrowserStepParamsElementUserLocator
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

element_user_locator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#element_user_locator SyntheticsTest#element_user_locator}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.email"></a>

```go
Email *string
```

- *Type:* *string

Details of the email for an "assert email" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#email SyntheticsTest#email}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.file"></a>

```go
File *string
```

- *Type:* *string

For an "assert download" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#file SyntheticsTest#file}

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.files"></a>

```go
Files *string
```

- *Type:* *string

Details of the files for an "upload files" step, json encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#files SyntheticsTest#files}

---

##### `Modifiers`<sup>Optional</sup> <a name="Modifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.modifiers"></a>

```go
Modifiers *[]*string
```

- *Type:* *[]*string

Modifier to use for a "press key" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#modifiers SyntheticsTest#modifiers}

---

##### `PlayingTabId`<sup>Optional</sup> <a name="PlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.playingTabId"></a>

```go
PlayingTabId *string
```

- *Type:* *string

ID of the tab to play the subtest.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#playing_tab_id SyntheticsTest#playing_tab_id}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.request"></a>

```go
Request *string
```

- *Type:* *string

Request for an API step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request SyntheticsTest#request}

---

##### `SubtestPublicId`<sup>Optional</sup> <a name="SubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.subtestPublicId"></a>

```go
SubtestPublicId *string
```

- *Type:* *string

ID of the Synthetics test to use as subtest.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtest_public_id SyntheticsTest#subtest_public_id}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.variable"></a>

```go
Variable SyntheticsTestBrowserStepParamsVariable
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#variable SyntheticsTest#variable}

---

##### `WithClick`<sup>Optional</sup> <a name="WithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.withClick"></a>

```go
WithClick interface{}
```

- *Type:* interface{}

For "file upload" steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#with_click SyntheticsTest#with_click}

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.x"></a>

```go
X *f64
```

- *Type:* *f64

X coordinates for a "scroll step".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#x SyntheticsTest#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.y"></a>

```go
Y *f64
```

- *Type:* *f64

Y coordinates for a "scroll step".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#y SyntheticsTest#y}

---

### SyntheticsTestBrowserStepParamsElementUserLocator <a name="SyntheticsTestBrowserStepParamsElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestBrowserStepParamsElementUserLocator {
	Value: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue,
	FailTestOnCannotLocate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.value">Value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | value block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.failTestOnCannotLocate">FailTestOnCannotLocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.value"></a>

```go
Value SyntheticsTestBrowserStepParamsElementUserLocatorValue
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

##### `FailTestOnCannotLocate`<sup>Optional</sup> <a name="FailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.failTestOnCannotLocate"></a>

```go
FailTestOnCannotLocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}.

---

### SyntheticsTestBrowserStepParamsElementUserLocatorValue <a name="SyntheticsTestBrowserStepParamsElementUserLocatorValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestBrowserStepParamsElementUserLocatorValue {
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}.

---

### SyntheticsTestBrowserStepParamsVariable <a name="SyntheticsTestBrowserStepParamsVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestBrowserStepParamsVariable {
	Example: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.example">Example</a></code> | <code>*string</code> | Example of the extracted variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.name">Name</a></code> | <code>*string</code> | Name of the extracted variable. |

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.example"></a>

```go
Example *string
```

- *Type:* *string

Example of the extracted variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the extracted variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

### SyntheticsTestBrowserVariable <a name="SyntheticsTestBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestBrowserVariable {
	Name: *string,
	Type: *string,
	Example: *string,
	Id: *string,
	Pattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.name">Name</a></code> | <code>*string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.type">Type</a></code> | <code>*string</code> | Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.example">Example</a></code> | <code>*string</code> | Example for the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.id">Id</a></code> | <code>*string</code> | ID of the global variable to use. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern of the variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.example"></a>

```go
Example *string
```

- *Type:* *string

Example for the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the global variable to use.

This is actually only used (and required) in the case of using a variable of type `global`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#pattern SyntheticsTest#pattern}

---

### SyntheticsTestConfig <a name="SyntheticsTestConfig" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Locations: *[]*string,
	Name: *string,
	Status: *string,
	Type: *string,
	ApiStep: interface{},
	Assertion: interface{},
	BrowserStep: interface{},
	BrowserVariable: interface{},
	ConfigVariable: interface{},
	DeviceIds: *[]*string,
	Id: *string,
	Message: *string,
	OptionsList: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestOptionsList,
	RequestBasicauth: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestRequestBasicauth,
	RequestClientCertificate: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestRequestClientCertificate,
	RequestDefinition: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestRequestDefinition,
	RequestHeaders: *map[string]*string,
	RequestProxy: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestRequestProxy,
	RequestQuery: *map[string]*string,
	SetCookie: *string,
	Subtype: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.locations">Locations</a></code> | <code>*[]*string</code> | Array of locations used to run the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.name">Name</a></code> | <code>*string</code> | Name of Datadog synthetics test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.status">Status</a></code> | <code>*string</code> | Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.type">Type</a></code> | <code>*string</code> | Synthetics test type. Valid values are `api`, `browser`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.apiStep">ApiStep</a></code> | <code>interface{}</code> | api_step block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.assertion">Assertion</a></code> | <code>interface{}</code> | assertion block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserStep">BrowserStep</a></code> | <code>interface{}</code> | browser_step block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserVariable">BrowserVariable</a></code> | <code>interface{}</code> | browser_variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.configVariable">ConfigVariable</a></code> | <code>interface{}</code> | config_variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.deviceIds">DeviceIds</a></code> | <code>*[]*string</code> | Required if `type = "browser"`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.message">Message</a></code> | <code>*string</code> | A message to include with notifications for this synthetics test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.optionsList">OptionsList</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | options_list block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | request_basicauth block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | request_client_certificate block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | request_definition block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | Header name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | request_proxy block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestQuery">RequestQuery</a></code> | <code>*map[string]*string</code> | Query arguments name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.setCookie">SetCookie</a></code> | <code>*string</code> | Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.subtype">Subtype</a></code> | <code>*string</code> | The subtype of the Synthetic API test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of tags to associate with your synthetics test. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

Array of locations used to run the test.

Refer to [the Datadog Synthetics location data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/synthetics_locations) to retrieve the list of locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#locations SyntheticsTest#locations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of Datadog synthetics test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#status SyntheticsTest#status}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Synthetics test type. Valid values are `api`, `browser`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `ApiStep`<sup>Optional</sup> <a name="ApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.apiStep"></a>

```go
ApiStep interface{}
```

- *Type:* interface{}

api_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#api_step SyntheticsTest#api_step}

---

##### `Assertion`<sup>Optional</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.assertion"></a>

```go
Assertion interface{}
```

- *Type:* interface{}

assertion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#assertion SyntheticsTest#assertion}

---

##### `BrowserStep`<sup>Optional</sup> <a name="BrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserStep"></a>

```go
BrowserStep interface{}
```

- *Type:* interface{}

browser_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#browser_step SyntheticsTest#browser_step}

---

##### `BrowserVariable`<sup>Optional</sup> <a name="BrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserVariable"></a>

```go
BrowserVariable interface{}
```

- *Type:* interface{}

browser_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#browser_variable SyntheticsTest#browser_variable}

---

##### `ConfigVariable`<sup>Optional</sup> <a name="ConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.configVariable"></a>

```go
ConfigVariable interface{}
```

- *Type:* interface{}

config_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#config_variable SyntheticsTest#config_variable}

---

##### `DeviceIds`<sup>Optional</sup> <a name="DeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.deviceIds"></a>

```go
DeviceIds *[]*string
```

- *Type:* *[]*string

Required if `type = "browser"`.

Array with the different device IDs used to run the test. Valid values are `laptop_large`, `tablet`, `mobile_small`, `chrome.laptop_large`, `chrome.tablet`, `chrome.mobile_small`, `firefox.laptop_large`, `firefox.tablet`, `firefox.mobile_small`, `edge.laptop_large`, `edge.tablet`, `edge.mobile_small`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#device_ids SyntheticsTest#device_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

A message to include with notifications for this synthetics test.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `OptionsList`<sup>Optional</sup> <a name="OptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.optionsList"></a>

```go
OptionsList SyntheticsTestOptionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

options_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#options_list SyntheticsTest#options_list}

---

##### `RequestBasicauth`<sup>Optional</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestBasicauth"></a>

```go
RequestBasicauth SyntheticsTestRequestBasicauth
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

request_basicauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}

---

##### `RequestClientCertificate`<sup>Optional</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestClientCertificate"></a>

```go
RequestClientCertificate SyntheticsTestRequestClientCertificate
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

request_client_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}

---

##### `RequestDefinition`<sup>Optional</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestDefinition"></a>

```go
RequestDefinition SyntheticsTestRequestDefinition
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

request_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_definition SyntheticsTest#request_definition}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_headers SyntheticsTest#request_headers}

---

##### `RequestProxy`<sup>Optional</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestProxy"></a>

```go
RequestProxy SyntheticsTestRequestProxy
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

request_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_proxy SyntheticsTest#request_proxy}

---

##### `RequestQuery`<sup>Optional</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestQuery"></a>

```go
RequestQuery *map[string]*string
```

- *Type:* *map[string]*string

Query arguments name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_query SyntheticsTest#request_query}

---

##### `SetCookie`<sup>Optional</sup> <a name="SetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.setCookie"></a>

```go
SetCookie *string
```

- *Type:* *string

Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#set_cookie SyntheticsTest#set_cookie}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.subtype"></a>

```go
Subtype *string
```

- *Type:* *string

The subtype of the Synthetic API test.

Defaults to `http`. Valid values are `http`, `ssl`, `tcp`, `dns`, `multi`, `icmp`, `udp`, `websocket`, `grpc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtype SyntheticsTest#subtype}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of tags to associate with your synthetics test.

This can help you categorize and filter tests in the manage synthetics page of the UI. Default is an empty list (`[]`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#tags SyntheticsTest#tags}

---

### SyntheticsTestConfigVariable <a name="SyntheticsTestConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestConfigVariable {
	Name: *string,
	Type: *string,
	Example: *string,
	Id: *string,
	Pattern: *string,
	Secure: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.name">Name</a></code> | <code>*string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.type">Type</a></code> | <code>*string</code> | Type of test configuration variable. Valid values are `global`, `text`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.example">Example</a></code> | <code>*string</code> | Example for the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.id">Id</a></code> | <code>*string</code> | When type = `global`, ID of the global variable to use. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.secure">Secure</a></code> | <code>interface{}</code> | Whether the value of this variable will be obfuscated in test results. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of test configuration variable. Valid values are `global`, `text`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.example"></a>

```go
Example *string
```

- *Type:* *string

Example for the variable.

This value is not returned by the api when `secure = true`. Avoid drift by only making updates to this value from within Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.id"></a>

```go
Id *string
```

- *Type:* *string

When type = `global`, ID of the global variable to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern of the variable.

This value is not returned by the api when `secure = true`. Avoid drift by only making updates to this value from within Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#pattern SyntheticsTest#pattern}

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.secure"></a>

```go
Secure interface{}
```

- *Type:* interface{}

Whether the value of this variable will be obfuscated in test results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secure SyntheticsTest#secure}

---

### SyntheticsTestOptionsList <a name="SyntheticsTestOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestOptionsList {
	TickEvery: *f64,
	AcceptSelfSigned: interface{},
	AllowInsecure: interface{},
	CheckCertificateRevocation: interface{},
	Ci: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestOptionsListCi,
	DisableCors: interface{},
	DisableCsp: interface{},
	FollowRedirects: interface{},
	HttpVersion: *string,
	IgnoreServerCertificateError: interface{},
	InitialNavigationTimeout: *f64,
	MinFailureDuration: *f64,
	MinLocationFailed: *f64,
	MonitorName: *string,
	MonitorOptions: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions,
	MonitorPriority: *f64,
	NoScreenshot: interface{},
	RestrictedRoles: *[]*string,
	Retry: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestOptionsListRetry,
	RumSettings: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.tickEvery">TickEvery</a></code> | <code>*f64</code> | How often the test should run (in seconds). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.acceptSelfSigned">AcceptSelfSigned</a></code> | <code>interface{}</code> | For SSL test, whether or not the test should allow self signed certificates. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Allows loading insecure content for an HTTP test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.checkCertificateRevocation">CheckCertificateRevocation</a></code> | <code>interface{}</code> | For SSL test, whether or not the test should fail on revoked certificate in stapled OCSP. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ci">Ci</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | ci block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCors">DisableCors</a></code> | <code>interface{}</code> | Disable Cross-Origin Resource Sharing for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCsp">DisableCsp</a></code> | <code>interface{}</code> | Disable Content Security Policy for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | Determines whether or not the API HTTP test should follow redirects. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.httpVersion">HttpVersion</a></code> | <code>*string</code> | HTTP version to use for a Synthetics API test. Valid values are `http1`, `http2`, `any`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ignoreServerCertificateError">IgnoreServerCertificateError</a></code> | <code>interface{}</code> | Ignore server certificate error. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.initialNavigationTimeout">InitialNavigationTimeout</a></code> | <code>*f64</code> | Timeout before declaring the initial step as failed (in seconds) for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minFailureDuration">MinFailureDuration</a></code> | <code>*f64</code> | Minimum amount of time in failure required to trigger an alert. Default is `0`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minLocationFailed">MinLocationFailed</a></code> | <code>*f64</code> | Minimum number of locations in failure required to trigger an alert. Default is `1`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorName">MonitorName</a></code> | <code>*string</code> | The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | monitor_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorPriority">MonitorPriority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.noScreenshot">NoScreenshot</a></code> | <code>interface{}</code> | Prevents saving screenshots of the steps. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.restrictedRoles">RestrictedRoles</a></code> | <code>*[]*string</code> | A list of role identifiers pulled from the Roles API to restrict read and write access. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.rumSettings">RumSettings</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | rum_settings block. |

---

##### `TickEvery`<sup>Required</sup> <a name="TickEvery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.tickEvery"></a>

```go
TickEvery *f64
```

- *Type:* *f64

How often the test should run (in seconds).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#tick_every SyntheticsTest#tick_every}

---

##### `AcceptSelfSigned`<sup>Optional</sup> <a name="AcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.acceptSelfSigned"></a>

```go
AcceptSelfSigned interface{}
```

- *Type:* interface{}

For SSL test, whether or not the test should allow self signed certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#accept_self_signed SyntheticsTest#accept_self_signed}

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Allows loading insecure content for an HTTP test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}

---

##### `CheckCertificateRevocation`<sup>Optional</sup> <a name="CheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.checkCertificateRevocation"></a>

```go
CheckCertificateRevocation interface{}
```

- *Type:* interface{}

For SSL test, whether or not the test should fail on revoked certificate in stapled OCSP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#check_certificate_revocation SyntheticsTest#check_certificate_revocation}

---

##### `Ci`<sup>Optional</sup> <a name="Ci" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ci"></a>

```go
Ci SyntheticsTestOptionsListCi
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

ci block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#ci SyntheticsTest#ci}

---

##### `DisableCors`<sup>Optional</sup> <a name="DisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCors"></a>

```go
DisableCors interface{}
```

- *Type:* interface{}

Disable Cross-Origin Resource Sharing for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#disable_cors SyntheticsTest#disable_cors}

---

##### `DisableCsp`<sup>Optional</sup> <a name="DisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCsp"></a>

```go
DisableCsp interface{}
```

- *Type:* interface{}

Disable Content Security Policy for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#disable_csp SyntheticsTest#disable_csp}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.followRedirects"></a>

```go
FollowRedirects interface{}
```

- *Type:* interface{}

Determines whether or not the API HTTP test should follow redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}

---

##### `HttpVersion`<sup>Optional</sup> <a name="HttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.httpVersion"></a>

```go
HttpVersion *string
```

- *Type:* *string

HTTP version to use for a Synthetics API test. Valid values are `http1`, `http2`, `any`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#http_version SyntheticsTest#http_version}

---

##### `IgnoreServerCertificateError`<sup>Optional</sup> <a name="IgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ignoreServerCertificateError"></a>

```go
IgnoreServerCertificateError interface{}
```

- *Type:* interface{}

Ignore server certificate error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#ignore_server_certificate_error SyntheticsTest#ignore_server_certificate_error}

---

##### `InitialNavigationTimeout`<sup>Optional</sup> <a name="InitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.initialNavigationTimeout"></a>

```go
InitialNavigationTimeout *f64
```

- *Type:* *f64

Timeout before declaring the initial step as failed (in seconds) for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#initial_navigation_timeout SyntheticsTest#initial_navigation_timeout}

---

##### `MinFailureDuration`<sup>Optional</sup> <a name="MinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minFailureDuration"></a>

```go
MinFailureDuration *f64
```

- *Type:* *f64

Minimum amount of time in failure required to trigger an alert. Default is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#min_failure_duration SyntheticsTest#min_failure_duration}

---

##### `MinLocationFailed`<sup>Optional</sup> <a name="MinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minLocationFailed"></a>

```go
MinLocationFailed *f64
```

- *Type:* *f64

Minimum number of locations in failure required to trigger an alert. Default is `1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#min_location_failed SyntheticsTest#min_location_failed}

---

##### `MonitorName`<sup>Optional</sup> <a name="MonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorName"></a>

```go
MonitorName *string
```

- *Type:* *string

The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_name SyntheticsTest#monitor_name}

---

##### `MonitorOptions`<sup>Optional</sup> <a name="MonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorOptions"></a>

```go
MonitorOptions SyntheticsTestOptionsListMonitorOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

monitor_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_options SyntheticsTest#monitor_options}

---

##### `MonitorPriority`<sup>Optional</sup> <a name="MonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorPriority"></a>

```go
MonitorPriority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}.

---

##### `NoScreenshot`<sup>Optional</sup> <a name="NoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.noScreenshot"></a>

```go
NoScreenshot interface{}
```

- *Type:* interface{}

Prevents saving screenshots of the steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}

---

##### `RestrictedRoles`<sup>Optional</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.restrictedRoles"></a>

```go
RestrictedRoles *[]*string
```

- *Type:* *[]*string

A list of role identifiers pulled from the Roles API to restrict read and write access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#restricted_roles SyntheticsTest#restricted_roles}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.retry"></a>

```go
Retry SyntheticsTestOptionsListRetry
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#retry SyntheticsTest#retry}

---

##### `RumSettings`<sup>Optional</sup> <a name="RumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.rumSettings"></a>

```go
RumSettings SyntheticsTestOptionsListRumSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

rum_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#rum_settings SyntheticsTest#rum_settings}

---

### SyntheticsTestOptionsListCi <a name="SyntheticsTestOptionsListCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestOptionsListCi {
	ExecutionRule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.property.executionRule">ExecutionRule</a></code> | <code>*string</code> | Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`. |

---

##### `ExecutionRule`<sup>Optional</sup> <a name="ExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.property.executionRule"></a>

```go
ExecutionRule *string
```

- *Type:* *string

Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#execution_rule SyntheticsTest#execution_rule}

---

### SyntheticsTestOptionsListMonitorOptions <a name="SyntheticsTestOptionsListMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestOptionsListMonitorOptions {
	RenotifyInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.property.renotifyInterval">RenotifyInterval</a></code> | <code>*f64</code> | Specify a renotification frequency. |

---

##### `RenotifyInterval`<sup>Optional</sup> <a name="RenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.property.renotifyInterval"></a>

```go
RenotifyInterval *f64
```

- *Type:* *f64

Specify a renotification frequency.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#renotify_interval SyntheticsTest#renotify_interval}

---

### SyntheticsTestOptionsListRetry <a name="SyntheticsTestOptionsListRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestOptionsListRetry {
	Count: *f64,
	Interval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.count">Count</a></code> | <code>*f64</code> | Number of retries needed to consider a location as failed before sending a notification alert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.interval">Interval</a></code> | <code>*f64</code> | Interval between a failed test and the next retry in milliseconds. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of retries needed to consider a location as failed before sending a notification alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#count SyntheticsTest#count}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Interval between a failed test and the next retry in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#interval SyntheticsTest#interval}

---

### SyntheticsTestOptionsListRumSettings <a name="SyntheticsTestOptionsListRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestOptionsListRumSettings {
	IsEnabled: interface{},
	ApplicationId: *string,
	ClientTokenId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Determines whether RUM data is collected during test runs. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.applicationId">ApplicationId</a></code> | <code>*string</code> | RUM application ID used to collect RUM data for the browser test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.clientTokenId">ClientTokenId</a></code> | <code>*f64</code> | RUM application API key ID used to collect RUM data for the browser test. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Determines whether RUM data is collected during test runs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_enabled SyntheticsTest#is_enabled}

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

RUM application ID used to collect RUM data for the browser test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#application_id SyntheticsTest#application_id}

---

##### `ClientTokenId`<sup>Optional</sup> <a name="ClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.clientTokenId"></a>

```go
ClientTokenId *f64
```

- *Type:* *f64

RUM application API key ID used to collect RUM data for the browser test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_token_id SyntheticsTest#client_token_id}

---

### SyntheticsTestRequestBasicauth <a name="SyntheticsTestRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestRequestBasicauth {
	AccessKey: *string,
	AccessTokenUrl: *string,
	Audience: *string,
	ClientId: *string,
	ClientSecret: *string,
	Domain: *string,
	Password: *string,
	Region: *string,
	Resource: *string,
	Scope: *string,
	SecretKey: *string,
	ServiceName: *string,
	SessionToken: *string,
	TokenApiAuthentication: *string,
	Type: *string,
	Username: *string,
	Workstation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessKey">AccessKey</a></code> | <code>*string</code> | Access key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | Access token url for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.audience">Audience</a></code> | <code>*string</code> | Audience for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Client secret for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.domain">Domain</a></code> | <code>*string</code> | Domain for `ntlm` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.password">Password</a></code> | <code>*string</code> | Password for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.region">Region</a></code> | <code>*string</code> | Region for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.resource">Resource</a></code> | <code>*string</code> | Resource for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.scope">Scope</a></code> | <code>*string</code> | Scope for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.secretKey">SecretKey</a></code> | <code>*string</code> | Secret key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.serviceName">ServiceName</a></code> | <code>*string</code> | Service name for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.sessionToken">SessionToken</a></code> | <code>*string</code> | Session token for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>*string</code> | Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.type">Type</a></code> | <code>*string</code> | Type of basic authentication to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.username">Username</a></code> | <code>*string</code> | Username for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.workstation">Workstation</a></code> | <code>*string</code> | Workstation for `ntlm` authentication. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

Access key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_key SyntheticsTest#access_key}

---

##### `AccessTokenUrl`<sup>Optional</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessTokenUrl"></a>

```go
AccessTokenUrl *string
```

- *Type:* *string

Access token url for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_token_url SyntheticsTest#access_token_url}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#audience SyntheticsTest#audience}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_id SyntheticsTest#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Client secret for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_secret SyntheticsTest#client_secret}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#domain SyntheticsTest#domain}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#password SyntheticsTest#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#region SyntheticsTest#region}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Resource for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#resource SyntheticsTest#resource}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Scope for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#scope SyntheticsTest#scope}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

Secret key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secret_key SyntheticsTest#secret_key}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Service name for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service_name SyntheticsTest#service_name}

---

##### `SessionToken`<sup>Optional</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.sessionToken"></a>

```go
SessionToken *string
```

- *Type:* *string

Session token for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#session_token SyntheticsTest#session_token}

---

##### `TokenApiAuthentication`<sup>Optional</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.tokenApiAuthentication"></a>

```go
TokenApiAuthentication *string
```

- *Type:* *string

Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of basic authentication to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#username SyntheticsTest#username}

---

##### `Workstation`<sup>Optional</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.workstation"></a>

```go
Workstation *string
```

- *Type:* *string

Workstation for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#workstation SyntheticsTest#workstation}

---

### SyntheticsTestRequestClientCertificate <a name="SyntheticsTestRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestRequestClientCertificate {
	Cert: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert,
	Key: github.com/cdktf/cdktf-provider-datadog-go/datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | cert block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | key block. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.cert"></a>

```go
Cert SyntheticsTestRequestClientCertificateCert
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

cert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#cert SyntheticsTest#cert}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.key"></a>

```go
Key SyntheticsTestRequestClientCertificateKey
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#key SyntheticsTest#key}

---

### SyntheticsTestRequestClientCertificateCert <a name="SyntheticsTestRequestClientCertificateCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestRequestClientCertificateCert {
	Content: *string,
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.content">Content</a></code> | <code>*string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.filename">Filename</a></code> | <code>*string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.content"></a>

```go
Content *string
```

- *Type:* *string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestRequestClientCertificateKey <a name="SyntheticsTestRequestClientCertificateKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestRequestClientCertificateKey {
	Content: *string,
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.content">Content</a></code> | <code>*string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.filename">Filename</a></code> | <code>*string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.content"></a>

```go
Content *string
```

- *Type:* *string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestRequestDefinition <a name="SyntheticsTestRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestRequestDefinition {
	Body: *string,
	BodyType: *string,
	CallType: *string,
	CertificateDomains: *[]*string,
	DnsServer: *string,
	DnsServerPort: *f64,
	Host: *string,
	Message: *string,
	Method: *string,
	NoSavingResponseBody: interface{},
	NumberOfPackets: *f64,
	Port: *f64,
	Servername: *string,
	Service: *string,
	ShouldTrackHops: interface{},
	Timeout: *f64,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.body">Body</a></code> | <code>*string</code> | The request body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.bodyType">BodyType</a></code> | <code>*string</code> | Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.callType">CallType</a></code> | <code>*string</code> | The type of gRPC call to perform. Valid values are `healthcheck`, `unary`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.certificateDomains">CertificateDomains</a></code> | <code>*[]*string</code> | By default, the client certificate is applied on the domain of the starting URL for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServer">DnsServer</a></code> | <code>*string</code> | DNS server to use for DNS tests (`subtype = "dns"`). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServerPort">DnsServerPort</a></code> | <code>*f64</code> | DNS server port to use for DNS tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.host">Host</a></code> | <code>*string</code> | Host name to perform the test with. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.message">Message</a></code> | <code>*string</code> | For UDP and websocket tests, message to send with the request. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.method">Method</a></code> | <code>*string</code> | Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>interface{}</code> | Determines whether or not to save the response body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.numberOfPackets">NumberOfPackets</a></code> | <code>*f64</code> | Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.port">Port</a></code> | <code>*f64</code> | Port to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.servername">Servername</a></code> | <code>*string</code> | For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.service">Service</a></code> | <code>*string</code> | The gRPC service on which you want to perform the gRPC call. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>interface{}</code> | This will turn on a traceroute probe to discover all gateways along the path to the host destination. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.timeout">Timeout</a></code> | <code>*f64</code> | Timeout in seconds for the test. Defaults to `60`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.url">Url</a></code> | <code>*string</code> | The URL to send the request to. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.body"></a>

```go
Body *string
```

- *Type:* *string

The request body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body SyntheticsTest#body}

---

##### `BodyType`<sup>Optional</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.bodyType"></a>

```go
BodyType *string
```

- *Type:* *string

Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body_type SyntheticsTest#body_type}

---

##### `CallType`<sup>Optional</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.callType"></a>

```go
CallType *string
```

- *Type:* *string

The type of gRPC call to perform. Valid values are `healthcheck`, `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#call_type SyntheticsTest#call_type}

---

##### `CertificateDomains`<sup>Optional</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.certificateDomains"></a>

```go
CertificateDomains *[]*string
```

- *Type:* *[]*string

By default, the client certificate is applied on the domain of the starting URL for browser tests.

If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServer"></a>

```go
DnsServer *string
```

- *Type:* *string

DNS server to use for DNS tests (`subtype = "dns"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server SyntheticsTest#dns_server}

---

##### `DnsServerPort`<sup>Optional</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServerPort"></a>

```go
DnsServerPort *f64
```

- *Type:* *f64

DNS server port to use for DNS tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host name to perform the test with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#host SyntheticsTest#host}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.message"></a>

```go
Message *string
```

- *Type:* *string

For UDP and websocket tests, message to send with the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.method"></a>

```go
Method *string
```

- *Type:* *string

Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field.

Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#method SyntheticsTest#method}

---

##### `NoSavingResponseBody`<sup>Optional</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.noSavingResponseBody"></a>

```go
NoSavingResponseBody interface{}
```

- *Type:* interface{}

Determines whether or not to save the response body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}

---

##### `NumberOfPackets`<sup>Optional</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.numberOfPackets"></a>

```go
NumberOfPackets *f64
```

- *Type:* *f64

Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#port SyntheticsTest#port}

---

##### `Servername`<sup>Optional</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.servername"></a>

```go
Servername *string
```

- *Type:* *string

For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#servername SyntheticsTest#servername}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.service"></a>

```go
Service *string
```

- *Type:* *string

The gRPC service on which you want to perform the gRPC call.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service SyntheticsTest#service}

---

##### `ShouldTrackHops`<sup>Optional</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.shouldTrackHops"></a>

```go
ShouldTrackHops interface{}
```

- *Type:* interface{}

This will turn on a traceroute probe to discover all gateways along the path to the host destination.

For ICMP tests (`subtype = "icmp"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Timeout in seconds for the test. Defaults to `60`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL to send the request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

### SyntheticsTestRequestProxy <a name="SyntheticsTestRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

&syntheticstest.SyntheticsTestRequestProxy {
	Url: *string,
	Headers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.url">Url</a></code> | <code>*string</code> | URL of the proxy to perform the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.headers">Headers</a></code> | <code>*map[string]*string</code> | Header name and value map. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL of the proxy to perform the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#headers SyntheticsTest#headers}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsTestApiStepAssertionList <a name="SyntheticsTestApiStepAssertionList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepAssertionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestApiStepAssertionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get"></a>

```go
func Get(index *f64) SyntheticsTestApiStepAssertionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestApiStepAssertionOutputReference <a name="SyntheticsTestApiStepAssertionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepAssertionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestApiStepAssertionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath">PutTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath">PutTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetjsonpath">ResetTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetxpath">ResetTargetxpath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetjsonpath` <a name="PutTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath"></a>

```go
func PutTargetjsonpath(value SyntheticsTestApiStepAssertionTargetjsonpath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---

##### `PutTargetxpath` <a name="PutTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath"></a>

```go
func PutTargetxpath(value SyntheticsTestApiStepAssertionTargetxpath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetProperty"></a>

```go
func ResetProperty()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTargetjsonpath` <a name="ResetTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetjsonpath"></a>

```go
func ResetTargetjsonpath()
```

##### `ResetTargetxpath` <a name="ResetTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetxpath"></a>

```go
func ResetTargetxpath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference">SyntheticsTestApiStepAssertionTargetjsonpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference">SyntheticsTestApiStepAssertionTargetxpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.propertyInput">PropertyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpathInput">TargetjsonpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpathInput">TargetxpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.property">Property</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targetjsonpath`<sup>Required</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpath"></a>

```go
func Targetjsonpath() SyntheticsTestApiStepAssertionTargetjsonpathOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference">SyntheticsTestApiStepAssertionTargetjsonpathOutputReference</a>

---

##### `Targetxpath`<sup>Required</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpath"></a>

```go
func Targetxpath() SyntheticsTestApiStepAssertionTargetxpathOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference">SyntheticsTestApiStepAssertionTargetxpathOutputReference</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.propertyInput"></a>

```go
func PropertyInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TargetjsonpathInput`<sup>Optional</sup> <a name="TargetjsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpathInput"></a>

```go
func TargetjsonpathInput() SyntheticsTestApiStepAssertionTargetjsonpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---

##### `TargetxpathInput`<sup>Optional</sup> <a name="TargetxpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpathInput"></a>

```go
func TargetxpathInput() SyntheticsTestApiStepAssertionTargetxpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.property"></a>

```go
func Property() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestApiStepAssertionTargetjsonpathOutputReference <a name="SyntheticsTestApiStepAssertionTargetjsonpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepAssertionTargetjsonpathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepAssertionTargetjsonpathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpathInput">JsonpathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpath">Jsonpath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonpathInput`<sup>Optional</sup> <a name="JsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpathInput"></a>

```go
func JsonpathInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalueInput"></a>

```go
func TargetvalueInput() *string
```

- *Type:* *string

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpath"></a>

```go
func Jsonpath() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalue"></a>

```go
func Targetvalue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepAssertionTargetjsonpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---


### SyntheticsTestApiStepAssertionTargetxpathOutputReference <a name="SyntheticsTestApiStepAssertionTargetxpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepAssertionTargetxpathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepAssertionTargetxpathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpathInput">XpathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpath">Xpath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalueInput"></a>

```go
func TargetvalueInput() *string
```

- *Type:* *string

---

##### `XpathInput`<sup>Optional</sup> <a name="XpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpathInput"></a>

```go
func XpathInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalue"></a>

```go
func Targetvalue() *string
```

- *Type:* *string

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpath"></a>

```go
func Xpath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepAssertionTargetxpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---


### SyntheticsTestApiStepExtractedValueList <a name="SyntheticsTestApiStepExtractedValueList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepExtractedValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestApiStepExtractedValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get"></a>

```go
func Get(index *f64) SyntheticsTestApiStepExtractedValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestApiStepExtractedValueOutputReference <a name="SyntheticsTestApiStepExtractedValueOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepExtractedValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestApiStepExtractedValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser">PutParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParser` <a name="PutParser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser"></a>

```go
func PutParser(value SyntheticsTestApiStepExtractedValueParser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parser">Parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference">SyntheticsTestApiStepExtractedValueParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parserInput">ParserInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parser`<sup>Required</sup> <a name="Parser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parser"></a>

```go
func Parser() SyntheticsTestApiStepExtractedValueParserOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference">SyntheticsTestApiStepExtractedValueParserOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParserInput`<sup>Optional</sup> <a name="ParserInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parserInput"></a>

```go
func ParserInput() SyntheticsTestApiStepExtractedValueParser
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestApiStepExtractedValueParserOutputReference <a name="SyntheticsTestApiStepExtractedValueParserOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepExtractedValueParserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepExtractedValueParserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepExtractedValueParser
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---


### SyntheticsTestApiStepList <a name="SyntheticsTestApiStepList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestApiStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get"></a>

```go
func Get(index *f64) SyntheticsTestApiStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestApiStepOutputReference <a name="SyntheticsTestApiStepOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestApiStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion">PutAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue">PutExtractedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth">PutRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate">PutRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition">PutRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy">PutRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAllowFailure">ResetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAssertion">ResetAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetExtractedValue">ResetExtractedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetIsCritical">ResetIsCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestBasicauth">ResetRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestClientCertificate">ResetRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestDefinition">ResetRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestProxy">ResetRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestQuery">ResetRequestQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssertion` <a name="PutAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion"></a>

```go
func PutAssertion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExtractedValue` <a name="PutExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue"></a>

```go
func PutExtractedValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestBasicauth` <a name="PutRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth"></a>

```go
func PutRequestBasicauth(value SyntheticsTestApiStepRequestBasicauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---

##### `PutRequestClientCertificate` <a name="PutRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate"></a>

```go
func PutRequestClientCertificate(value SyntheticsTestApiStepRequestClientCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---

##### `PutRequestDefinition` <a name="PutRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition"></a>

```go
func PutRequestDefinition(value SyntheticsTestApiStepRequestDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---

##### `PutRequestProxy` <a name="PutRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy"></a>

```go
func PutRequestProxy(value SyntheticsTestApiStepRequestProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---

##### `PutRetry` <a name="PutRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry"></a>

```go
func PutRetry(value SyntheticsTestApiStepRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---

##### `ResetAllowFailure` <a name="ResetAllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAllowFailure"></a>

```go
func ResetAllowFailure()
```

##### `ResetAssertion` <a name="ResetAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAssertion"></a>

```go
func ResetAssertion()
```

##### `ResetExtractedValue` <a name="ResetExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetExtractedValue"></a>

```go
func ResetExtractedValue()
```

##### `ResetIsCritical` <a name="ResetIsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetIsCritical"></a>

```go
func ResetIsCritical()
```

##### `ResetRequestBasicauth` <a name="ResetRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestBasicauth"></a>

```go
func ResetRequestBasicauth()
```

##### `ResetRequestClientCertificate` <a name="ResetRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestClientCertificate"></a>

```go
func ResetRequestClientCertificate()
```

##### `ResetRequestDefinition` <a name="ResetRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestDefinition"></a>

```go
func ResetRequestDefinition()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetRequestProxy` <a name="ResetRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestProxy"></a>

```go
func ResetRequestProxy()
```

##### `ResetRequestQuery` <a name="ResetRequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestQuery"></a>

```go
func ResetRequestQuery()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetSubtype"></a>

```go
func ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertion">Assertion</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList">SyntheticsTestApiStepAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValue">ExtractedValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList">SyntheticsTestApiStepExtractedValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference">SyntheticsTestApiStepRequestBasicauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference">SyntheticsTestApiStepRequestClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference">SyntheticsTestApiStepRequestDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference">SyntheticsTestApiStepRequestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference">SyntheticsTestApiStepRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailureInput">AllowFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertionInput">AssertionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValueInput">ExtractedValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCriticalInput">IsCriticalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauthInput">RequestBasicauthInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificateInput">RequestClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinitionInput">RequestDefinitionInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxyInput">RequestProxyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQueryInput">RequestQueryInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retryInput">RetryInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCritical">IsCritical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQuery">RequestQuery</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Assertion`<sup>Required</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertion"></a>

```go
func Assertion() SyntheticsTestApiStepAssertionList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList">SyntheticsTestApiStepAssertionList</a>

---

##### `ExtractedValue`<sup>Required</sup> <a name="ExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValue"></a>

```go
func ExtractedValue() SyntheticsTestApiStepExtractedValueList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList">SyntheticsTestApiStepExtractedValueList</a>

---

##### `RequestBasicauth`<sup>Required</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauth"></a>

```go
func RequestBasicauth() SyntheticsTestApiStepRequestBasicauthOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference">SyntheticsTestApiStepRequestBasicauthOutputReference</a>

---

##### `RequestClientCertificate`<sup>Required</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificate"></a>

```go
func RequestClientCertificate() SyntheticsTestApiStepRequestClientCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference">SyntheticsTestApiStepRequestClientCertificateOutputReference</a>

---

##### `RequestDefinition`<sup>Required</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinition"></a>

```go
func RequestDefinition() SyntheticsTestApiStepRequestDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference">SyntheticsTestApiStepRequestDefinitionOutputReference</a>

---

##### `RequestProxy`<sup>Required</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxy"></a>

```go
func RequestProxy() SyntheticsTestApiStepRequestProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference">SyntheticsTestApiStepRequestProxyOutputReference</a>

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retry"></a>

```go
func Retry() SyntheticsTestApiStepRetryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference">SyntheticsTestApiStepRetryOutputReference</a>

---

##### `AllowFailureInput`<sup>Optional</sup> <a name="AllowFailureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailureInput"></a>

```go
func AllowFailureInput() interface{}
```

- *Type:* interface{}

---

##### `AssertionInput`<sup>Optional</sup> <a name="AssertionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertionInput"></a>

```go
func AssertionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtractedValueInput`<sup>Optional</sup> <a name="ExtractedValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValueInput"></a>

```go
func ExtractedValueInput() interface{}
```

- *Type:* interface{}

---

##### `IsCriticalInput`<sup>Optional</sup> <a name="IsCriticalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCriticalInput"></a>

```go
func IsCriticalInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestBasicauthInput`<sup>Optional</sup> <a name="RequestBasicauthInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauthInput"></a>

```go
func RequestBasicauthInput() SyntheticsTestApiStepRequestBasicauth
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---

##### `RequestClientCertificateInput`<sup>Optional</sup> <a name="RequestClientCertificateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificateInput"></a>

```go
func RequestClientCertificateInput() SyntheticsTestApiStepRequestClientCertificate
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---

##### `RequestDefinitionInput`<sup>Optional</sup> <a name="RequestDefinitionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinitionInput"></a>

```go
func RequestDefinitionInput() SyntheticsTestApiStepRequestDefinition
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestProxyInput`<sup>Optional</sup> <a name="RequestProxyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxyInput"></a>

```go
func RequestProxyInput() SyntheticsTestApiStepRequestProxy
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---

##### `RequestQueryInput`<sup>Optional</sup> <a name="RequestQueryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQueryInput"></a>

```go
func RequestQueryInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retryInput"></a>

```go
func RetryInput() SyntheticsTestApiStepRetry
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtypeInput"></a>

```go
func SubtypeInput() *string
```

- *Type:* *string

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailure"></a>

```go
func AllowFailure() interface{}
```

- *Type:* interface{}

---

##### `IsCritical`<sup>Required</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCritical"></a>

```go
func IsCritical() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestQuery`<sup>Required</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQuery"></a>

```go
func RequestQuery() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestApiStepRequestBasicauthOutputReference <a name="SyntheticsTestApiStepRequestBasicauthOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRequestBasicauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRequestBasicauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessTokenUrl">ResetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSessionToken">ResetSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetTokenApiAuthentication">ResetTokenApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetWorkstation">ResetWorkstation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetAccessTokenUrl` <a name="ResetAccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessTokenUrl"></a>

```go
func ResetAccessTokenUrl()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetResource"></a>

```go
func ResetResource()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSecretKey"></a>

```go
func ResetSecretKey()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetSessionToken` <a name="ResetSessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSessionToken"></a>

```go
func ResetSessionToken()
```

##### `ResetTokenApiAuthentication` <a name="ResetTokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetTokenApiAuthentication"></a>

```go
func ResetTokenApiAuthentication()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetWorkstation` <a name="ResetWorkstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetWorkstation"></a>

```go
func ResetWorkstation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionTokenInput">SessionTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthenticationInput">TokenApiAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstationInput">WorkstationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionToken">SessionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstation">Workstation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrlInput"></a>

```go
func AccessTokenUrlInput() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `SessionTokenInput`<sup>Optional</sup> <a name="SessionTokenInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionTokenInput"></a>

```go
func SessionTokenInput() *string
```

- *Type:* *string

---

##### `TokenApiAuthenticationInput`<sup>Optional</sup> <a name="TokenApiAuthenticationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthenticationInput"></a>

```go
func TokenApiAuthenticationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `WorkstationInput`<sup>Optional</sup> <a name="WorkstationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstationInput"></a>

```go
func WorkstationInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrl"></a>

```go
func AccessTokenUrl() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SessionToken`<sup>Required</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionToken"></a>

```go
func SessionToken() *string
```

- *Type:* *string

---

##### `TokenApiAuthentication`<sup>Required</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthentication"></a>

```go
func TokenApiAuthentication() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `Workstation`<sup>Required</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstation"></a>

```go
func Workstation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRequestBasicauth
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---


### SyntheticsTestApiStepRequestClientCertificateCertOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateCertOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRequestClientCertificateCertOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRequestClientCertificateCertOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resetFilename"></a>

```go
func ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRequestClientCertificateCert
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---


### SyntheticsTestApiStepRequestClientCertificateKeyOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateKeyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRequestClientCertificateKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRequestClientCertificateKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resetFilename"></a>

```go
func ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRequestClientCertificateKey
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---


### SyntheticsTestApiStepRequestClientCertificateOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRequestClientCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRequestClientCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert">PutCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey">PutKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCert` <a name="PutCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert"></a>

```go
func PutCert(value SyntheticsTestApiStepRequestClientCertificateCert)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---

##### `PutKey` <a name="PutKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey"></a>

```go
func PutKey(value SyntheticsTestApiStepRequestClientCertificateKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference">SyntheticsTestApiStepRequestClientCertificateCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference">SyntheticsTestApiStepRequestClientCertificateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.certInput">CertInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.keyInput">KeyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.cert"></a>

```go
func Cert() SyntheticsTestApiStepRequestClientCertificateCertOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference">SyntheticsTestApiStepRequestClientCertificateCertOutputReference</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.key"></a>

```go
func Key() SyntheticsTestApiStepRequestClientCertificateKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference">SyntheticsTestApiStepRequestClientCertificateKeyOutputReference</a>

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.certInput"></a>

```go
func CertInput() SyntheticsTestApiStepRequestClientCertificateCert
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.keyInput"></a>

```go
func KeyInput() SyntheticsTestApiStepRequestClientCertificateKey
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRequestClientCertificate
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---


### SyntheticsTestApiStepRequestDefinitionOutputReference <a name="SyntheticsTestApiStepRequestDefinitionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRequestDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRequestDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBodyType">ResetBodyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCallType">ResetCallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCertificateDomains">ResetCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServerPort">ResetDnsServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNoSavingResponseBody">ResetNoSavingResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNumberOfPackets">ResetNumberOfPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetServername">ResetServername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetShouldTrackHops">ResetShouldTrackHops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetBodyType` <a name="ResetBodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBodyType"></a>

```go
func ResetBodyType()
```

##### `ResetCallType` <a name="ResetCallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCallType"></a>

```go
func ResetCallType()
```

##### `ResetCertificateDomains` <a name="ResetCertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCertificateDomains"></a>

```go
func ResetCertificateDomains()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServer"></a>

```go
func ResetDnsServer()
```

##### `ResetDnsServerPort` <a name="ResetDnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServerPort"></a>

```go
func ResetDnsServerPort()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetFollowRedirects"></a>

```go
func ResetFollowRedirects()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetNoSavingResponseBody` <a name="ResetNoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNoSavingResponseBody"></a>

```go
func ResetNoSavingResponseBody()
```

##### `ResetNumberOfPackets` <a name="ResetNumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNumberOfPackets"></a>

```go
func ResetNumberOfPackets()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServername` <a name="ResetServername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetServername"></a>

```go
func ResetServername()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetShouldTrackHops` <a name="ResetShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetShouldTrackHops"></a>

```go
func ResetShouldTrackHops()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyTypeInput">BodyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callTypeInput">CallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomainsInput">CertificateDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPortInput">DnsServerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBodyInput">NoSavingResponseBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPacketsInput">NumberOfPacketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servernameInput">ServernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHopsInput">ShouldTrackHopsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyType">BodyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callType">CallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomains">CertificateDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServer">DnsServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPort">DnsServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPackets">NumberOfPackets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servername">Servername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `BodyTypeInput`<sup>Optional</sup> <a name="BodyTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyTypeInput"></a>

```go
func BodyTypeInput() *string
```

- *Type:* *string

---

##### `CallTypeInput`<sup>Optional</sup> <a name="CallTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callTypeInput"></a>

```go
func CallTypeInput() *string
```

- *Type:* *string

---

##### `CertificateDomainsInput`<sup>Optional</sup> <a name="CertificateDomainsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomainsInput"></a>

```go
func CertificateDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerInput"></a>

```go
func DnsServerInput() *string
```

- *Type:* *string

---

##### `DnsServerPortInput`<sup>Optional</sup> <a name="DnsServerPortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPortInput"></a>

```go
func DnsServerPortInput() *f64
```

- *Type:* *f64

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirectsInput"></a>

```go
func FollowRedirectsInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NoSavingResponseBodyInput`<sup>Optional</sup> <a name="NoSavingResponseBodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBodyInput"></a>

```go
func NoSavingResponseBodyInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPacketsInput`<sup>Optional</sup> <a name="NumberOfPacketsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPacketsInput"></a>

```go
func NumberOfPacketsInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServernameInput`<sup>Optional</sup> <a name="ServernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servernameInput"></a>

```go
func ServernameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ShouldTrackHopsInput`<sup>Optional</sup> <a name="ShouldTrackHopsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHopsInput"></a>

```go
func ShouldTrackHopsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `BodyType`<sup>Required</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyType"></a>

```go
func BodyType() *string
```

- *Type:* *string

---

##### `CallType`<sup>Required</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callType"></a>

```go
func CallType() *string
```

- *Type:* *string

---

##### `CertificateDomains`<sup>Required</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomains"></a>

```go
func CertificateDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServer"></a>

```go
func DnsServer() *string
```

- *Type:* *string

---

##### `DnsServerPort`<sup>Required</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPort"></a>

```go
func DnsServerPort() *f64
```

- *Type:* *f64

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirects"></a>

```go
func FollowRedirects() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `NoSavingResponseBody`<sup>Required</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBody"></a>

```go
func NoSavingResponseBody() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPackets`<sup>Required</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPackets"></a>

```go
func NumberOfPackets() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Servername`<sup>Required</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servername"></a>

```go
func Servername() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ShouldTrackHops`<sup>Required</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHops"></a>

```go
func ShouldTrackHops() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRequestDefinition
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---


### SyntheticsTestApiStepRequestProxyOutputReference <a name="SyntheticsTestApiStepRequestProxyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRequestProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRequestProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRequestProxy
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---


### SyntheticsTestApiStepRetryOutputReference <a name="SyntheticsTestApiStepRetryOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestApiStepRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestApiStepRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetInterval"></a>

```go
func ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestApiStepRetry
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---


### SyntheticsTestAssertionList <a name="SyntheticsTestAssertionList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestAssertionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestAssertionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get"></a>

```go
func Get(index *f64) SyntheticsTestAssertionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestAssertionOutputReference <a name="SyntheticsTestAssertionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestAssertionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestAssertionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath">PutTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath">PutTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetjsonpath">ResetTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetxpath">ResetTargetxpath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetjsonpath` <a name="PutTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath"></a>

```go
func PutTargetjsonpath(value SyntheticsTestAssertionTargetjsonpath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---

##### `PutTargetxpath` <a name="PutTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath"></a>

```go
func PutTargetxpath(value SyntheticsTestAssertionTargetxpath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetProperty"></a>

```go
func ResetProperty()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTargetjsonpath` <a name="ResetTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetjsonpath"></a>

```go
func ResetTargetjsonpath()
```

##### `ResetTargetxpath` <a name="ResetTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetxpath"></a>

```go
func ResetTargetxpath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference">SyntheticsTestAssertionTargetjsonpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference">SyntheticsTestAssertionTargetxpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.propertyInput">PropertyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpathInput">TargetjsonpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpathInput">TargetxpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.property">Property</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targetjsonpath`<sup>Required</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpath"></a>

```go
func Targetjsonpath() SyntheticsTestAssertionTargetjsonpathOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference">SyntheticsTestAssertionTargetjsonpathOutputReference</a>

---

##### `Targetxpath`<sup>Required</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpath"></a>

```go
func Targetxpath() SyntheticsTestAssertionTargetxpathOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference">SyntheticsTestAssertionTargetxpathOutputReference</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.propertyInput"></a>

```go
func PropertyInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TargetjsonpathInput`<sup>Optional</sup> <a name="TargetjsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpathInput"></a>

```go
func TargetjsonpathInput() SyntheticsTestAssertionTargetjsonpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---

##### `TargetxpathInput`<sup>Optional</sup> <a name="TargetxpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpathInput"></a>

```go
func TargetxpathInput() SyntheticsTestAssertionTargetxpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.property"></a>

```go
func Property() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestAssertionTargetjsonpathOutputReference <a name="SyntheticsTestAssertionTargetjsonpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestAssertionTargetjsonpathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestAssertionTargetjsonpathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpathInput">JsonpathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpath">Jsonpath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonpathInput`<sup>Optional</sup> <a name="JsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpathInput"></a>

```go
func JsonpathInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalueInput"></a>

```go
func TargetvalueInput() *string
```

- *Type:* *string

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpath"></a>

```go
func Jsonpath() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalue"></a>

```go
func Targetvalue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestAssertionTargetjsonpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---


### SyntheticsTestAssertionTargetxpathOutputReference <a name="SyntheticsTestAssertionTargetxpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestAssertionTargetxpathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestAssertionTargetxpathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpathInput">XpathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpath">Xpath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalueInput"></a>

```go
func TargetvalueInput() *string
```

- *Type:* *string

---

##### `XpathInput`<sup>Optional</sup> <a name="XpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpathInput"></a>

```go
func XpathInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalue"></a>

```go
func Targetvalue() *string
```

- *Type:* *string

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpath"></a>

```go
func Xpath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestAssertionTargetxpath
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---


### SyntheticsTestBrowserStepList <a name="SyntheticsTestBrowserStepList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestBrowserStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get"></a>

```go
func Get(index *f64) SyntheticsTestBrowserStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestBrowserStepOutputReference <a name="SyntheticsTestBrowserStepOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestBrowserStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetAllowFailure">ResetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetForceElementUpdate">ResetForceElementUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetIsCritical">ResetIsCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParams` <a name="PutParams" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams"></a>

```go
func PutParams(value SyntheticsTestBrowserStepParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---

##### `ResetAllowFailure` <a name="ResetAllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetAllowFailure"></a>

```go
func ResetAllowFailure()
```

##### `ResetForceElementUpdate` <a name="ResetForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetForceElementUpdate"></a>

```go
func ResetForceElementUpdate()
```

##### `ResetIsCritical` <a name="ResetIsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetIsCritical"></a>

```go
func ResetIsCritical()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.params">Params</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference">SyntheticsTestBrowserStepParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailureInput">AllowFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdateInput">ForceElementUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCriticalInput">IsCriticalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdate">ForceElementUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCritical">IsCritical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.params"></a>

```go
func Params() SyntheticsTestBrowserStepParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference">SyntheticsTestBrowserStepParamsOutputReference</a>

---

##### `AllowFailureInput`<sup>Optional</sup> <a name="AllowFailureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailureInput"></a>

```go
func AllowFailureInput() interface{}
```

- *Type:* interface{}

---

##### `ForceElementUpdateInput`<sup>Optional</sup> <a name="ForceElementUpdateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdateInput"></a>

```go
func ForceElementUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `IsCriticalInput`<sup>Optional</sup> <a name="IsCriticalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCriticalInput"></a>

```go
func IsCriticalInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.paramsInput"></a>

```go
func ParamsInput() SyntheticsTestBrowserStepParams
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailure"></a>

```go
func AllowFailure() interface{}
```

- *Type:* interface{}

---

##### `ForceElementUpdate`<sup>Required</sup> <a name="ForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdate"></a>

```go
func ForceElementUpdate() interface{}
```

- *Type:* interface{}

---

##### `IsCritical`<sup>Required</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCritical"></a>

```go
func IsCritical() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference <a name="SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserStepParamsElementUserLocatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resetFailTestOnCannotLocate">ResetFailTestOnCannotLocate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue"></a>

```go
func PutValue(value SyntheticsTestBrowserStepParamsElementUserLocatorValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---

##### `ResetFailTestOnCannotLocate` <a name="ResetFailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resetFailTestOnCannotLocate"></a>

```go
func ResetFailTestOnCannotLocate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocateInput">FailTestOnCannotLocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocate">FailTestOnCannotLocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.value"></a>

```go
func Value() SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference</a>

---

##### `FailTestOnCannotLocateInput`<sup>Optional</sup> <a name="FailTestOnCannotLocateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocateInput"></a>

```go
func FailTestOnCannotLocateInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.valueInput"></a>

```go
func ValueInput() SyntheticsTestBrowserStepParamsElementUserLocatorValue
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---

##### `FailTestOnCannotLocate`<sup>Required</sup> <a name="FailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocate"></a>

```go
func FailTestOnCannotLocate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestBrowserStepParamsElementUserLocator
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---


### SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference <a name="SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestBrowserStepParamsElementUserLocatorValue
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---


### SyntheticsTestBrowserStepParamsOutputReference <a name="SyntheticsTestBrowserStepParamsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserStepParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestBrowserStepParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator">PutElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCheck">ResetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetClickType">ResetClickType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElement">ResetElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElementUserLocator">ResetElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetModifiers">ResetModifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetPlayingTabId">ResetPlayingTabId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetSubtestPublicId">ResetSubtestPublicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetWithClick">ResetWithClick</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElementUserLocator` <a name="PutElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator"></a>

```go
func PutElementUserLocator(value SyntheticsTestBrowserStepParamsElementUserLocator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable"></a>

```go
func PutVariable(value SyntheticsTestBrowserStepParamsVariable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetCheck` <a name="ResetCheck" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCheck"></a>

```go
func ResetCheck()
```

##### `ResetClickType` <a name="ResetClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetClickType"></a>

```go
func ResetClickType()
```

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetDelay"></a>

```go
func ResetDelay()
```

##### `ResetElement` <a name="ResetElement" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElement"></a>

```go
func ResetElement()
```

##### `ResetElementUserLocator` <a name="ResetElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElementUserLocator"></a>

```go
func ResetElementUserLocator()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFiles"></a>

```go
func ResetFiles()
```

##### `ResetModifiers` <a name="ResetModifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetModifiers"></a>

```go
func ResetModifiers()
```

##### `ResetPlayingTabId` <a name="ResetPlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetPlayingTabId"></a>

```go
func ResetPlayingTabId()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetSubtestPublicId` <a name="ResetSubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetSubtestPublicId"></a>

```go
func ResetSubtestPublicId()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetVariable"></a>

```go
func ResetVariable()
```

##### `ResetWithClick` <a name="ResetWithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetWithClick"></a>

```go
func ResetWithClick()
```

##### `ResetX` <a name="ResetX" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetX"></a>

```go
func ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetY"></a>

```go
func ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocator">ElementUserLocator</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference">SyntheticsTestBrowserStepParamsVariableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.checkInput">CheckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickTypeInput">ClickTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delayInput">DelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementInput">ElementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocatorInput">ElementUserLocatorInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.filesInput">FilesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiersInput">ModifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabIdInput">PlayingTabIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicIdInput">SubtestPublicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variableInput">VariableInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClickInput">WithClickInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.xInput">XInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.yInput">YInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.check">Check</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickType">ClickType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delay">Delay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.element">Element</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.files">Files</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiers">Modifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabId">PlayingTabId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicId">SubtestPublicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClick">WithClick</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.x">X</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.y">Y</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementUserLocator`<sup>Required</sup> <a name="ElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocator"></a>

```go
func ElementUserLocator() SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variable"></a>

```go
func Variable() SyntheticsTestBrowserStepParamsVariableOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference">SyntheticsTestBrowserStepParamsVariableOutputReference</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `CheckInput`<sup>Optional</sup> <a name="CheckInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.checkInput"></a>

```go
func CheckInput() *string
```

- *Type:* *string

---

##### `ClickTypeInput`<sup>Optional</sup> <a name="ClickTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickTypeInput"></a>

```go
func ClickTypeInput() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delayInput"></a>

```go
func DelayInput() *f64
```

- *Type:* *f64

---

##### `ElementInput`<sup>Optional</sup> <a name="ElementInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementInput"></a>

```go
func ElementInput() *string
```

- *Type:* *string

---

##### `ElementUserLocatorInput`<sup>Optional</sup> <a name="ElementUserLocatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocatorInput"></a>

```go
func ElementUserLocatorInput() SyntheticsTestBrowserStepParamsElementUserLocator
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.filesInput"></a>

```go
func FilesInput() *string
```

- *Type:* *string

---

##### `ModifiersInput`<sup>Optional</sup> <a name="ModifiersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiersInput"></a>

```go
func ModifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PlayingTabIdInput`<sup>Optional</sup> <a name="PlayingTabIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabIdInput"></a>

```go
func PlayingTabIdInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `SubtestPublicIdInput`<sup>Optional</sup> <a name="SubtestPublicIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicIdInput"></a>

```go
func SubtestPublicIdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variableInput"></a>

```go
func VariableInput() SyntheticsTestBrowserStepParamsVariable
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---

##### `WithClickInput`<sup>Optional</sup> <a name="WithClickInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClickInput"></a>

```go
func WithClickInput() interface{}
```

- *Type:* interface{}

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.xInput"></a>

```go
func XInput() *f64
```

- *Type:* *f64

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.yInput"></a>

```go
func YInput() *f64
```

- *Type:* *f64

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.check"></a>

```go
func Check() *string
```

- *Type:* *string

---

##### `ClickType`<sup>Required</sup> <a name="ClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickType"></a>

```go
func ClickType() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delay"></a>

```go
func Delay() *f64
```

- *Type:* *f64

---

##### `Element`<sup>Required</sup> <a name="Element" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.element"></a>

```go
func Element() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.files"></a>

```go
func Files() *string
```

- *Type:* *string

---

##### `Modifiers`<sup>Required</sup> <a name="Modifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiers"></a>

```go
func Modifiers() *[]*string
```

- *Type:* *[]*string

---

##### `PlayingTabId`<sup>Required</sup> <a name="PlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabId"></a>

```go
func PlayingTabId() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `SubtestPublicId`<sup>Required</sup> <a name="SubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicId"></a>

```go
func SubtestPublicId() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `WithClick`<sup>Required</sup> <a name="WithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClick"></a>

```go
func WithClick() interface{}
```

- *Type:* interface{}

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.x"></a>

```go
func X() *f64
```

- *Type:* *f64

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.y"></a>

```go
func Y() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestBrowserStepParams
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---


### SyntheticsTestBrowserStepParamsVariableOutputReference <a name="SyntheticsTestBrowserStepParamsVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserStepParamsVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestBrowserStepParamsVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.exampleInput">ExampleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.example">Example</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.exampleInput"></a>

```go
func ExampleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.example"></a>

```go
func Example() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestBrowserStepParamsVariable
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---


### SyntheticsTestBrowserVariableList <a name="SyntheticsTestBrowserVariableList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestBrowserVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get"></a>

```go
func Get(index *f64) SyntheticsTestBrowserVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestBrowserVariableOutputReference <a name="SyntheticsTestBrowserVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestBrowserVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestBrowserVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetPattern"></a>

```go
func ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.exampleInput">ExampleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.example">Example</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.exampleInput"></a>

```go
func ExampleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.example"></a>

```go
func Example() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestConfigVariableList <a name="SyntheticsTestConfigVariableList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestConfigVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SyntheticsTestConfigVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get"></a>

```go
func Get(index *f64) SyntheticsTestConfigVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestConfigVariableOutputReference <a name="SyntheticsTestConfigVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestConfigVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SyntheticsTestConfigVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetSecure">ResetSecure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetSecure"></a>

```go
func ResetSecure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.exampleInput">ExampleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secureInput">SecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.example">Example</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secure">Secure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.exampleInput"></a>

```go
func ExampleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secureInput"></a>

```go
func SecureInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.example"></a>

```go
func Example() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secure"></a>

```go
func Secure() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SyntheticsTestOptionsListCiOutputReference <a name="SyntheticsTestOptionsListCiOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestOptionsListCiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestOptionsListCiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resetExecutionRule">ResetExecutionRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRule` <a name="ResetExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resetExecutionRule"></a>

```go
func ResetExecutionRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRuleInput">ExecutionRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRule">ExecutionRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionRuleInput`<sup>Optional</sup> <a name="ExecutionRuleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRuleInput"></a>

```go
func ExecutionRuleInput() *string
```

- *Type:* *string

---

##### `ExecutionRule`<sup>Required</sup> <a name="ExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRule"></a>

```go
func ExecutionRule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestOptionsListCi
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---


### SyntheticsTestOptionsListMonitorOptionsOutputReference <a name="SyntheticsTestOptionsListMonitorOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestOptionsListMonitorOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestOptionsListMonitorOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resetRenotifyInterval">ResetRenotifyInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRenotifyInterval` <a name="ResetRenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resetRenotifyInterval"></a>

```go
func ResetRenotifyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyIntervalInput">RenotifyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval">RenotifyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenotifyIntervalInput`<sup>Optional</sup> <a name="RenotifyIntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyIntervalInput"></a>

```go
func RenotifyIntervalInput() *f64
```

- *Type:* *f64

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```go
func RenotifyInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestOptionsListMonitorOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---


### SyntheticsTestOptionsListOutputReference <a name="SyntheticsTestOptionsListOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestOptionsListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestOptionsListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi">PutCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions">PutMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings">PutRumSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAcceptSelfSigned">ResetAcceptSelfSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCheckCertificateRevocation">ResetCheckCertificateRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCi">ResetCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCors">ResetDisableCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCsp">ResetDisableCsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetHttpVersion">ResetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetIgnoreServerCertificateError">ResetIgnoreServerCertificateError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetInitialNavigationTimeout">ResetInitialNavigationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinFailureDuration">ResetMinFailureDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinLocationFailed">ResetMinLocationFailed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorName">ResetMonitorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorOptions">ResetMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorPriority">ResetMonitorPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetNoScreenshot">ResetNoScreenshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRestrictedRoles">ResetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRumSettings">ResetRumSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCi` <a name="PutCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi"></a>

```go
func PutCi(value SyntheticsTestOptionsListCi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---

##### `PutMonitorOptions` <a name="PutMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions"></a>

```go
func PutMonitorOptions(value SyntheticsTestOptionsListMonitorOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---

##### `PutRetry` <a name="PutRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry"></a>

```go
func PutRetry(value SyntheticsTestOptionsListRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---

##### `PutRumSettings` <a name="PutRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings"></a>

```go
func PutRumSettings(value SyntheticsTestOptionsListRumSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---

##### `ResetAcceptSelfSigned` <a name="ResetAcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAcceptSelfSigned"></a>

```go
func ResetAcceptSelfSigned()
```

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetCheckCertificateRevocation` <a name="ResetCheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCheckCertificateRevocation"></a>

```go
func ResetCheckCertificateRevocation()
```

##### `ResetCi` <a name="ResetCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCi"></a>

```go
func ResetCi()
```

##### `ResetDisableCors` <a name="ResetDisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCors"></a>

```go
func ResetDisableCors()
```

##### `ResetDisableCsp` <a name="ResetDisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCsp"></a>

```go
func ResetDisableCsp()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetFollowRedirects"></a>

```go
func ResetFollowRedirects()
```

##### `ResetHttpVersion` <a name="ResetHttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetHttpVersion"></a>

```go
func ResetHttpVersion()
```

##### `ResetIgnoreServerCertificateError` <a name="ResetIgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetIgnoreServerCertificateError"></a>

```go
func ResetIgnoreServerCertificateError()
```

##### `ResetInitialNavigationTimeout` <a name="ResetInitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetInitialNavigationTimeout"></a>

```go
func ResetInitialNavigationTimeout()
```

##### `ResetMinFailureDuration` <a name="ResetMinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinFailureDuration"></a>

```go
func ResetMinFailureDuration()
```

##### `ResetMinLocationFailed` <a name="ResetMinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinLocationFailed"></a>

```go
func ResetMinLocationFailed()
```

##### `ResetMonitorName` <a name="ResetMonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorName"></a>

```go
func ResetMonitorName()
```

##### `ResetMonitorOptions` <a name="ResetMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorOptions"></a>

```go
func ResetMonitorOptions()
```

##### `ResetMonitorPriority` <a name="ResetMonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorPriority"></a>

```go
func ResetMonitorPriority()
```

##### `ResetNoScreenshot` <a name="ResetNoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetNoScreenshot"></a>

```go
func ResetNoScreenshot()
```

##### `ResetRestrictedRoles` <a name="ResetRestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRestrictedRoles"></a>

```go
func ResetRestrictedRoles()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetRumSettings` <a name="ResetRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRumSettings"></a>

```go
func ResetRumSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ci">Ci</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference">SyntheticsTestOptionsListCiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference">SyntheticsTestOptionsListMonitorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference">SyntheticsTestOptionsListRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettings">RumSettings</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference">SyntheticsTestOptionsListRumSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSignedInput">AcceptSelfSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocationInput">CheckCertificateRevocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ciInput">CiInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCorsInput">DisableCorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCspInput">DisableCspInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersionInput">HttpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateErrorInput">IgnoreServerCertificateErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeoutInput">InitialNavigationTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDurationInput">MinFailureDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailedInput">MinLocationFailedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorNameInput">MonitorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptionsInput">MonitorOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriorityInput">MonitorPriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshotInput">NoScreenshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRolesInput">RestrictedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retryInput">RetryInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettingsInput">RumSettingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEveryInput">TickEveryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSigned">AcceptSelfSigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocation">CheckCertificateRevocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCors">DisableCors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCsp">DisableCsp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersion">HttpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateError">IgnoreServerCertificateError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeout">InitialNavigationTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDuration">MinFailureDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailed">MinLocationFailed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorName">MonitorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriority">MonitorPriority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshot">NoScreenshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRoles">RestrictedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEvery">TickEvery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ci`<sup>Required</sup> <a name="Ci" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ci"></a>

```go
func Ci() SyntheticsTestOptionsListCiOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference">SyntheticsTestOptionsListCiOutputReference</a>

---

##### `MonitorOptions`<sup>Required</sup> <a name="MonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptions"></a>

```go
func MonitorOptions() SyntheticsTestOptionsListMonitorOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference">SyntheticsTestOptionsListMonitorOptionsOutputReference</a>

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retry"></a>

```go
func Retry() SyntheticsTestOptionsListRetryOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference">SyntheticsTestOptionsListRetryOutputReference</a>

---

##### `RumSettings`<sup>Required</sup> <a name="RumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettings"></a>

```go
func RumSettings() SyntheticsTestOptionsListRumSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference">SyntheticsTestOptionsListRumSettingsOutputReference</a>

---

##### `AcceptSelfSignedInput`<sup>Optional</sup> <a name="AcceptSelfSignedInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSignedInput"></a>

```go
func AcceptSelfSignedInput() interface{}
```

- *Type:* interface{}

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `CheckCertificateRevocationInput`<sup>Optional</sup> <a name="CheckCertificateRevocationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocationInput"></a>

```go
func CheckCertificateRevocationInput() interface{}
```

- *Type:* interface{}

---

##### `CiInput`<sup>Optional</sup> <a name="CiInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ciInput"></a>

```go
func CiInput() SyntheticsTestOptionsListCi
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---

##### `DisableCorsInput`<sup>Optional</sup> <a name="DisableCorsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCorsInput"></a>

```go
func DisableCorsInput() interface{}
```

- *Type:* interface{}

---

##### `DisableCspInput`<sup>Optional</sup> <a name="DisableCspInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCspInput"></a>

```go
func DisableCspInput() interface{}
```

- *Type:* interface{}

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirectsInput"></a>

```go
func FollowRedirectsInput() interface{}
```

- *Type:* interface{}

---

##### `HttpVersionInput`<sup>Optional</sup> <a name="HttpVersionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersionInput"></a>

```go
func HttpVersionInput() *string
```

- *Type:* *string

---

##### `IgnoreServerCertificateErrorInput`<sup>Optional</sup> <a name="IgnoreServerCertificateErrorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateErrorInput"></a>

```go
func IgnoreServerCertificateErrorInput() interface{}
```

- *Type:* interface{}

---

##### `InitialNavigationTimeoutInput`<sup>Optional</sup> <a name="InitialNavigationTimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeoutInput"></a>

```go
func InitialNavigationTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MinFailureDurationInput`<sup>Optional</sup> <a name="MinFailureDurationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDurationInput"></a>

```go
func MinFailureDurationInput() *f64
```

- *Type:* *f64

---

##### `MinLocationFailedInput`<sup>Optional</sup> <a name="MinLocationFailedInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailedInput"></a>

```go
func MinLocationFailedInput() *f64
```

- *Type:* *f64

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorNameInput"></a>

```go
func MonitorNameInput() *string
```

- *Type:* *string

---

##### `MonitorOptionsInput`<sup>Optional</sup> <a name="MonitorOptionsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptionsInput"></a>

```go
func MonitorOptionsInput() SyntheticsTestOptionsListMonitorOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---

##### `MonitorPriorityInput`<sup>Optional</sup> <a name="MonitorPriorityInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriorityInput"></a>

```go
func MonitorPriorityInput() *f64
```

- *Type:* *f64

---

##### `NoScreenshotInput`<sup>Optional</sup> <a name="NoScreenshotInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshotInput"></a>

```go
func NoScreenshotInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictedRolesInput`<sup>Optional</sup> <a name="RestrictedRolesInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRolesInput"></a>

```go
func RestrictedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retryInput"></a>

```go
func RetryInput() SyntheticsTestOptionsListRetry
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---

##### `RumSettingsInput`<sup>Optional</sup> <a name="RumSettingsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettingsInput"></a>

```go
func RumSettingsInput() SyntheticsTestOptionsListRumSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---

##### `TickEveryInput`<sup>Optional</sup> <a name="TickEveryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEveryInput"></a>

```go
func TickEveryInput() *f64
```

- *Type:* *f64

---

##### `AcceptSelfSigned`<sup>Required</sup> <a name="AcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSigned"></a>

```go
func AcceptSelfSigned() interface{}
```

- *Type:* interface{}

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `CheckCertificateRevocation`<sup>Required</sup> <a name="CheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocation"></a>

```go
func CheckCertificateRevocation() interface{}
```

- *Type:* interface{}

---

##### `DisableCors`<sup>Required</sup> <a name="DisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCors"></a>

```go
func DisableCors() interface{}
```

- *Type:* interface{}

---

##### `DisableCsp`<sup>Required</sup> <a name="DisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCsp"></a>

```go
func DisableCsp() interface{}
```

- *Type:* interface{}

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirects"></a>

```go
func FollowRedirects() interface{}
```

- *Type:* interface{}

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersion"></a>

```go
func HttpVersion() *string
```

- *Type:* *string

---

##### `IgnoreServerCertificateError`<sup>Required</sup> <a name="IgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateError"></a>

```go
func IgnoreServerCertificateError() interface{}
```

- *Type:* interface{}

---

##### `InitialNavigationTimeout`<sup>Required</sup> <a name="InitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeout"></a>

```go
func InitialNavigationTimeout() *f64
```

- *Type:* *f64

---

##### `MinFailureDuration`<sup>Required</sup> <a name="MinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDuration"></a>

```go
func MinFailureDuration() *f64
```

- *Type:* *f64

---

##### `MinLocationFailed`<sup>Required</sup> <a name="MinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailed"></a>

```go
func MinLocationFailed() *f64
```

- *Type:* *f64

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorName"></a>

```go
func MonitorName() *string
```

- *Type:* *string

---

##### `MonitorPriority`<sup>Required</sup> <a name="MonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriority"></a>

```go
func MonitorPriority() *f64
```

- *Type:* *f64

---

##### `NoScreenshot`<sup>Required</sup> <a name="NoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshot"></a>

```go
func NoScreenshot() interface{}
```

- *Type:* interface{}

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRoles"></a>

```go
func RestrictedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `TickEvery`<sup>Required</sup> <a name="TickEvery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEvery"></a>

```go
func TickEvery() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestOptionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---


### SyntheticsTestOptionsListRetryOutputReference <a name="SyntheticsTestOptionsListRetryOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestOptionsListRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestOptionsListRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetInterval"></a>

```go
func ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestOptionsListRetry
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---


### SyntheticsTestOptionsListRumSettingsOutputReference <a name="SyntheticsTestOptionsListRumSettingsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestOptionsListRumSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestOptionsListRumSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetClientTokenId">ResetClientTokenId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetClientTokenId` <a name="ResetClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetClientTokenId"></a>

```go
func ResetClientTokenId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenIdInput">ClientTokenIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId">ClientTokenId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ClientTokenIdInput`<sup>Optional</sup> <a name="ClientTokenIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenIdInput"></a>

```go
func ClientTokenIdInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ClientTokenId`<sup>Required</sup> <a name="ClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId"></a>

```go
func ClientTokenId() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestOptionsListRumSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---


### SyntheticsTestRequestBasicauthOutputReference <a name="SyntheticsTestRequestBasicauthOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestRequestBasicauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestRequestBasicauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessTokenUrl">ResetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSessionToken">ResetSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetTokenApiAuthentication">ResetTokenApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetWorkstation">ResetWorkstation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetAccessTokenUrl` <a name="ResetAccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessTokenUrl"></a>

```go
func ResetAccessTokenUrl()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetResource"></a>

```go
func ResetResource()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSecretKey"></a>

```go
func ResetSecretKey()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetSessionToken` <a name="ResetSessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSessionToken"></a>

```go
func ResetSessionToken()
```

##### `ResetTokenApiAuthentication` <a name="ResetTokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetTokenApiAuthentication"></a>

```go
func ResetTokenApiAuthentication()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetWorkstation` <a name="ResetWorkstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetWorkstation"></a>

```go
func ResetWorkstation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionTokenInput">SessionTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthenticationInput">TokenApiAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstationInput">WorkstationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionToken">SessionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstation">Workstation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrlInput"></a>

```go
func AccessTokenUrlInput() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `SessionTokenInput`<sup>Optional</sup> <a name="SessionTokenInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionTokenInput"></a>

```go
func SessionTokenInput() *string
```

- *Type:* *string

---

##### `TokenApiAuthenticationInput`<sup>Optional</sup> <a name="TokenApiAuthenticationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthenticationInput"></a>

```go
func TokenApiAuthenticationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `WorkstationInput`<sup>Optional</sup> <a name="WorkstationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstationInput"></a>

```go
func WorkstationInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrl"></a>

```go
func AccessTokenUrl() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SessionToken`<sup>Required</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionToken"></a>

```go
func SessionToken() *string
```

- *Type:* *string

---

##### `TokenApiAuthentication`<sup>Required</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthentication"></a>

```go
func TokenApiAuthentication() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `Workstation`<sup>Required</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstation"></a>

```go
func Workstation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestRequestBasicauth
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---


### SyntheticsTestRequestClientCertificateCertOutputReference <a name="SyntheticsTestRequestClientCertificateCertOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestRequestClientCertificateCertOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestRequestClientCertificateCertOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resetFilename"></a>

```go
func ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestRequestClientCertificateCert
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---


### SyntheticsTestRequestClientCertificateKeyOutputReference <a name="SyntheticsTestRequestClientCertificateKeyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestRequestClientCertificateKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestRequestClientCertificateKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resetFilename"></a>

```go
func ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestRequestClientCertificateKey
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---


### SyntheticsTestRequestClientCertificateOutputReference <a name="SyntheticsTestRequestClientCertificateOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestRequestClientCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestRequestClientCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert">PutCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey">PutKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCert` <a name="PutCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert"></a>

```go
func PutCert(value SyntheticsTestRequestClientCertificateCert)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---

##### `PutKey` <a name="PutKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey"></a>

```go
func PutKey(value SyntheticsTestRequestClientCertificateKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference">SyntheticsTestRequestClientCertificateCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference">SyntheticsTestRequestClientCertificateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.certInput">CertInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.keyInput">KeyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.cert"></a>

```go
func Cert() SyntheticsTestRequestClientCertificateCertOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference">SyntheticsTestRequestClientCertificateCertOutputReference</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.key"></a>

```go
func Key() SyntheticsTestRequestClientCertificateKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference">SyntheticsTestRequestClientCertificateKeyOutputReference</a>

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.certInput"></a>

```go
func CertInput() SyntheticsTestRequestClientCertificateCert
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.keyInput"></a>

```go
func KeyInput() SyntheticsTestRequestClientCertificateKey
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestRequestClientCertificate
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---


### SyntheticsTestRequestDefinitionOutputReference <a name="SyntheticsTestRequestDefinitionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestRequestDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestRequestDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBodyType">ResetBodyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCallType">ResetCallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCertificateDomains">ResetCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServerPort">ResetDnsServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNoSavingResponseBody">ResetNoSavingResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNumberOfPackets">ResetNumberOfPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetServername">ResetServername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetShouldTrackHops">ResetShouldTrackHops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetBodyType` <a name="ResetBodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBodyType"></a>

```go
func ResetBodyType()
```

##### `ResetCallType` <a name="ResetCallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCallType"></a>

```go
func ResetCallType()
```

##### `ResetCertificateDomains` <a name="ResetCertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCertificateDomains"></a>

```go
func ResetCertificateDomains()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServer"></a>

```go
func ResetDnsServer()
```

##### `ResetDnsServerPort` <a name="ResetDnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServerPort"></a>

```go
func ResetDnsServerPort()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetNoSavingResponseBody` <a name="ResetNoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNoSavingResponseBody"></a>

```go
func ResetNoSavingResponseBody()
```

##### `ResetNumberOfPackets` <a name="ResetNumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNumberOfPackets"></a>

```go
func ResetNumberOfPackets()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServername` <a name="ResetServername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetServername"></a>

```go
func ResetServername()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetShouldTrackHops` <a name="ResetShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetShouldTrackHops"></a>

```go
func ResetShouldTrackHops()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyTypeInput">BodyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callTypeInput">CallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomainsInput">CertificateDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPortInput">DnsServerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBodyInput">NoSavingResponseBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPacketsInput">NumberOfPacketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servernameInput">ServernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHopsInput">ShouldTrackHopsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyType">BodyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callType">CallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomains">CertificateDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServer">DnsServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPort">DnsServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPackets">NumberOfPackets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servername">Servername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `BodyTypeInput`<sup>Optional</sup> <a name="BodyTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyTypeInput"></a>

```go
func BodyTypeInput() *string
```

- *Type:* *string

---

##### `CallTypeInput`<sup>Optional</sup> <a name="CallTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callTypeInput"></a>

```go
func CallTypeInput() *string
```

- *Type:* *string

---

##### `CertificateDomainsInput`<sup>Optional</sup> <a name="CertificateDomainsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomainsInput"></a>

```go
func CertificateDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerInput"></a>

```go
func DnsServerInput() *string
```

- *Type:* *string

---

##### `DnsServerPortInput`<sup>Optional</sup> <a name="DnsServerPortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPortInput"></a>

```go
func DnsServerPortInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NoSavingResponseBodyInput`<sup>Optional</sup> <a name="NoSavingResponseBodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBodyInput"></a>

```go
func NoSavingResponseBodyInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPacketsInput`<sup>Optional</sup> <a name="NumberOfPacketsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPacketsInput"></a>

```go
func NumberOfPacketsInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServernameInput`<sup>Optional</sup> <a name="ServernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servernameInput"></a>

```go
func ServernameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ShouldTrackHopsInput`<sup>Optional</sup> <a name="ShouldTrackHopsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHopsInput"></a>

```go
func ShouldTrackHopsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `BodyType`<sup>Required</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyType"></a>

```go
func BodyType() *string
```

- *Type:* *string

---

##### `CallType`<sup>Required</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callType"></a>

```go
func CallType() *string
```

- *Type:* *string

---

##### `CertificateDomains`<sup>Required</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomains"></a>

```go
func CertificateDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServer"></a>

```go
func DnsServer() *string
```

- *Type:* *string

---

##### `DnsServerPort`<sup>Required</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPort"></a>

```go
func DnsServerPort() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `NoSavingResponseBody`<sup>Required</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBody"></a>

```go
func NoSavingResponseBody() interface{}
```

- *Type:* interface{}

---

##### `NumberOfPackets`<sup>Required</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPackets"></a>

```go
func NumberOfPackets() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Servername`<sup>Required</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servername"></a>

```go
func Servername() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ShouldTrackHops`<sup>Required</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHops"></a>

```go
func ShouldTrackHops() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestRequestDefinition
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---


### SyntheticsTestRequestProxyOutputReference <a name="SyntheticsTestRequestProxyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/syntheticstest"

syntheticstest.NewSyntheticsTestRequestProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SyntheticsTestRequestProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() SyntheticsTestRequestProxy
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---


