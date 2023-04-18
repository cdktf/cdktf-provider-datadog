# `datadog_sensitive_data_scanner_rule`

Refer to the Terraform Registory for docs: [`datadog_sensitive_data_scanner_rule`](https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule).

# `sensitiveDataScannerRule` Submodule <a name="`sensitiveDataScannerRule` Submodule" id="@cdktf/provider-datadog.sensitiveDataScannerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerRule <a name="SensitiveDataScannerRule" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule datadog_sensitive_data_scanner_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

sensitivedatascannerrule.NewSensitiveDataScannerRule(scope Construct, id *string, config SensitiveDataScannerRuleConfig) SensitiveDataScannerRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig">SensitiveDataScannerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig">SensitiveDataScannerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement">PutTextReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetExcludedNamespaces">ResetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetStandardPatternId">ResetStandardPatternId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTextReplacement">ResetTextReplacement</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTextReplacement` <a name="PutTextReplacement" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement"></a>

```go
func PutTextReplacement(value SensitiveDataScannerRuleTextReplacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludedNamespaces` <a name="ResetExcludedNamespaces" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetExcludedNamespaces"></a>

```go
func ResetExcludedNamespaces()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetNamespaces"></a>

```go
func ResetNamespaces()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetStandardPatternId` <a name="ResetStandardPatternId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetStandardPatternId"></a>

```go
func ResetStandardPatternId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTextReplacement` <a name="ResetTextReplacement" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTextReplacement"></a>

```go
func ResetTextReplacement()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

sensitivedatascannerrule.SensitiveDataScannerRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

sensitivedatascannerrule.SensitiveDataScannerRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

sensitivedatascannerrule.SensitiveDataScannerRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacement">TextReplacement</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference">SensitiveDataScannerRuleTextReplacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespacesInput">ExcludedNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternIdInput">StandardPatternIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacementInput">TextReplacementInput</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternId">StandardPatternId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TextReplacement`<sup>Required</sup> <a name="TextReplacement" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacement"></a>

```go
func TextReplacement() SensitiveDataScannerRuleTextReplacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference">SensitiveDataScannerRuleTextReplacementOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludedNamespacesInput`<sup>Optional</sup> <a name="ExcludedNamespacesInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespacesInput"></a>

```go
func ExcludedNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `StandardPatternIdInput`<sup>Optional</sup> <a name="StandardPatternIdInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternIdInput"></a>

```go
func StandardPatternIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TextReplacementInput`<sup>Optional</sup> <a name="TextReplacementInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacementInput"></a>

```go
func TextReplacementInput() SensitiveDataScannerRuleTextReplacement
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludedNamespaces`<sup>Required</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespaces"></a>

```go
func ExcludedNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `StandardPatternId`<sup>Required</sup> <a name="StandardPatternId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternId"></a>

```go
func StandardPatternId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerRuleConfig <a name="SensitiveDataScannerRuleConfig" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

&sensitivedatascannerrule.SensitiveDataScannerRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	Description: *string,
	ExcludedNamespaces: *[]*string,
	Id: *string,
	IsEnabled: interface{},
	Name: *string,
	Namespaces: *[]*string,
	Pattern: *string,
	StandardPatternId: *string,
	Tags: *[]*string,
	TextReplacement: github.com/cdktf/cdktf-provider-datadog-go/datadog/v6.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Id of the scanning group the rule belongs to. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.description">Description</a></code> | <code>*string</code> | Description of the rule. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>*[]*string</code> | Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Whether or not the rule is enabled. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the rule. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | Attributes included in the scan. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Not included if there is a relationship to a standard pattern. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.standardPatternId">StandardPatternId</a></code> | <code>*string</code> | Id of the standard pattern the rule refers to. If provided, then pattern must not be provided. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | List of tags. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.textReplacement">TextReplacement</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | text_replacement block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Id of the scanning group the rule belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#group_id SensitiveDataScannerRule#group_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#description SensitiveDataScannerRule#description}

---

##### `ExcludedNamespaces`<sup>Optional</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.excludedNamespaces"></a>

```go
ExcludedNamespaces *[]*string
```

- *Type:* *[]*string

Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#excluded_namespaces SensitiveDataScannerRule#excluded_namespaces}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Whether or not the rule is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#is_enabled SensitiveDataScannerRule#is_enabled}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#name SensitiveDataScannerRule#name}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

Attributes included in the scan.

If namespaces is empty or missing, all attributes except excluded_namespaces are scanned. If both are missing the whole event is scanned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#namespaces SensitiveDataScannerRule#namespaces}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Not included if there is a relationship to a standard pattern.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#pattern SensitiveDataScannerRule#pattern}

---

##### `StandardPatternId`<sup>Optional</sup> <a name="StandardPatternId" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.standardPatternId"></a>

```go
StandardPatternId *string
```

- *Type:* *string

Id of the standard pattern the rule refers to. If provided, then pattern must not be provided.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#standard_pattern_id SensitiveDataScannerRule#standard_pattern_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

List of tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#tags SensitiveDataScannerRule#tags}

---

##### `TextReplacement`<sup>Optional</sup> <a name="TextReplacement" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.textReplacement"></a>

```go
TextReplacement SensitiveDataScannerRuleTextReplacement
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

text_replacement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#text_replacement SensitiveDataScannerRule#text_replacement}

---

### SensitiveDataScannerRuleTextReplacement <a name="SensitiveDataScannerRuleTextReplacement" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

&sensitivedatascannerrule.SensitiveDataScannerRuleTextReplacement {
	Type: *string,
	NumberOfChars: *f64,
	ReplacementString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.type">Type</a></code> | <code>*string</code> | Type of the replacement text. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.numberOfChars">NumberOfChars</a></code> | <code>*f64</code> | Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.replacementString">ReplacementString</a></code> | <code>*string</code> | Required if type == 'replacement_string'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the replacement text.

None means no replacement. hash means the data will be stubbed. replacement_string means that one can chose a text to replace the data. partial_replacement_from_beginning allows a user to partially replace the data from the beginning, and partial_replacement_from_end on the other hand, allows to replace data from the end. Valid values are `none`, `hash`, `replacement_string`, `partial_replacement_from_beginning`, `partial_replacement_from_end`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#type SensitiveDataScannerRule#type}

---

##### `NumberOfChars`<sup>Optional</sup> <a name="NumberOfChars" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.numberOfChars"></a>

```go
NumberOfChars *f64
```

- *Type:* *f64

Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#number_of_chars SensitiveDataScannerRule#number_of_chars}

---

##### `ReplacementString`<sup>Optional</sup> <a name="ReplacementString" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.replacementString"></a>

```go
ReplacementString *string
```

- *Type:* *string

Required if type == 'replacement_string'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/sensitive_data_scanner_rule#replacement_string SensitiveDataScannerRule#replacement_string}

---

## Classes <a name="Classes" id="Classes"></a>

### SensitiveDataScannerRuleTextReplacementOutputReference <a name="SensitiveDataScannerRuleTextReplacementOutputReference" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v6/sensitivedatascannerrule"

sensitivedatascannerrule.NewSensitiveDataScannerRuleTextReplacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SensitiveDataScannerRuleTextReplacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetNumberOfChars">ResetNumberOfChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetReplacementString">ResetReplacementString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfChars` <a name="ResetNumberOfChars" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetNumberOfChars"></a>

```go
func ResetNumberOfChars()
```

##### `ResetReplacementString` <a name="ResetReplacementString" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetReplacementString"></a>

```go
func ResetReplacementString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfCharsInput">NumberOfCharsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementStringInput">ReplacementStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfChars">NumberOfChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementString">ReplacementString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfCharsInput`<sup>Optional</sup> <a name="NumberOfCharsInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfCharsInput"></a>

```go
func NumberOfCharsInput() *f64
```

- *Type:* *f64

---

##### `ReplacementStringInput`<sup>Optional</sup> <a name="ReplacementStringInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementStringInput"></a>

```go
func ReplacementStringInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `NumberOfChars`<sup>Required</sup> <a name="NumberOfChars" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfChars"></a>

```go
func NumberOfChars() *f64
```

- *Type:* *f64

---

##### `ReplacementString`<sup>Required</sup> <a name="ReplacementString" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementString"></a>

```go
func ReplacementString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.internalValue"></a>

```go
func InternalValue() SensitiveDataScannerRuleTextReplacement
```

- *Type:* <a href="#@cdktf/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---



