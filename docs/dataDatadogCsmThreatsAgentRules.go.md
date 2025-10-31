# `dataDatadogCsmThreatsAgentRules` Submodule <a name="`dataDatadogCsmThreatsAgentRules` Submodule" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCsmThreatsAgentRules <a name="DataDatadogCsmThreatsAgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules datadog_csm_threats_agent_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRules(scope Construct, id *string, config DataDatadogCsmThreatsAgentRulesConfig) DataDatadogCsmThreatsAgentRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig">DataDatadogCsmThreatsAgentRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig">DataDatadogCsmThreatsAgentRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.resetPolicyId"></a>

```go
func ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatadogCsmThreatsAgentRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogCsmThreatsAgentRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogCsmThreatsAgentRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCsmThreatsAgentRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRules">AgentRules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList">DataDatadogCsmThreatsAgentRulesAgentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRulesIds">AgentRulesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AgentRules`<sup>Required</sup> <a name="AgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRules"></a>

```go
func AgentRules() DataDatadogCsmThreatsAgentRulesAgentRulesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList">DataDatadogCsmThreatsAgentRulesAgentRulesList</a>

---

##### `AgentRulesIds`<sup>Required</sup> <a name="AgentRulesIds" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.agentRulesIds"></a>

```go
func AgentRulesIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCsmThreatsAgentRulesAgentRules <a name="DataDatadogCsmThreatsAgentRulesAgentRules" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

&datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRulesAgentRules {

}
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActions <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActions" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

&datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRulesAgentRulesActions {

}
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

&datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash {

}
```


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

&datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet {

}
```


### DataDatadogCsmThreatsAgentRulesConfig <a name="DataDatadogCsmThreatsAgentRulesConfig" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

&datadatadogcsmthreatsagentrules.DataDatadogCsmThreatsAgentRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Listing only the rules in the policy with this field as the ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Listing only the rules in the policy with this field as the ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/data-sources/csm_threats_agent_rules#policy_id DataDatadogCsmThreatsAgentRules#policy_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHash</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsList <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRulesAgentRulesActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCsmThreatsAgentRulesAgentRulesActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get"></a>

```go
func Get(index *f64) DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.set">Set</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions">DataDatadogCsmThreatsAgentRulesAgentRulesActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.hash"></a>

```go
func Hash() DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsHashOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.set"></a>

```go
func Set() DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogCsmThreatsAgentRulesAgentRulesActions
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActions">DataDatadogCsmThreatsAgentRulesAgentRulesActions</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.append">Append</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.inherited">Inherited</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Append`<sup>Required</sup> <a name="Append" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.append"></a>

```go
func Append() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.inherited"></a>

```go
func Inherited() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet">DataDatadogCsmThreatsAgentRulesAgentRulesActionsSet</a>

---


### DataDatadogCsmThreatsAgentRulesAgentRulesList <a name="DataDatadogCsmThreatsAgentRulesAgentRulesList" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRulesAgentRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCsmThreatsAgentRulesAgentRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get"></a>

```go
func Get(index *f64) DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference <a name="DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-datadog-go/datadog/v12/datadatadogcsmthreatsagentrules"

datadatadogcsmthreatsagentrules.NewDataDatadogCsmThreatsAgentRulesAgentRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList">DataDatadogCsmThreatsAgentRulesAgentRulesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.productTags">ProductTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules">DataDatadogCsmThreatsAgentRulesAgentRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.actions"></a>

```go
func Actions() DataDatadogCsmThreatsAgentRulesAgentRulesActionsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesActionsList">DataDatadogCsmThreatsAgentRulesAgentRulesActionsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProductTags`<sup>Required</sup> <a name="ProductTags" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.productTags"></a>

```go
func ProductTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogCsmThreatsAgentRulesAgentRules
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCsmThreatsAgentRules.DataDatadogCsmThreatsAgentRulesAgentRules">DataDatadogCsmThreatsAgentRulesAgentRules</a>

---



